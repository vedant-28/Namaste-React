import React from "react";
import ReactDOM from "react-dom/client";

// React.createElement => gives React element, which is JS object => rendered as HTML element
const heading = React.createElement("h1", { id: "heading" }, "Hello world!");
console.log(heading);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);

// JSX => transpiled to React.createElement by Babel gives React element, which is JS object => rendered as HTML element
const jsxHeading = <h1 id="jsx-heading">Hello world from JSX!</h1>;
console.log(jsxHeading);

root.render(jsxHeading);

// React functinal component
const Title = () => {
  return <h1>Hello world from Title!</h1>;
};

const HeadingComp = () => (
  <div>
    <Title />
    <h1>Hello world from Heading!</h1>
  </div>
);

root.render(<HeadingComp />);
