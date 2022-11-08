"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
function PrimaryElementMenu(props) {
    return (<>
      <hr />
      <a href={props.path} style={{ color: "black", margin: props.margin }}>
        {props.name}
      </a>
      <hr />
    </>);
}
exports.default = PrimaryElementMenu;
