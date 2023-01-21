import React from "react";

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
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={"/loading.svg"}
        className="loadingAnimation"
        alt="loading image"
      />
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
