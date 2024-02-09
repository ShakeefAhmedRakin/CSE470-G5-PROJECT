import { Outlet } from "react-router-dom";
import Navbar from "./Shared/Navbar";
import Footer from "./Shared/Footer";

const Root = () => {
  return (
    <>
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Footer></Footer>
    </>
  );
};

export default Root;
