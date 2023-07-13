// Creating DOM with plain JS
const heading1 = document.createElement("h1");
heading1.innerHTML = "Hello World! from JS";
const root1 = document.getElementById("root1").appendChild(heading1);
heading1.style.cssText = "color:navy";

// Creating DOM with React
const heading2 = React.createElement(
  "h1",
  { id: "heading" },
  "Hello world from React!"
);
// 2nd arg of React.createelement() is an empty object. There we pass attributes to the tag we've created.
const root2 = ReactDOM.createRoot(document.getElementById("root2")).render(heading2);

// Creating following nested DOM structure with React:
/*
 * <div id="parent">
 *	 <div id="child">
 *		 <h1>"I am a h1 tag"</h1>
 *		 <h2>"I am a h2 tag"</h2>
 *	 </div>
 * </div>
 */
const parent = React.createElement(
  "div",
  { id: "parent" },
  React.createElement(
    "div",
    { id: "child" },
    [
			React.createElement("h1", {}, "I am a h1 tag"), 
			React.createElement("h2", {}, "I am a h2 tag, sibiling of h1")
		]
  )
);

const root3 = ReactDOM.createRoot(document.getElementById("root3")).render(parent);