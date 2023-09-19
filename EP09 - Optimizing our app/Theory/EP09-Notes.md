 ********************************Single Responcibility Principle********************************
 - Every individual entity in the code such as a function or class etc., should have single responcibility. Every react component is a JS function. So ideally, every component should've single responcibility.
 - This makes code more reusable, maintainnable & testable; as it cretaes a modular fashion among the entities of code.
 
 
 ********************************Custom hooks********************************
 - Hooks -> JS (utility) functions, given by react.
 - Custom hooks: we can extract some respnocibilty of a component into a custom hook, so that component can become more modular & readable.
 - Creating cutom hook for RestMenu component:
   -- Major responcibilities: 
	  (i) Fetching the data
	  (ii)Displaying data on UI
   -- Ideally it'd be responcible for only displaying data & NOT fetching.
      For e.g., we are using useParams() hook to get parameters. we are unaware of of impl of the same. 
   -- Similarly, we can create a hook useRestMenu(), which will fetch data for  us & component don't have to check how it's being done.
   
   
 ********************************Code splitting********************************
 - Also called as 
   (i)  Chunking
   (ii) Lazy loading
   (iii)Dynamic bundling
   (iv) On demand loading
 - Logical separation of bundles::Chunks: 
   -- A bundle'd have enough code for a feature.
 - It's called as lazy loading bcz, when app loads initially it'll show home page; for a different "/path" (such as Grocery), it'll be loaded only when we visit that "/path"
 - Hence, Grocery related code'd be loaded only when we visit related "/path". This is called as lazy loading/ code splitting.
 - Achieved by a function "lazy()" which is named exported from "react" package. (Provided by react).
 - e.g.:: Lazy loading of Grocery component.
   -- 1) Body.component.jsx
	  import React, {lazy, Suspence} from "react";
		
	  const Grocery = lazy(() => import("./components/Grocery"));
	  
	  2) App.js
	  const appRouter = createBrowserRouter([
		...
		{
			path: "/grocery",
			element: <Suspence fallback={<Shimmer />}> <Grocery /> </Suspence>
		},
		...
	  ]);
	  
	  -- "fallback" is a placeholder which accepts JSX to be rendered on page by the time lazily loading code is available in browser to render.
	  
   -- Here, lazy() takes a callback for import() function. import() takes path to a component(to be lazily loaded).
   -- But, it's throws an error while moving to "/grocery" path as: "React router caught an error: A component suspended while responding to synchronous code.". This is bcz, when app loads initially, only one JS file loads (Grocery one loads lazily) & when we try to move to "/grocery" path, it's JS file with code takes some time to load into browser. But by that time, react initiates render for Grocery component & don't find code for it as it's not loaded into browser yet; bcz of this, an error is thrown.
   -- For resolution of this, react provides a solution, a "Suspence" component. We can wrap lazy loading code into this <Suspence></Suspence>.