import { Outlet } from "react-router-dom";

const Orders = () => {
  return (
    <div className="w-full space-y-6">
      <span className="w-full h-[200px] relative">
        <img
          src="/wallpapers/dressMe2.jpeg"
          loading="lazy"
          className="w-full h-[200px] object-cover"
        />
        <div className="absolute -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
          <p className="text-3xl rubik-wet-paint-regular font-bold">Orders</p>
        </div>
      </span>
      <div className="container">
        <Outlet />
      </div>
    </div>
  );
};

export default Orders;
