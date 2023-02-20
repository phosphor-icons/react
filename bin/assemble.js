#!/usr/bin/env node
import fs from "node:fs";
import path from "node:path";
import chalk from "chalk";
import { exec } from "node:child_process";

import { ASSETS_PATH, COMPONENTS_PATH, INDEX_PATH } from "./index.js";

const icons = {};
const weights = ["thin", "light", "regular", "bold", "fill", "duotone"];

main();

function main() {
  exec(
    "git submodule update --remote --init --recursive",
    (err, stdout, stderr) => {
      if (err) {
        console.error(`${chalk.inverse.red(" ERR ")} ${err.message}`);
        process.exit(1);
      }

      if (stderr) {
        console.error(`${chalk.inverse.red(" ERR ")} ${stderr}`);
        process.exit(1);
      }

      console.log(
        `${chalk.inverse.green(" OK ")} Updated submodule @phosphor-icons/core`
      );

      loadWeights();
      generateComponents();
      generateExports();
    }
  );
}

function readFile(pathname, name, weight) {
  const file = fs.readFileSync(pathname);
  icons[name][weight] = file
    .toString("utf-8")
    .replace(/^.*<\?xml.*?\>/g, "")
    .replace(/<svg.*?>/g, "")
    .replace(/<\/svg>/g, "")
    .replace(
      /<rect width="25[\d,\.]+" height="25[\d,\.]+" fill="none".*?\/>/g,
      ""
    )
    .replace(/<title.*?/, "")
    .replace(/"#0+"/g, "{color}")
    .replace(/fill\-rule/g, "fillRule")
    .replace(/stroke-linecap/g, "strokeLinecap")
    .replace(/stroke-linejoin/g, "strokeLinejoin")
    .replace(/stroke-width/g, "strokeWidth")
    .replace(/stroke-miterlimit/g, "strokeMiterlimit");
}

function loadWeights() {
  const weightFolder = fs.readdirSync(ASSETS_PATH, "utf-8");

  weightFolder.forEach((weightFolder) => {
    if (!fs.lstatSync(path.join(ASSETS_PATH, weightFolder)).isDirectory())
      return;

    if (!weights.includes(weightFolder)) {
      console.error(
        `${chalk.inverse.red(" ERR ")} Bad folder name ${weightFolder}`
      );
      process.exit(1);
    }

    const files = fs.readdirSync(path.join(ASSETS_PATH, weightFolder));
    files.forEach((filename) => {
      let name;
      const nameParts = filename.split(".svg")[0].split("-");
      if (nameParts[nameParts.length - 1] === weightFolder) {
        name = nameParts.slice(0, -1).join("-");
      } else {
        name = nameParts.join("-");
      }

      if (!icons[name]) {
        icons[name] = {};
      }
      const filepath = path.join(ASSETS_PATH, weightFolder, filename);
      readFile(filepath, name, weightFolder);
    });
  });
}

function checkFiles(icon) {
  const weightsPresent = Object.keys(icon);
  return (
    weightsPresent.length === 6 &&
    weightsPresent.every((w) => weights.includes(w))
  );
}

function generateComponents() {
  let passes = 0;
  let fails = 0;

  if (fs.existsSync(COMPONENTS_PATH)) {
    fs.rmSync(COMPONENTS_PATH, { recursive: true });
  }
  fs.mkdirSync(COMPONENTS_PATH);

  for (let key in icons) {
    const icon = icons[key];
    const name = key
      .split("-")
      .map((substr) => substr.replace(/^\w/, (c) => c.toUpperCase()))
      .join("");

    if (!checkFiles(icon)) {
      fails += 1;
      console.error(
        `${chalk.inverse.red(" FAIL ")} ${name} is missing weights`
      );
      console.group();
      console.error(weights.filter((w) => !Object.keys(icon).includes(w)));
      console.groupEnd();
      continue;
    }

    let componentString = `\
/* GENERATED FILE */
import { forwardRef, ReactElement } from "react";
import { IconWeight, Icon, IconBase } from "../lib";

const weights = new Map<IconWeight, ReactElement>([
${Object.entries(icon)
  .map(([weight, path]) => `["${weight}", <>${path.trim()}</>]`)
  .join(",")}
]);
`;

    componentString += `
const ${name}: Icon = forwardRef((props, ref) => (
  <IconBase ref={ref} {...props} weights={weights} />
));

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
export type { Icon, IconProps, IconWeight } from "./lib";
export { IconContext, IconBase } from "./lib";

`;
  for (let key in icons) {
    const name = key
      .split("-")
      .map((substr) => substr.replace(/^\w/, (c) => c.toUpperCase()))
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
