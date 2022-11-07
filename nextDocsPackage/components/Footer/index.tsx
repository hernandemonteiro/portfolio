export default function FooterReactDocs({ backgroundColorDefined }) {
  return (
    <footer
      style={{
        backgroundColor: backgroundColorDefined || "black",
        width: "100%",
        height: "5vh",
      }}
    ></footer>
  );
}
