import React from "react";
import TemplateReactDocs from "./components/Template";
import { useRouter } from "next/router";

import fs from "fs";
export function readNavDir(dir) {
  let structSubDirs = {};
  fs.readdirSync(dir)
    .sort(
      (a, b) =>
        fs.statSync(dir + "/" + a).mtime.getTime() -
        fs.statSync(dir + "/" + b).mtime.getTime()
    )
    .forEach((file) => {
      if (fs.lstatSync(dir + "/" + file).isFile()) {
        structSubDirs[file] = null;
      } else if (fs.lstatSync(dir + "/" + file).isDirectory()) {
        structSubDirs[file] = readDirs(dir + "/" + file);
      }
    });
  const arrayDirs = [];
  for (const dir in structSubDirs) {
    !dir.match(".tsx" || ".ts" || ".js" || ".jsx" || ".md" || ".mdx") &&
      arrayDirs.push(dir);
  }
  return arrayDirs.reverse();
}

export function readDirs(dir) {
  let struct = {};

  fs.readdirSync(dir)
    .sort(
      (a, b) =>
        fs.statSync(dir + "/" + a).mtime.getTime() -
        fs.statSync(dir + "/" + b).mtime.getTime()
    )
    .forEach((file) => {
      if (fs.lstatSync(dir + "/" + file).isFile()) {
        struct[file] = null;
      } else if (fs.lstatSync(dir + "/" + file).isDirectory()) {
        struct[file] = readDirs(dir + "/" + file);
      }
    });
  return struct;
}

export function ComponentOrDocs(props) {
  const route = useRouter();
  return (
    <>
      {route.asPath.match("/docs") ? (
        <TemplateReactDocs
          dirs={props.navDir}
          subDirs={props.dirs}
          backgroundColorDefined="black"
          projectName={"Hernande Monteiro - Personal Blog"}
        >
          <props.Component {...props.pageProps} />
        </TemplateReactDocs>
      ) : (
        <props.Component {...props.pageProps} />
      )}
    </>
  );
}
