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
  const {getMenItems, getWomenItems} = useAppActions();

  const menItems = getMenItems();
  const womenItems = getWomenItems();

  return (
    <div className="w-full container">
      <Tabs defaultValue="men" className="w-full space-y-10">
        <TabsList className="w-full grid grid-cols-2">
          <TabsTrigger value="men">Men</TabsTrigger>
          <TabsTrigger value="women">Women</TabsTrigger>
        </TabsList>
        <TabsContent value="men">
          <div className="grid grid-cols-1 md:grid-cols-4 sm:grid-cols-2 gap-4">
            {menItems.map((item, index) => (
              <Link key={`Burgers ${index}`} to={`/menu/${item.id}`}>
                <Card className="w-[300px] hover:scale-105 transition ease-in delay-100 duration-75">
                  <CardContent className="w-full p-0">
                    <span className="w-full h-max rounded-md">
                      <img
                        src={item.asset[0].images[0]}
                        loading="lazy"
                        alt="Collection"
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

        <TabsContent value="women">
          <div className="grid grid-cols-1 md:grid-cols-4 sm:grid-cols-2 gap-4">
            {womenItems.map((item, index) => (
              <Link key={`Pizza ${index}`} to={`/menu/${item.id}`}>
                <Card className="w-[300px] hover:scale-105 transition ease-in delay-100 duration-75">
                  <CardContent className="w-full p-0">
                    <span className="w-full h-max rounded-md">
                      <img
                        src={item.asset[0].images[0]}
                        loading="lazy"
                        alt="Collection"
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
