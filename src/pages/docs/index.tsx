import React from "react";
import { Code, TitleDoc, DescriptionDoc } from "doc_docs/components";
import { Button } from "../../components/ui/Buttons";

export default function DocsHomePage() {
  return (
    <>
      <TitleDoc title="Bem vindos a nossa documentação!" />
      <DescriptionDoc
        description="aqui é onde nos organizamos para conseguir ter uma ótima experiência de
        codigo"
      />

      <div className="elementDescription" style={{ margin: "1%" }}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "black",
            padding: "2%",
          }}
        >
          <Button onClick={() => alert("button default click")}>
            Button default
          </Button>
        </div>
        <div
          className="descriptionDocs"
          style={{
            padding: "1%",
            borderBottom: "0.5px solid gray",
            borderLeft: "0.5px solid gray",
            borderRight: "0.5px solid gray",
          }}
        >
          <table style={{ width: "100%", textAlign: "center", padding: "2%" }}>
            <thead>
              <th style={{ border: "1px solid black", padding: "1%" }}>Prop</th>
              <th style={{ border: "1px solid black", padding: "1%" }}>
                Default
              </th>
              <th style={{ border: "1px solid black", padding: "1%" }}>
                Accept
              </th>
            </thead>
            <tbody>
              <tr>
                <td
                  style={{
                    border: "1px solid black",
                    padding: "1%",
                    fontWeight: "bold",
                  }}
                >
                  onClick
                </td>
                <td style={{ border: "1px solid black", padding: "1%" }}>
                  none
                </td>
                <td style={{ border: "1px solid black", padding: "1%" }}>
                  <p>{"() => void"}</p>
                </td>
              </tr>
            </tbody>
          </table>
          <p style={{ padding: "2%" }}>
            aqui é onde nos organizamos para conseguir ter uma ótima experiência
            de codigo
          </p>
        </div>
      </div>
      <Code
        language={"javascript"}
        code={function sum(a, b) {
          return a + b;
        }}
      />
    </>
  );
}
