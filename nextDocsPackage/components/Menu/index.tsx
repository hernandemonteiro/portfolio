import Link from "next/link";
import React from "react";

export default function MenuReactDocs({ dirs, subDirs }) {
  return (
    <nav
      style={{
        display: "flex",
        flexDirection: "column",
        width: "23%",
      }}
    >
      <hr />
      <Link href="/" style={{ color: "white", margin: "5%" }}>
        VISITAR PROJETO
      </Link>
      <hr />
      {dirs.map((dir) => {
        return (
          <>
            {Object.keys(subDirs[dir]).length > 1 ? (
              <>
                <hr />
                <details>
                  <summary
                    style={{
                      margin: "5%",
                      fontWeight: "bold",
                      cursor: "pointer",
                      color: "white",
                    }}
                  >
                    {dir.toUpperCase()}
                  </summary>
                  <>
                    {Object.keys(subDirs[dir]).map((elementSub) => {
                      return elementSub === "index.tsx" ? (
                        <>
                          <hr />
                          <a
                            key={elementSub}
                            href={`/docs/${dir}`}
                            style={{ color: "white", margin: "17%" }}
                          >
                            INTRODUÇÂO
                          </a>
                          <hr />
                        </>
                      ) : (
                        <>
                          <hr />
                          <a
                            key={elementSub}
                            href={`/docs/${dir}/${elementSub}`}
                            style={{ color: "white", margin: "17%" }}
                          >
                            {removeExtensionAndFormateName(elementSub)}
                          </a>
                          <hr />
                        </>
                      );
                    })}
                  </>
                </details>
                <hr />
              </>
            ) : (
              <>
                <hr />
                <a href={`/docs/${dir}`}>
                  <h4 style={{ color: "white", margin: "5%" }}>
                    {removeExtensionAndFormateName(dir)}
                  </h4>
                </a>
                <hr />
              </>
            )}
          </>
        );
      })}
    </nav>
  );
}

function removeExtensionAndFormateName(fileName): string {
  let newName: string;
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
