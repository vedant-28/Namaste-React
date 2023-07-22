import React from "react";
import ReactDOM from "react-dom/client";
import searchIcon from "./assets/search-icon.svg";
import userIcon from "./assets/user-profile-icon.png";
import "./index.scss";

// Coding assignment Q1: Nested elements using react.createElement:
// React.createElement => gives React element, which is JS object => rendered as HTML element
const heading = React.createElement("div", { className: "title" }, [
  React.createElement("h1", {id: "h1", key:"h1"}, "h1 element from React.createElement()"),
  React.createElement("h2", {id: "h2", key:"h2"}, "h2 element from React.createElement()"),
  React.createElement("h3", {id: "h3", key:"h3"}, "h3 element from React.createElement()")
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);


// Coding assignment Q2: Nested elements using JSX:
// JSX => transpiled to React.createElement by Babel gives React element, which is JS object => rendered as HTML element
const jsxHeading = (
  <div className="title" key="titleJSX">
    <h1 id="jsx-headingH1">h1 element from JSX</h1>
    <h2 id="jsx-headingH2">h2 element from JSX</h2>
    <h3 id="jsx-headingH3">h3 element from JSX</h3>
  </div>
);
//root.render(jsxHeading);

// Coding assignment Q3 & Q4 & Q5: Nested elements using JSX in functional component & passing attributes to jsx elements & component composition
const CompComposition = () => (
  <h1 style={{ textAlign: "center" }}>Component composition implementation</h1>
);

const JsxHeadingComp = () => (
  <div className="title" key="titleJSX">
    <CompComposition />
    <h1 id="jsx-headingH1" style={{ color: "tomato" }}>h1 element from JSX</h1>
    <h2 id="jsx-headingH2" style={{ color: "navy" }}>h2 element from JSX</h2>
    <h3 id="jsx-headingH3" style={{ color: "green" }}>h3 element from JSX</h3>
  </div>
);
//root.render(<JsxHeadingComp />);

// Coding assignment Q6: Header component for search bar:
const Header = () => (
  <header className="search-bar-container" key="header-container">
    <div className="left">
      <img src={searchIcon} alt="search-icon" />
    </div>
    <div className="search-bar">
      <input type="search" />
      <button className="search-button">Search</button>
    </div>
    <div className="right">
      <img src={userIcon} alt="user-icon" />
    </div>
  </header>
);

root.render(<Header />);