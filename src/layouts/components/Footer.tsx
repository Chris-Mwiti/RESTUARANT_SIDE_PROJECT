import { InstagramLogoIcon, TwitterLogoIcon } from "@radix-ui/react-icons";

const Footer = () => {
  return (
    <div className=" min-h-[200px] w-full border flex flex-col space-y-10 md:flex-row p-3 md:justify-around md:space-y-0">
      <div className="space-y-5">
        <p className="lobster-regular text-4xl text-primary">
          DRESS ME
        </p>
        <p className="lobster-regular text-xl text-muted-foreground">
          Shine like a diamond with Dress Me
        </p>
        <span className="flex space-x-4">
          <InstagramLogoIcon className="size-9 stroke-white" />
          <TwitterLogoIcon className="size-9 stroke-white " />
        </span>
      </div>

      <div className="space-y-5">
        <p className="lobster-regular text-xl text-primary">Links</p>
        <p className="lobster-regular text-lg text-muted-foreground">
          Home
        </p>
        <p className="lobster-regular text-lg text-muted-foreground">
          Collections
        </p>
        <p className="lobster-regular text-lg text-muted-foreground">
          Orders
        </p>
        <p className="lobster-regular text-lg text-muted-foreground">
          Cart
        </p>
      </div>

    </div>
  );
};

export default Footer;
