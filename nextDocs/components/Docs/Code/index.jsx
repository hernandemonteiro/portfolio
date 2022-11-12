"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const highlight_js_1 = __importDefault(require("highlight.js"));
const javascript_1 = __importDefault(require("highlight.js/lib/languages/javascript"));
const typescript_1 = __importDefault(require("highlight.js/lib/languages/typescript"));
require("highlight.js/styles/github-dark.css");
highlight_js_1.default.registerLanguage("javascript", javascript_1.default);
highlight_js_1.default.registerLanguage("typescript", typescript_1.default);
function Code(props) {
    setTimeout(() => highlight_js_1.default.highlightAll(), 300);
    return (<pre style={{ margin: "1%" }}>
      <code style={{ borderRadius: "7px" }} className={props.language}>{`${props.code}`}</code>
    </pre>);
}
exports.default = Code;
