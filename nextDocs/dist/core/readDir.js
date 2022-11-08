"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.readDirs = exports.readNavDir = void 0;
const fs_1 = __importDefault(require("fs"));
function readNavDir(dir) {
    let structSubDirs = {};
    fs_1.default.readdirSync(dir)
        .sort((a, b) => fs_1.default.statSync(dir + "/" + a).mtime.getTime() -
        fs_1.default.statSync(dir + "/" + b).mtime.getTime())
        .forEach((file) => {
        if (fs_1.default.lstatSync(dir + "/" + file).isFile()) {
            structSubDirs[file] = null;
        }
        else if (fs_1.default.lstatSync(dir + "/" + file).isDirectory()) {
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
exports.readNavDir = readNavDir;
function readDirs(dir) {
    let struct = {};
    fs_1.default.readdirSync(dir)
        .sort((a, b) => fs_1.default.statSync(dir + "/" + a).mtime.getTime() -
        fs_1.default.statSync(dir + "/" + b).mtime.getTime())
        .forEach((file) => {
        if (fs_1.default.lstatSync(dir + "/" + file).isFile()) {
            struct[file] = null;
        }
        else if (fs_1.default.lstatSync(dir + "/" + file).isDirectory()) {
            struct[file] = readDirs(dir + "/" + file);
        }
    });
    return struct;
}
exports.readDirs = readDirs;
