import { Outlet } from "react-router-dom";

const Orders = () => {
  return (
    <div className="w-full space-y-6">
      <span className="w-full h-[200px] relative">
        <img
          src="https://i0.wp.com/www.cookhacker.com/wp-content/uploads/2012/06/Oven-Crispy-Fries-2.jpg?w=2685"
          loading="lazy"
          className="w-full h-[200px] object-cover"
        />
        <div className="absolute -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
            <p className="text-3xl rubik-moonrocks-regular font-bold">Orders</p>
        </div>
      </span>
      <div className="container">
        <Outlet />
      </div>
    </div>
  );
};

export default Orders;
