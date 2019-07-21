import React from "react";
import ReactDOM from "react-dom";
import Component1 from "./components/Component1";
import "./styles.scss";
// npm i react-spring to install react=spring
function App() {
  return (
    <div className="App">
      <Component1 />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
