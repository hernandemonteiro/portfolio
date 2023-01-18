import React from "react";
import { DescriptionDoc } from "doc_docs/components";
import Image from "next/image";
import logo from "../../../public/favicon.png";
import styles from "./docs.module.scss";

export default function DocsHomePage() {
  // alert(process.env.NODE_ENV)
  return (
    <>
      <DescriptionDoc
        description={
          <div style={{ textAlign: "center" }}>
            <h1>Bem vindos a nossa documentação!</h1>
            <hr />
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Image
                width={200}
                height={200}
                className={styles.heartbeat}
                alt="Logotipo - Hernande Monteiro"
                src={logo}
              />
            </div>
            <h4>
              Aqui é onde nos organizamos para conseguir ter uma melhor
              experiência de código!
            </h4>
          </div>
        }
      />
    </>
  );
}
