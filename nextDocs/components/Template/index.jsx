"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const Footer_1 = __importDefault(require("../Footer"));
const Header_1 = __importDefault(require("../Header"));
const Main_1 = __importDefault(require("../Main"));
function TemplateReactDocs(props) {
    return (<div style={{
            width: "100%",
            height: "100vh",
        }}>
      <Header_1.default logo={props.projectLogo} customHeader={props.customHeader} github={props.github} facebook={props.facebook} instagram={props.instagram} linkedin={props.linkedin} discord={props.discord} website={props.website}/>
      <Main_1.default dirs={props.dirs} subDirs={props.subDirs} disabledIndexMenu={props.disabledIndexMenu}>
        {props.children}
      </Main_1.default>
      <Footer_1.default customFooter={props.customFooter}/>
    </div>);
}
exports.default = TemplateReactDocs;
