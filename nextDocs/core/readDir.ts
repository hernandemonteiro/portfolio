import fs from "fs";
export function readNavDir(dir: any) {
  let structSubDirs: any = {};
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

export function readDirs(dir: string) {
  let struct: any = {};

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