import HomeCarousel from "./components/HomeCarousel";
import HomeMenu from "./components/HomeMenu";

const Home = () => {
  return (
    <div className="space-y-16">
      <HomeCarousel />
      <HomeMenu />
    </div>
  );
};

export default Home;
