import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useAppActions } from "@/store/data.store";
import { Link } from "react-router-dom";

const MenuLists = () => {
  const {getBreakFasts, getLunches, getDesserts, getTraditions} = useAppActions()
  const breakfastProducts = getBreakFasts();
  const lunchProducts = getLunches()
  const dessertsProducts = getDesserts();
  const traditionsList = getTraditions();
  return (
    <div className="w-full container">
      <Tabs defaultValue="breakfast" className="w-full space-y-10">
        <TabsList className="w-full grid grid-cols-5">
          <TabsTrigger value="breakfast">Breakfast</TabsTrigger>
          <TabsTrigger value="lunch">Lunch</TabsTrigger>
          <TabsTrigger value="desserts">Desserts</TabsTrigger>
          <TabsTrigger value="traditions">Traditions</TabsTrigger>
        </TabsList>
        <TabsContent value="breakfast">
          <div className="grid grid-cols-1 md:grid-cols-4 sm:grid-cols-2 gap-4">
            {breakfastProducts.map((item, index) => (
              <Link key={`Burgers ${index}`} to={`/menu/${item.id}`}>
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
                      <CardDescription>
                        {item.productDescription}
                      </CardDescription>
                      <Button>Order</Button>
                    </CardHeader>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="lunch">
          <div className="grid grid-cols-1 md:grid-cols-4 sm:grid-cols-2 gap-4">
            {lunchProducts.map((item, index) => (
              <Link key={`Pizza ${index}`} to={`/menu/${item.id}`}>
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
                      <CardDescription>
                        {item.productDescription}
                      </CardDescription>
                      <Button>Order</Button>
                    </CardHeader>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="desserts">
          <div className="grid grid-cols-1 md:grid-cols-4 sm:grid-cols-2 gap-4">
            {dessertsProducts.map((item, index) => (
              <Link key={`Smoothies ${index}`} to={`/menu/${item.id}`}>
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
                      <CardDescription>
                        {item.productDescription}
                      </CardDescription>
                      <Button>Order</Button>
                    </CardHeader>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="traditions">
          <div className="grid grid-cols-1 md:grid-cols-4 sm:grid-cols-2 gap-4">
            {traditionsList.map((item, index) => (
              <Link key={`Tradition ${index}`} to={`/menu/${item.id}`}>
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
                      <CardDescription>
                        {item.productDescription}
                      </CardDescription>
                      <Button>Order</Button>
                    </CardHeader>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default MenuLists;
