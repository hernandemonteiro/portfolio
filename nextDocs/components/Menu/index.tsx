import React from "react";
import { MenuReactDocsProps } from "./interface";
import PrimaryElementMenu from "./PrimaryElementMenu";

export default function MenuReactDocs(props: MenuReactDocsProps) {
  return (
    <nav
      style={{
        display: "flex",
        flexDirection: "column",
        width: "23%",
        padding: "1%",
        borderRight: "1px solid rgba(0,0,0,0.5)",
      }}
    >
      <PrimaryElementMenu
        path={"/docs"}
        name={"GETTING STARTED!"}
        margin={"5%"}
      />

      {props.dirs.map((dir: any) => (
        <div key={dir}>
          {Object.keys(props.subDirs[dir]).length > 1 ? (
            <>
              <hr />
              <details>
                <summary
                  style={{
                    margin: "5%",
                    fontWeight: "bold",
                    cursor: "pointer",
                    color: "black",
                  }}
                >
                  {dir.toUpperCase()}
                </summary>
                <>
                  {Object.keys(props.subDirs[dir]).map((elementSub) => {
                    return elementSub === "index.tsx" ? (
                      <PrimaryElementMenu
                        key={elementSub}
                        path={`/docs/${dir}`}
                        name={"INTRODUÇÂO"}
                        margin={"15%"}
                      />
                    ) : (
                      <PrimaryElementMenu
                        key={elementSub}
                        path={`/docs/${dir}/${elementSub}`}
                        name={removeExtensionAndFormateName(elementSub)}
                        margin={"15%"}
                      />
                    );
                  })}
                </>
              </details>
              <hr />
            </>
          ) : (
            <PrimaryElementMenu
              path={`/docs/${dir}`}
              name={removeExtensionAndFormateName(dir)}
              margin={"5%"}
            />
          )}
        </div>
      ))}
    </nav>
  );
}

function removeExtensionAndFormateName(fileName: string) {
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
