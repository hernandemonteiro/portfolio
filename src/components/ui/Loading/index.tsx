import React from "react";
import { Player } from "@lottiefiles/react-lottie-player";
import loadingAnimation from "../../../animation/loading.json";

export default function LoaderAdmin() {
  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Player src={loadingAnimation} className="lottie" loop autoplay />
    </div>
  );
}

export function LoaderBlog() {
  return (
    <div
      style={{
        height: "65vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <h1 style={{ color: "white" }}>Loading...</h1>
    </div>
  );
}
