import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Slider from "react-slick";
const HomeCarousel = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    customPaging: () => (
      <div className="size-2 bg-slate-400 rounded-full"></div>
    ),
  };
  return (
    <div className="w-full h-[580px]">
      <Slider {...settings} className="w-full h-full border rounded-md">
        <div className="text-foreground w-full h-full relative">
          <img
            src="/VenusCarousel3.jfif"
            className="w-full h-[580px] object-cover"
          />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col space-y-3 items-center">
            <p
              className="text-3xl font-medium rubik-moonrocks-regular
           ">
              <span className="text-6xl text-[#f96416]">Immerse</span> yourself
              in a culinary journey where every bite{" "}
              <span className="text-6xl text-primary">whispers</span> stories of
              passion and flavor
            </p>
            <Button variant={"outline"}>Get Your Order</Button>
          </div>
        </div>
        <div className="text-foreground h-full">
          <div className="text-foreground w-full h-full relative">
            <img
              src="/VenusCarousel4.jfif"
              className="w-full h-[580px] object-cover"
            />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col space-y-3 items-center">
              <p
                className="text-3xl font-medium rubik-moonrocks-regular 
           ">
                <span className="text-6xl text-[#f96416]">Immerse</span>{" "}
                yourself in a culinary journey where every bite{" "}
                <span className="text-6xl text-primary">whispers</span> stories
                of passion and flavor
              </p>
              <Button variant={"link"}>
                <Link to={"menu"}>View our full menu</Link>
              </Button>
            </div>
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default HomeCarousel;
