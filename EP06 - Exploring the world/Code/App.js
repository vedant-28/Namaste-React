import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/header.component";
import Body from "./components/Body.component";
import "./index.scss";

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);