#!/usr/bin/env node
const fs = require("fs");
const path = require("path");
const util = require("util");
// const yargs = require("yargs");

const assetsPath = path.join(__dirname, "../assets");
const outputPath = path.join(__dirname, "icons");

const icons = {};

function readFile(folder, pathname, weight) {
  const file = fs.readFileSync(pathname);
  icons[folder][weight] = file
    .toString("utf8")
    .replace(
      `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">`,
      ""
    )
    .replace(
      `<g fill="none" fill-rule="evenodd">`,
      `<g fill="none" fillRule="evenodd" stroke="none" strokeWidth="1">`
    )
    .replace("</svg>", "")
    .replace(/fill="#000"/g, `fill=\{color\}`);
}

function readFiles() {
  const folders = fs.readdirSync(assetsPath, "utf-8");

  folders.forEach(folder => {
    icons[folder] = {};
    const files = fs.readdirSync(path.join(assetsPath, folder));
    files.forEach(filename => {
      const weight = filename
        .split(".svg")[0]
        .split("-")
        .slice(-1)[0];
      switch (weight) {
        case "thin":
        case "light":
        case "bold":
        case "fill":
        case "duo":
          readFile(folder, path.join(assetsPath, folder, filename), weight);
          break;
        default:
          readFile(folder, path.join(assetsPath, folder, filename), "regular");
          break;
      }
    });
  });
}

function assemble() {
  for (let key in icons) {
    const icon = icons[key];
    const name = key
      .split("-")
      .map(substr => substr.replace(/^\w/, c => c.toUpperCase()))
      .join("");
    let componentString = `\
import React, { forwardRef, useContext } from "react";
import { IconProps, IconContext } from "../lib";

const renderPathFor = (weight: string, color: string): JSX.Element | null => {
  switch (weight) {`;
    for (let weight in icon) {
      componentString += `
    case "${weight}":
      return (${icon[weight]})`;
    }
    componentString += `
    default:
      console.error(
        'Unsupported icon weight. Choose from "thin", "light", "regular", "bold", "fill", or "duotone".'
      );
      return null;
  }
};

const ${name} = forwardRef<SVGSVGElement, IconProps>(
  (props, ref) => {
    const { color, size, weight, mirrored, ...rest } = props;
    const {
      color: contextColor,
      size: contextSize,
      weight: contextWeight,
      mirrored: contextMirrored,
      ...contextRest
    } = useContext(IconContext);

    return (
      <svg
        ref={ref}
        xmlns="http://www.w3.org/2000/svg"
        width={size ?? contextSize}
        height={size ?? contextSize}
        viewBox="0 0 16 16"
        fill="none"
        stroke={color ?? contextColor}
        transform={mirrored || contextMirrored ? "scale(-1, 1)" : undefined}
        {...contextRest}
        {...rest}
      >
        {renderPathFor(weight ?? contextWeight, color ?? contextColor)}
      </svg>
    );
  }
);

${name}.displayName = "${name}";

export default ${name};`;
    fs.writeFile(
      path.join(outputPath, `${name}.tsx`),
      componentString,
      { flag: "w" },
      err => {
        if (err) {
          console.error(err);
        }
      }
    );
  }
}

readFiles();
assemble();
