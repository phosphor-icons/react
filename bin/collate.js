#!/usr/bin/env node
const fs = require("fs");
const path = require("path");
const chalk = require("chalk");

const { ASSETS_PATH } = require("./index");

function moveToAndCreateFolderIfNeeded(fileName, folderName) {
  const oldPath = path.join(ASSETS_PATH, fileName);
  const folderPath = path.join(ASSETS_PATH, folderName);
  const newPath = path.join(folderPath, fileName);

  // Make directory if needed
  if (!fs.existsSync(folderPath) || !fs.lstatSync(folderPath).isDirectory()) {
    fs.mkdirSync(folderPath);
  }

  move(oldPath, newPath);
}

function move(oldPath, newPath) {
  fs.rename(oldPath, newPath, err => {
    if (err) {
      if (err.code === "EXDEV") {
        console.error(
          `${chalk.inverse.red(" FAIL ")} ${newPath} already exists`
        );
        copy();
      } else {
        console.error(
          `${chalk.inverse.red(" FAIL ")} ${newPath} could not be created`
        );
      }
      return;
    }
  });

  console.log(`${chalk.inverse.green(" DONE ")} ${newPath}`);

  function copy() {
    var readStream = fs.createReadStream(oldPath);
    var writeStream = fs.createWriteStream(newPath);

    readStream.on("error", callback);
    writeStream.on("error", callback);

    readStream.on("close", function() {
      fs.unlink(oldPath, callback);
    });

    readStream.pipe(writeStream);
    console.log(`${chalk.inverse.green(" DONE ")} ${newPath}`);
  }
}

function collate() {
  const files = fs.readdirSync(ASSETS_PATH, "utf-8");

  files.forEach(file => {
    // Only SVGs!
    if (!file.match(/.*\.svg$/)) return;

    let folder;

    const filenameParts = file.split(".svg")[0].split("-");
    switch (filenameParts.slice(-1)[0]) {
      case "thin":
      case "light":
      case "bold":
      case "fill":
      case "duotone":
        folder = filenameParts.slice(0, -1).join("-");
        break;
      default:
        folder = filenameParts.join("-");
        break;
    }

    moveToAndCreateFolderIfNeeded(file, folder);
  });
}

collate();
