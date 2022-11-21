import React from "react";
import {
  Code,
  TitleDoc,
  DescriptionDoc,
  ComponentDoc,
} from "doc_docs/components";
import { Button } from "../../components/ui/Buttons";

export default function DocsHomePage() {
  return (
    <>
      <TitleDoc title="Bem vindos a nossa documentação!" />
      <DescriptionDoc
        description="aqui é onde nos organizamos para conseguir ter uma ótima experiência de
        codigo"
      />
      <ComponentDoc
        element={
          <Button onClick={() => alert("button default click")}>
            Button default
          </Button>
        }
        options={[{ prop: "onClick", default: "none", accept: "() => void" }]}
        description={
          "aqui é onde nos organizamos para conseguir ter uma ótima experiência de codigo"
        }
      />
      <Code
        language={"javascript"}
        code={function sum(a, b) {
          return a + b;
        }}
      />
    </>
  );
}
