#!/usr/bin/env node
import fs from "node:fs";
import path from "node:path";
import chalk from "chalk";
import { exec } from "node:child_process";

import {
  ALIASES,
  CSR_PATH,
  SSR_PATH,
  DEFS_PATH,
  INDEX_PATH,
  WEIGHTS,
  readAssetsFromDisk,
  verifyIcons,
  AssetMap,
} from ".";

(function main() {
  exec(
    "git submodule update --remote --init --force --recursive",
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

      const icons = readAssetsFromDisk();
      if (!verifyIcons(icons)) {
        process.exit(1);
      }

      generateComponents(icons);
      generateExports(icons);
    }
  );
})();

function generateComponents(icons: AssetMap) {
  let passes = 0;
  let fails = 0;

  if (fs.existsSync(CSR_PATH)) {
    fs.rmSync(CSR_PATH, { recursive: true });
  }
  fs.mkdirSync(CSR_PATH);

  if (fs.existsSync(SSR_PATH)) {
    fs.rmSync(SSR_PATH, { recursive: true });
  }
  fs.mkdirSync(SSR_PATH);

  for (let key in icons) {
    const icon = icons[key];
    const name = pascalize(key);

    let defString = `\
/* GENERATED FILE */
import React, { ReactElement } from "react";
import { IconWeight } from "../lib";

export default new Map<IconWeight, ReactElement>([
${Object.entries(icon)
  .map(([weight, { jsx }]) => `["${weight}", <>${jsx.trim()}</>]`)
  .join(",")}
]);
`;

    let doc = `
/**
 * ${WEIGHTS.map(
   (weight) =>
     `@${weight} ![img](data:image/svg+xml;base64,${icon[weight].preview})`
 ).join("\n * ")}
 */`;

    let csrString = `
/* GENERATED FILE */
import React, { forwardRef } from "react";
import type { Icon } from "../lib/types";
import IconBase from "../lib/IconBase";
import weights from "../defs/${name}";

${doc}
const I: Icon = forwardRef((props, ref) => (
  <IconBase ref={ref} {...props} weights={weights} />
));

I.displayName = "${name}";
export { I as ${name}${
      !!ALIASES[key] ? `, I as ${pascalize(ALIASES[key])}` : ""
    } }
`;

    let ssrString = `
/* GENERATED FILE */
import React, { forwardRef } from "react";
import type { Icon } from "../lib/types";
import SSRBase from "../lib/SSRBase";
import weights from "../defs/${name}";

${doc}
const I: Icon = forwardRef((props, ref) => (
  <SSRBase ref={ref} {...props} weights={weights} />
));

I.displayName = "${name}";
export { I as ${name}${
      !!ALIASES[key] ? `, I as ${pascalize(ALIASES[key])}` : ""
    } }
`;

    try {
      fs.writeFileSync(path.join(CSR_PATH, `${name}.tsx`), csrString, {
        flag: "w",
      });
      fs.writeFileSync(path.join(SSR_PATH, `${name}.tsx`), ssrString, {
        flag: "w",
      });
      fs.writeFileSync(path.join(DEFS_PATH, `${name}.tsx`), defString, {
        flag: "w",
      });
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

function generateExports(icons: AssetMap) {
  let csrIndex = `\
/* GENERATED FILE */
export type { Icon, IconProps, IconWeight } from "./lib";
export { IconContext, IconBase } from "./lib";
export * as SSR from "./ssr";

`;

  let ssrIndex = `\
 /* GENERATED FILE */
export { default as SSRBase } from "../lib/SSRBase";

`;
  for (let key in icons) {
    const name = pascalize(key);
    csrIndex += `\
export * from "./csr/${name}";
`;
    ssrIndex += `\
export * from "./${name}";
`;
  }
  try {
    fs.writeFileSync(INDEX_PATH, csrIndex, {
      flag: "w",
    });
    fs.writeFileSync(path.join(SSR_PATH, "index.ts"), ssrIndex, {
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

function pascalize(str) {
  return str
    .split("-")
    .map((substr) => substr.replace(/^\w/, (c) => c.toUpperCase()))
    .join("");
}
