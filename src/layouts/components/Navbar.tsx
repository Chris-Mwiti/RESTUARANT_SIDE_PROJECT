import { Button } from "@/components/ui/button";
import OrdersDrawer from "@/pages/Orders/components/OrdersDrawer";
import { useAppActions, useUserInfo } from "@/store/data.store";
import { GanttChart, LogIn, ShoppingCart, UserPlus } from "lucide-react";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  const { isLoggerIn } = useAppActions();
  const { name } = useUserInfo();
  const isLoggedIn = isLoggerIn();
  return (
    <div className="w-full min-h-6 flex items-center justify-between  px-6 py-3 border shadow-md shadow-primary/10 top-0 z-20 fixed bg-white/5 bg-clip-padding backdrop-filter bg-opacity-15 backdrop-blur-lg">
      <div className="hidden w-full md:w-[200px] md:flex items-center">
        <ul className="hidden w-full list-none md:flex items-center justify-evenly space-x-8">
          <li
            className="text-lg text-foreground font-medium cursor-pointer hover:text-primary transition 
          ease-in-out delay-100 duration-100">
            <NavLink to={"/"}>Home</NavLink>
          </li>
          <li
            className="text-lg text-foreground font-medium cursor-pointer hover:text-primary transition 
          ease-in-out delay-100 duration-100">
            <NavLink to={"menu"}>Menu</NavLink>
          </li>
          <li
            className="text-lg text-foreground font-medium cursor-pointer hover:text-primary transition 
          ease-in-out delay-100 duration-100">
            <OrdersDrawer />
          </li>
          <li
            className="text-lg text-foreground font-medium cursor-pointer hover:text-primary transition 
          ease-in-out delay-100 duration-100">
            <NavLink to={"myOrders"}>Orders</NavLink>
          </li>
        </ul>
      </div>
      <p className="text-center rubik-wet-paint-regular font-bold text-2xl text-primary">
          WEST RESTUARANT 
      </p>
      <div className="hidden md:flex space-x-4">
        {isLoggedIn ? (
          <span className="size-12 rounded-full text-primary rubik-wet-paint-regular flex items-center justify-center font-medium text-xl bg-background">
            AD
          </span>
        ) : (
          <>
            <Link to={"register"}>
              <Button variant={"outline"} className="text-foreground">
                <UserPlus className="size-5 mr-3 stroke-white" />
                Register
              </Button>
            </Link>
            <Link to={"login"}>
              <Button
                variant={"outline"}
                className="text-foreground bg-transparent">
                <LogIn className="size-5 mr-3 stroke-white" />
                Login
              </Button>
            </Link>
          </>
        )}
      </div>

      {/* Hamburger Icon */}
      <Button className="md:hidden" variant={"outline"}>
        <GanttChart className="stroke-foreground" />
      </Button>
    </div>
  );
};

export default Navbar;
