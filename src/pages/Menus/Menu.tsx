import MenuLists from "./components/MenuLists";

const Menu = () => {
  return (
    <div className="w-full space-y-6">
      <span className="w-full h-[100px] relative">
        <img
          src="https://i0.wp.com/www.cookhacker.com/wp-content/uploads/2012/06/Oven-Crispy-Fries-2.jpg?w=2685"
          loading="lazy"
          className="h-[400px] w-full object-cover"
        />
        <div className="absolute -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
          <p className="text-3xl rubik-moonrocks-regular font-bold text-foreground text-center">
            Our Menu
          </p>
          <p className="text-muted-foreground rubik-moonrocks-regular text-2xl">
            Enjoy our tasty foods
          </p>
        </div>
      </span>
      <MenuLists />
    </div>
    // <MenuItem />
  );
};

export default Menu;
