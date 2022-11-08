"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const Template_1 = __importDefault(require("./components/Template"));
const router_1 = require("next/router");
function ComponentOrDocs(props) {
    const route = (0, router_1.useRouter)();
    return (<>
      {route.asPath.match("/docs") ? (<Template_1.default dirs={props.properties.navDir} subDirs={props.properties.dirs} projectLogo={props.projectLogo} disabledIndexMenu={props.disabledIndexMenu} customFooter={props.customFooter} customHeader={props.customHeader} github={props.github} facebook={props.facebook} instagram={props.instagram} linkedin={props.linkedin} discord={props.discord} website={props.website}>
          <props.properties.Component {...props.properties.pageProps}/>
        </Template_1.default>) : (<props.properties.Component {...props.properties.pageProps}/>)}
    </>);
}
exports.default = ComponentOrDocs;
