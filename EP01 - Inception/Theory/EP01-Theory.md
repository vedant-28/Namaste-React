# EP01 => Theory assignment answers:

1) Emmet:
=>  Can create boilerplate code from provided shortcuts.
=>  Many shortforms are predefined, such as, if you type HTML5 & hit enter,
it will create a boilerplate code or template to write html code.

2) Difference between library & framework:
=>  A library is a collection of packages that perform specific operations 
=>  Framework contains the basic flow and architecture of an application. 
=>  The major difference between them is the complexity. Libraries contain a number of methods that a      developer can just call whenever they write code.
=>  React js is library and Angular/ Vue are frameworks. The framework provides the flow of a software application and tells the developer what it needs and calls the code provided by the developer as required. =>  If a library is used, the application calls the code from the library.

3) CDN & it's use cases:
=> CDN - Content Delivery Network
=> Whatever we are looking for such as React library code, or any other resource, we can fetch them from 
servers which are globally distributed.
=> Conc. of using CDN for fetching a resource is that; if a version of that resource changes, we have to modify CDN link used in our code; where it's fetched.

4) Why React is known as "React"?
=> React is a lightweight, flexible & powerful library of JS to build high quality UI. It's named as "React" because of it's ability to react to changes in data & state of the app in the application flow.
=> React "reacts" to the changes of data & state of the app & updates UI efficiently.

5) "crossorigin" in <script> tag:
=>  The crossorigin attribute sets the mode of the request to an HTTP CORS Request. 
=>  The purpose of crossorigin attribute is used to share the resources from one domain to another domain. =>  Basically, it is used to handle the CORS request. It is used to handle the CORS request that checks whether it is safe to allow for sharing the resources from other domains.

6) CORS request: 
=>  Cross Origin Resource Sharing
=>  Detail info: "https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS"

7) Difference between React & ReactDOM:
=>  React is a JavaScript library for building User Interfaces whereas ReactDOM is also JavaScript library that allows React to interact with the DOM.
=>  The react package contains React.createElement(), React.Component, React.Children, and other helpers related to elements and component classes. You can think of these as the isomorphic or universal helpers that you need to build components.
=>  The react-dom package contains ReactDOM.render(), and in react-dom/server we have server-side rendering support with ReactDOMServer.renderToString() and ReactDOMServer.renderToStaticMarkup().

8) Difference between react.development.js & react.production.js:
=>  Development is the stage of an application before it's made public while production is the term used for the same application when it's made public. 
=>  Development build is several times (maybe 3-5x) slower than the production build.

9) async & defer:
=>  async - The async attribute is a boolean attribute. The script is downloaded in parallel(in the background) to parsing the page, and executed as soon as it is available (do not block HTML DOM construction during downloading process) and don’t wait for anything.
=> Syntax: <script src="demo_async.js" async></script>

=>  defer - The defer attribute is a boolean attribute. The script is downloaded in parallel(in the background) to parsing the page, and executed after the page has finished parsing(when browser finished DOM construction). The defer attribute tells the browser not to wait for the script. Instead, the browser will continue to process the HTML, build DOM.

=>  Syntax: <script src="demo_defer.js" defer></script>