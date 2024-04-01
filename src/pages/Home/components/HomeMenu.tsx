import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import useGetProducts from "../services/getProducts";
import { Link } from "react-router-dom";
import HomeSkeletonMenu from "./HomeSkeletonMenu";
import ErrorFallBack from "@/layouts/components/ErrorFallBack";

const HomeMenu = () => {
  const { data, error, isError, isLoading, refetch } = useGetProducts("casual");

  if (isLoading) return <HomeSkeletonMenu />;
  if (isError) return <ErrorFallBack error={error} retry={refetch} />;

  if (data) {
    return (
      <div className="w-full h-max container space-y-8">
        <p className="text-4xl font-medium rubik-moonrocks-regular text-foreground text-center">
          Preview Menu
        </p>
        <div className="grid grid-cols-1 md:grid-cols-4 sm:grid-cols-2 gap-4">
          {data.map((item, index) => (
            <Link key={`Menu ${index}`} to={`/menu/${item.id}`}>
              <Card className="w-[300px] hover:scale-105 transition ease-in delay-100 duration-75">
                <CardContent className="w-full p-0">
                  <span className="w-full h-max rounded-md">
                    <img
                      src={item.asset[0].images[0]}
                      loading="lazy"
                      alt="Burger"
                      className="w-[300px] h-[300px] rounded-md"
                    />
                  </span>
                  <CardHeader>
                    <CardTitle>{item.productName}</CardTitle>
                    <CardDescription>{item.productDescription}</CardDescription>
                    <Button>Order</Button>
                  </CardHeader>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
        <div className="w-full flex items-center justify-center">
          <Button variant={"outline"} className="text-foreground w-full">
            View Our Full Menu
          </Button>
        </div>
      </div>
    );
  }
};

export default HomeMenu;
