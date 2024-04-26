import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Home from "./pages/Home/Home";
import Root from "./pages/Root";
import About from "./pages/About/About";
import Support from "./pages/Support/Support";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import AuthProvider from "./Context/AuthProvider";
import Allbuses from "./pages/Allbuses/Allbuses";
import BusDetails from "./pages/BusDetails/BusDetails";
import PrivateRoute from "./Routes/PrivateRoute";
import SearchResults from "./pages/SearchResults/SearchResults";
import UserProfile from "./pages/UserProfile/UserProfile";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/about",
        element: <About></About>,
      },
      {
        path: "/all-buses",
        element: <Allbuses></Allbuses>,
      },
      {
        path: "/search/:depart/:destination/:date",
        element: <SearchResults></SearchResults>,
      },
      {
        path: "/bus/:id",
        element: (
          <PrivateRoute>
            <BusDetails></BusDetails>
          </PrivateRoute>
        ),
      },
      {
        path: "/support",
        element: <Support></Support>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/myprofile/:email",
        element: <UserProfile></UserProfile>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/user/info/${params.email}`),
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);
