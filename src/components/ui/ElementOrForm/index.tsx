import React from "react";
import { Button } from "../Buttons";
import MessageForm from "../MessageForm";
import { useView } from "../../../providers/viewContext";
import { iElementOrForm } from "../../../interfaces/iElementOrForm";

export default function ElementOrForm(props: iElementOrForm) {
  const { view, setView } = useView();

  function tableOrFormView() {
    return !view ? (
      <>
        <div>
          <Button
            onClick={() => {
              setView(true);
              props.changeViewFunction && props.changeViewFunction();
            }}
          >
            CADASTRAR
          </Button>
        </div>
        {props.element}
      </>
    ) : (
      <>
        <Button
          onClick={() => {
            setView(false);
            props.changeViewFunction && props.changeViewFunction();
          }}
        >
          FECHAR FORMULÁRIO
        </Button>
        {props.form}
      </>
    );
  }

  return props.message ? (
    <MessageForm message={props.message} />
  ) : (
    <div style={{ width: "100%", marginTop: "3%", textAlign: "center" }}>
      {tableOrFormView()}
    </div>
  );
}
