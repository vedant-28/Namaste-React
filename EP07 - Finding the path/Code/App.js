import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/HeaderMenu.component";
import Body from "./components/Body.component";
import About from "./components/About.component";
import ContactUs from "./components/ContactUs.component";
import Error from "./components/Error.component";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import "./index.scss";
import RestMenu from "./components/RestMenu.component";

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Outlet />
    </div>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <ContactUs />,
      },
      {
        path: "/restaurants/:resId",
        element: <RestMenu />
      },
    ],
    errorElement: <Error />, 
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}/>);