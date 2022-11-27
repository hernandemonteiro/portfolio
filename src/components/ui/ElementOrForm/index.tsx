import React from "react";
import useView from "../../../providers/useView";
import { Button } from "../Buttons";
import MessageForm from "../MessageForm";

interface ElementOrFormProps {
  element: any;
  changeViewFunction?: () => void;
  form: any;
  message: string;
}

export default function ElementOrForm(props: ElementOrFormProps) {
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
