const HomeCarousel = () => {
  return (
    <div className="w-full h-[580px]">
      <div className="w-full h-full">
        <video src="/dressMe/VIDEO/outfits.mp4" autoPlay loop width={"100%"} height={"580px"}>
          <source src="/dressMe/VIDEO/outfits.mp4" type="video/mp4"></source>
        </video>
      </div>
    </div>
  );
};

export default HomeCarousel;
