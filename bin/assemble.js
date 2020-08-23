#!/usr/bin/env node
const fs = require("fs");
const path = require("path");
const chalk = require("chalk");

const { ASSETS_PATH, COMPONENTS_PATH, INDEX_PATH } = require("./index");

const icons = {};
const weights = ["thin", "light", "regular", "bold", "fill", "duotone"];

function readFile(folder, pathname, weight) {
  const file = fs.readFileSync(pathname);
  icons[folder][weight] = file
    .toString("utf-8")
    .replace(/^.*<\?xml.*/g, "")
    .replace(/<svg.*/g, "")
    .replace(/<\/svg>/g, "")
    .replace(/<rect.*fill="#fff"\/>/g, "") // remove me when bounding rect is fixed
    .replace(/<title.*/g, "")
    // .replace(/fill="#0+"/g, "fill={color}")
    .replace(/"#0+"/g, "{color}")
    // .replace(/stroke="#0+"/g, "stroke={color}")
    .replace(/fill\-rule/g, "fillRule")
    .replace(/stroke-linecap/g, "strokeLinecap")
    .replace(/stroke-linejoin/g, "strokeLinejoin")
    .replace(/stroke-width/g, "strokeWidth")
    .replace(/stroke-miterlimit/g, "strokeMiterlimit");
}

function readFiles() {
  const folders = fs.readdirSync(ASSETS_PATH, "utf-8");

  folders.forEach(folder => {
    if (!fs.lstatSync(path.join(ASSETS_PATH, folder)).isDirectory()) return;
    icons[folder] = {};

    const files = fs.readdirSync(path.join(ASSETS_PATH, folder));
    files.forEach(filename => {
      const filepath = path.join(ASSETS_PATH, folder, filename);
      const weight = filename
        .split(".svg")[0]
        .split("-")
        .slice(-1)[0];
      switch (weight) {
        case "thin":
        case "light":
        case "bold":
        case "fill":
        case "duotone":
          readFile(folder, filepath, weight);
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

function generateComponents() {
  let passes = 0;
  let fails = 0;

  if (!fs.existsSync(COMPONENTS_PATH)) {
    fs.mkdirSync(COMPONENTS_PATH);
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
      return (<>${icon[weight]}</>)`;
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
        fill={color ?? contextColor}
        viewBox="0 0 256 256"
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
      fs.writeFileSync(
        path.join(COMPONENTS_PATH, `${name}.tsx`),
        componentString,
        {
          flag: "w",
        }
      );
      console.log(`${chalk.inverse.green(" DONE ")} ${name}`);
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
  if (passes > 0)
    console.log(
      chalk.green(`${passes} component${passes > 1 ? "s" : ""} generated`)
    );
  if (fails > 0)
    console.log(chalk.red(`${fails} component${fails > 1 ? "s" : ""} failed`));
}

function generateExports() {
  let indexString = `\
/* GENERATED FILE */
export type { Icon, IconProps } from "./lib";
export { IconContext } from "./lib";

`;
  for (let key in icons) {
    const name = key
      .split("-")
      .map(substr => substr.replace(/^\w/, c => c.toUpperCase()))
      .join("");
    indexString += `\
export { default as ${name} } from "./icons/${name}";
`;
  }
  try {
    fs.writeFileSync(INDEX_PATH, indexString, {
      flag: "w",
    });
    console.log(chalk.green("Export success"));
  } catch (err) {
    console.error(chalk.red("Export failed"));
    console.group();
    console.error(err);
    console.groupEnd();
  }
}

readFiles();
generateComponents();
generateExports();
