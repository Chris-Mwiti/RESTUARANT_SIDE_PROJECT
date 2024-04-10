import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import { Toaster } from "@/components/ui/toaster";
import Footer from "./components/Footer";
import { AlertInfo } from "./components/AlertInfo";

const MainLayout = () => {
  return (
    <div className="w-dvw min-h-dvh overflow-x-hidden dark dark:bg-background relative flex flex-col space-y-9">
      <Navbar />
      <div className="w-full h-full border space-y-5 relative">
        <Outlet />
        <Footer />
      </div>
      <span className="absolute z-10">
        <Toaster />
        <AlertInfo />
      </span>
    </div>
  );
};

export default MainLayout;
