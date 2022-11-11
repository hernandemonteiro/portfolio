"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const PrimaryElementMenu_1 = __importDefault(require("./PrimaryElementMenu"));
function MenuReactDocs(props) {
    return (<nav style={{
            display: "flex",
            flexDirection: "column",
            width: "23%",
            padding: "1%",
            borderRight: "1px solid rgba(0,0,0,0.5)",
        }}>
      <PrimaryElementMenu_1.default path={"/docs"} name={"GETTING STARTED!"} margin={"5%"}/>

      {props.dirs.map((dir) => (<div key={dir}>
          {Object.keys(props.subDirs[dir]).length > 1 ? (<>
              <hr />
              <details>
                <summary style={{
                    margin: "5%",
                    fontWeight: "bold",
                    cursor: "pointer",
                    color: "black",
                }}>
                  {dir.toUpperCase()}
                </summary>
                <>
                  {Object.keys(props.subDirs[dir]).map((elementSub) => {
                    return elementSub === "index.tsx" ? (<PrimaryElementMenu_1.default key={elementSub} path={`/docs/${dir}`} name={"INTRODUÇÂO"} margin={"15%"}/>) : (<PrimaryElementMenu_1.default key={elementSub} path={`/docs/${dir}/${elementSub}`} name={removeExtensionAndFormateName(elementSub)} margin={"15%"}/>);
                })}
                </>
              </details>
              <hr />
            </>) : (<PrimaryElementMenu_1.default path={`/docs/${dir}`} name={removeExtensionAndFormateName(dir)} margin={"5%"}/>)}
        </div>))}
    </nav>);
}
exports.default = MenuReactDocs;
function removeExtensionAndFormateName(fileName) {
    let newName;
    fileName.match(".tsx")
        ? (newName = fileName.replaceAll(".tsx", ""))
        : (newName = fileName);
    fileName.match(".ts")
        ? (newName = fileName.replaceAll(".ts", ""))
        : (newName = fileName);
    fileName.match(".js")
        ? (newName = fileName.replaceAll(".js", ""))
        : (newName = fileName);
    fileName.match(".jsx")
        ? (newName = fileName.replaceAll(".jsx", ""))
        : (newName = fileName);
    fileName.match("_")
        ? (newName = fileName.replaceAll("_", " "))
        : (newName = fileName);
    return newName.toUpperCase();
}
