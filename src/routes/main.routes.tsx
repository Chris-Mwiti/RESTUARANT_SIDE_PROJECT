import App from "@/App";
import MainLayout from "@/layouts/MainLayout";
import Menu from "@/pages/Menus/Menu";
import MenuItem from "@/pages/Menus/MenuItem";
import Orders from "@/pages/Orders/Orders";
import MyOrders from "@/pages/Orders/components/MyOrders";
import OrderItem from "@/pages/Orders/components/OrderItem";
import LoginPage from "@/pages/Register/components/LoginPage";
import RegisterPage from "@/pages/Register/components/RegisterPage";
import { Route, Routes } from "react-router";

const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<App />} />
        <Route path="login" element={<LoginPage />} />
        <Route path="register" element={<RegisterPage />} />
        <Route path="menu">
          <Route index element={<Menu />} />
          <Route path=":menuItem" element={<MenuItem />} />
        </Route>
        <Route path="myOrders" element={<MyOrders />} />
        <Route path="orders" element={<Orders />}>
          <Route path=":orderId" element={<OrderItem />} />
        </Route>
      </Route>
    </Routes>
  );
};

export default MainRoutes;
