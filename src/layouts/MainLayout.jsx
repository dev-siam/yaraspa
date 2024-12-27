import { Outlet } from "react-router-dom";
import Footer from "../pages/shared/Footer";
import Navbar from "../pages/shared/Navbar";
// import "react-toastify/dist/ReactToastify.css";
// import { ToastContainer } from "react-toastify";

export default function MainLayout() {
  return (
    <div className="flex flex-col  min-h-screen bg-slate-100 dark:bg-gray-800">
      {/* <ToastContainer /> */}
      {/* <div className="sticky top-0 z-50"> */}
      <Navbar />
      {/* </div> */}

      {/* main content  */}
      <main className="flex-grow my-10 mt-[80px]">
        <div className="w-11/12 md:w-10/12 lg:w-8/12 mx-auto ">
          <Outlet />
        </div>
      </main>

      {/* footer  */}
      <Footer />
    </div>
  );
}
