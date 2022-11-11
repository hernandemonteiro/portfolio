"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const Menu_1 = __importDefault(require("../Menu"));
function MainReactDocs(props) {
    return (<main style={{
            display: "flex",
            width: "100%",
            height: "92vh",
            zIndex: 1,
            backgroundColor: "white" || "#0e0f12",
        }}>
      {props.disabledIndexMenu === true ? ("") : (<Menu_1.default subDirs={props.subDirs} dirs={props.dirs}/>)}
      <div style={{
            width: props.disabledIndexMenu === true ? "100%" : "77%",
            minHeight: "90vh",
            overflow: "auto",
            padding: "2%",
        }}>
        {props.children}
      </div>
    </main>);
}
exports.default = MainReactDocs;
