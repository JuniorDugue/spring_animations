import React from "react";
import ReactDOM from "react-dom";
import Component1 from "./components/Component1";
// import Component2 from "./components/Component2";
// import Component3 from "./components/Component3";
import "./styles.scss";

// npm i react-spring to install react=spring

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <h1>React Spring</h1>
        <Component1 />
        {/* <Component2 /> */}
        {/* <Component3/> */}
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
