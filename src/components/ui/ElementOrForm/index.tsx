import React, { useContext } from "react";
import ViewContext from "../../../providers/viewContext";
import ViewProvider from "../../../providers/ViewProvider";
import { Button } from "../Buttons";
import MessageForm from "../MessageForm";

interface ElementOrFormProps {
  element: any;
  changeViewFunctions?: () => void;
  form: any;
  message: string;
}

export default function ElementOrForm(props: ElementOrFormProps) {
  const { view, setView } = useContext(ViewContext);
  function tableOrFormView() {
    return !view ? (
      <>
        <div>
          <Button
            onClick={() => {
              setView(true);
              props.changeViewFunctions;
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
            props.changeViewFunctions && props.changeViewFunctions();
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
