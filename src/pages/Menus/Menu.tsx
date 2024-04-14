import MenuLists from "./components/MenuLists";

const Menu = () => {
  return (
    <div className="w-full space-y-6">
      <span className="w-full h-[100px] relative">
        <img
          src="/wallpapers/dressMe1.jpeg"
          loading="lazy"
          className="h-[400px] w-full object-cover"
        />
        <div className="absolute -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
          <p className="text-3xl rubik-wet-paint-regular font-bold text-foreground text-center">
            Our Collections
          </p>
          <p className="text-muted-foreground rubik-wet-paint-regular text-2xl">
            Browse our collections
          </p>
        </div>
      </span>
      <MenuLists />
    </div>
    // <MenuItem />
  );
};

export default Menu;
