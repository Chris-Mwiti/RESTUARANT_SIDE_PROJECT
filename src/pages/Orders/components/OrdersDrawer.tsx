import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Loader, ShoppingCart } from "lucide-react";
import { useState } from "react";
import { useOrderActions, useOrders } from "../store/data.store";
import { Link } from "react-router-dom";
import useCreateOrder from "../services/createOrder";
import { useAppActions } from "@/store/data.store";
import { useToast } from "@/components/ui/use-toast";

const OrdersDrawer = () => {
  
  const orders = useOrders();
  const {removeOrderItem,removeAllItem} = useOrderActions();
  const [drawerOpen, setDrawerOpen] = useState(false);
  const {toast} = useToast();

  const {mutate,isPending} = useCreateOrder();
  const {getTotalOrderDto} = useOrderActions();
  const {openDialog, isLoggerIn} = useAppActions();
  const orderDto = getTotalOrderDto()
  const handleCheckOut = () => {
    if(!isLoggerIn()){
      return openDialog()
    }
    if(orders.length <= 0){
      return toast({
        variant: "destructive",
        title: "No Orders Placed",
        description: "You have no orders"
      })
    }
    mutate(orderDto, {
      onSuccess() {
        removeAllItem()
      },
    });
  }

  return (
    <Drawer open={drawerOpen} onOpenChange={setDrawerOpen}>
      <DrawerTrigger asChild>
        <Button
          variant={"ghost"}
          onClick={() => setDrawerOpen((prev) => !prev)}>
          <span className="relative size-max">
            <ShoppingCart className="stroke-white transition ease-in delay-75 hover:stroke-primary" />
            <span className="size-6 flex justify-center items-center rounded-full bg-primary text-foreground absolute -top-4 left-3">
              {orders.length}
            </span>
          </span>
        </Button>
      </DrawerTrigger>
      <DrawerContent className="dark dark:bg-background">
        <div className="w-full mx-auto">
          <DrawerHeader>
            <DrawerTitle className="text-foreground rubik-moonrocks-regular text-center text-3xl">
              Your Orders
            </DrawerTitle>
            <DrawerDescription>
              Here are your current placed orders
            </DrawerDescription>
          </DrawerHeader>
          <div className="w-full flex flex-col justify-center space-y-5 p-3">
            {orders.map((food, index) => (
              <div className="w-full flex space-x-5" key={index}>
                <span className="size-20 rounded-md">
                  <img
                    src={food.assetImage}
                    alt="Order"
                    className="size-full rounded-md"
                    loading="lazy"
                  />
                </span>
                <div className="space-y-3">
                  <p className="text-foreground font-medium text-xl">
                    {food.productName}
                  </p>
                  <p className="text-foreground text-xl font-medium mr-3">
                    Quantity:{" "}
                    <span className="text-primary font-medium text-lg">
                      {food.quantity}
                    </span>
                  </p>
                  <div className="flex space-x-4">
                    <Link to={`/orders/${index}`}>
                      <Button variant={"outline"} className="text-foreground">
                        View Order
                      </Button>
                    </Link>
                    <Button
                      variant={"destructive"}
                      onClick={() => removeOrderItem(index)}>
                      Cancel
                    </Button>
                  </div>
                </div>
              </div>
            ))}
            <Button className="w-full" onClick={handleCheckOut}>
              {isPending ? (
                <span className="w-full h-full flex items-center justify-center">
                  <Loader className="animate-spin mr-3" />
                  <p className="animate-bounce">
                    Checking out...
                  </p>
                </span>    
              ) : (
                "Check out"
              )}
            </Button>
            <DrawerClose asChild>
              <Button variant={"outline"} className="text-foreground w-full">
                Close
              </Button>
            </DrawerClose>
          </div>
        </div>
      </DrawerContent>
    </Drawer>
  );
};

export default OrdersDrawer;
