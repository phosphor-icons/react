#!/usr/bin/env node
const fs = require("fs");
const path = require("path");
const chalk = require("chalk");

const assetsPath = path.join(__dirname, "../assets");
const outputPath = path.join(__dirname, "icons");

const icons = {};
const weights = ["thin", "light", "regular", "bold", "fill", "duotone"];

function readFile(folder, pathname, weight) {
  const file = fs.readFileSync(pathname);
  icons[folder][weight] = file
    .toString("utf-8")
    .replace(
      `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">`,
      ""
    )
    .replace(
      `<g fill="none" fill-rule="evenodd">`,
      `<g fill="none" fill-rule="evenodd" stroke="none" strokeWidth="1">`
    )
    .replace(/fill\-rule/g, "fillRule")
    .replace("</svg>", "")
    .replace(/fill="#000"/g, `fill=\{color\}`);
}

function readFiles() {
  const folders = fs.readdirSync(assetsPath, "utf-8");

  folders.forEach(folder => {
    icons[folder] = {};

    const files = fs.readdirSync(path.join(assetsPath, folder));
    files.forEach(filename => {
      const filepath = path.join(assetsPath, folder, filename);
      const weight = filename
        .split(".svg")[0]
        .split("-")
        .slice(-1)[0];
      switch (weight) {
        case "thin":
        case "light":
        case "bold":
        case "fill":
          readFile(folder, filepath, weight);
          break;
        case "duo":
          readFile(folder, filepath, "duotone");
          break;
        default:
          readFile(folder, filepath, "regular");
          break;
      }
    });
  });
}

function checkFiles(icon) {
  const weightsPresent = Object.keys(icon);
  return (
    weightsPresent.length === 6 &&
    weightsPresent.every(w => weights.includes(w))
  );
}

function assembleComponents() {
  let passes = 0;
  let fails = 0;

  if (!fs.existsSync(outputPath)){
    fs.mkdirSync(outputPath);
  }

  for (let key in icons) {
    const icon = icons[key];
    const name = key
      .split("-")
      .map(substr => substr.replace(/^\w/, c => c.toUpperCase()))
      .join("");
    let componentString = `\
/* GENERATED FILE */
import React, { forwardRef, useContext } from "react";
import { IconProps, IconContext } from "../lib";

const renderPathFor = (weight: string, color: string): JSX.Element | null => {
  switch (weight) {`;

    if (!checkFiles(icon)) {
      fails += 1;
      console.error(
        `${chalk.inverse.red(" FAIL ")} ${name} is missing weights`
      );
      console.group();
      console.error(weights.filter(w => !Object.keys(icon).includes(w)));
      console.groupEnd();
      continue;
    }

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

export default ${name};
`;
    try {
      fs.writeFileSync(path.join(outputPath, `${name}.tsx`), componentString, {
        flag: "w",
      });
      console.log(`${chalk.inverse.green(" OK ")} ${name}`);
      passes += 1;
    } catch (err) {
      console.error(
        `${chalk.inverse.red(" FAIL ")} ${name} could not be saved`
      );
      console.group();
      console.error(err);
      console.groupEnd();
      fails += 1;
    }
  }
  // TODO: implement logging with async writeFile()
  if (passes > 0) console.log(chalk.green(`${passes} component${passes > 1 ? "s" : ""} generated`));
  if (fails > 0) console.log(chalk.red(`${fails} component${fails > 1 ? "s" : ""} failed`));
}

readFiles();
assembleComponents();
