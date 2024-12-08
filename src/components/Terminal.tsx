import {ConsoleText} from "./ConsoleText";
import Content from "./Content";

export default function Terminal() {
  return (
    <div>
      <ConsoleText text="node MaxwellTheCat.js" />
      <div
        id="canvas-container"
        style={{
          width: "100vw",
          aspectRatio: "16/10",
          maxHeight: "90vh",
          background: "#282c34",
        }}>
        <Content />
      </div>
      <ConsoleText text="" />
    </div>
  );
}
