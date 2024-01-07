import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/HeaderMenu.component";
import Body from "./components/Body.component";
import About from "./components/About.component";
import ContactUs from "./components/ContactUs.component";
import Error from "./components/Error.component";
import RestMenu from "./components/RestMenu.component";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import UserContext from "./Contexts/userContext";
import { Provider } from "react-redux";
import appStore from "./redux/appStore";
import Cart from "./components/Cart.component";
import "./index.css";

const AppLayout = () => {
  const [userName, setUserName] = useState();

  // Dummmy authentication logic
  useEffect(() => {
    // API call to send uname & passwd to perform auth.
    // After performing auth:
    const authData = {
      name: "Vedant",
    };
    // setting uname after receiving authData after performing auth:
    setUserName(authData.name);
  }, []);

  return (
    <Provider store={appStore}>
      <UserContext.Provider value={{loggedInUser: userName}}>
        <div className="app">
          <Header />
          <Outlet />
        </div>
      </UserContext.Provider>
    </Provider>
    
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
        element: <About name={"Vedant"} location={"Pune"}/>,
      },
      {
        path: "/contact",
        element: <ContactUs />,
      },
      {
        path: "/restaurants/:resId",
        element: <RestMenu />
      },
      {
        path: "/cart",
        element: <Cart />
      },
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}/>);