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
  const {getBurgers, getPizzas, getSmoothies, getTraditions} = useAppActions()
  const burgersList = getBurgers();
  const pizzasList = getPizzas()
  const smoothiesList = getSmoothies();
  const traditionsList = getTraditions();
  return (
    <div className="w-full container">
      <Tabs defaultValue="burgers" className="w-full space-y-10">
        <TabsList className="w-full grid grid-cols-5">
          <TabsTrigger value="burgers">Burgers</TabsTrigger>
          <TabsTrigger value="pizza">Pizza</TabsTrigger>
          <TabsTrigger value="smoothies">Smoothies</TabsTrigger>
          <TabsTrigger value="traditions">Traditions</TabsTrigger>
        </TabsList>
        <TabsContent value="burgers">
          <div className="grid grid-cols-1 md:grid-cols-4 sm:grid-cols-2 gap-4">
            {burgersList.map((item, index) => (
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

        <TabsContent value="pizza">
          <div className="grid grid-cols-1 md:grid-cols-4 sm:grid-cols-2 gap-4">
            {pizzasList.map((item, index) => (
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

        <TabsContent value="smoothies">
          <div className="grid grid-cols-1 md:grid-cols-4 sm:grid-cols-2 gap-4">
            {smoothiesList.map((item, index) => (
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
