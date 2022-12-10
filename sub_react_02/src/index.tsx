import React from "react";
import ReactDOM, { Root } from "react-dom/client";
import "./index.css";
import App from "./App";
import "./public-path";

let root: Root;

if (!(window as any).__POWERED_BY_QIANKUN__) {
  render({});
}

function render(props: { container?: any }) {
  const { container } = props;
  root = ReactDOM.createRoot(
    container
      ? (container.querySelector("#root") as HTMLElement)
      : (document.querySelector("#root") as HTMLElement)
  );
  root.render(<App />);
}

export async function bootstrap() {
  console.log("sub_react_02: bootstrap");
}

export async function mount(props: any) {
  console.log("sub_react_02: mount", props);
  render(props);
}

export async function unmount(props: { container: any }) {
  console.log("sub_react_02: unmount", props);
  const { container } = props;
  root.unmount();
}
