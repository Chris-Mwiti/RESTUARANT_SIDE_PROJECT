import { InstagramLogoIcon, TwitterLogoIcon } from "@radix-ui/react-icons";

const Footer = () => {
  return (
    <div className=" min-h-[200px] w-full border flex flex-col space-y-10 md:flex-row p-3 md:justify-between md:space-y-0">
      <div className="space-y-5">
        <p className="rubik-wet-paint-regular text-3xl text-primary">
          VENUS RESTUARANT
        </p>
        <p className="rubik-wet-paint-regular text-xl text-muted-foreground">
          Make an order of our tasty food
        </p>
        <span className="flex space-x-4">
          <InstagramLogoIcon className="size-9 stroke-white" />
          <TwitterLogoIcon className="size-9 stroke-white " />
        </span>
      </div>

      <div className="space-y-5">
        <p className="rubik-wet-paint-regular text-xl text-primary">Links</p>
        <p className="rubik-wet-paint-regular text-lg text-muted-foreground">
          Home
        </p>
        <p className="rubik-wet-paint-regular text-lg text-muted-foreground">
          Menu
        </p>
        <p className="rubik-wet-paint-regular text-lg text-muted-foreground">
          Orders
        </p>
        <p className="rubik-wet-paint-regular text-lg text-muted-foreground">
          Cart
        </p>
      </div>

      <div className="space-y-5">
        <p className="rubik-wet-paint-regular text-xl text-primary">Menu</p>
        <p className="rubik-wet-paint-regular text-lg text-muted-foreground">
          Burgers
        </p>
        <p className="rubik-wet-paint-regular text-lg text-muted-foreground">
          Pizza
        </p>
        <p className="rubik-wet-paint-regular text-lg text-muted-foreground">
          Smoothies
        </p>
        <p className="rubik-wet-paint-regular text-lg text-muted-foreground">
          Traditions
        </p>
      </div>
    </div>
  );
};

export default Footer;
