import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import useGetOrders from "../services/getMyOrders";
import useUpdateOrder from "../services/updateOrderById";
import { Skeleton } from "@/components/ui/skeleton";
import HomeSkeletonMenu from "@/pages/Home/components/HomeSkeletonMenu";
import ErrorFallBack from "@/layouts/components/ErrorFallBack";

const MyOrdersSheet = () => {
  const { data: orders, isLoading, isError, error,refetch } = useGetOrders();
  const { mutate, isPending } = useUpdateOrder();

    if (isLoading) return <p className="text-primary">Loading...</p>;
    if (isError) return <p className="text-destructive">Error</p>

  return (
    <Sheet>
      <SheetTrigger>
        <p className="text-foreground">Orders</p>
      </SheetTrigger>
      <SheetContent className="w-[384px]" side={"right"}>
        <SheetHeader>
          <SheetTitle className="text-primary text-lg font-medium">
            MY ORDERS
          </SheetTitle>
        </SheetHeader>
        <div className="w-full space-y-5">
          <div className="w-full space-y-5 flex flex-col">
            {orders ? (
              orders.map((food, index) => (
                <div className="w-full flex justify-around" key={index}>
                  <span className="w-max h-max rounded-md relative">
                    <img
                      src={food.items[0].product.asset[0].images[0]}
                      alt="Order"
                      className="size-24 rounded-md"
                      loading="lazy"
                    />
                    <span className="w-max p-2 absolute top-1 left-1 rounded-md flex items-center justify-center bg-primary/80 text-foreground">
                      {food.status}
                    </span>
                  </span>
                  <div className="space-y-3">
                    <p className="text-foreground font-medium text-xl">
                      {food.items[0].product.productName}
                    </p>
                    <p className="text-foreground text-xl font-medium mr-3">
                      Quantity:{" "}
                      <span className="text-primary font-medium text-lg">
                        {food.items[0].quantity}
                      </span>
                    </p>
                    <p className="text-foreground text-xl font-medium mr-3">
                      Total:{" "}
                      <span className="text-primary font-medium text-lg">
                        {food.total}
                      </span>
                    </p>
                    <div className="flex space-x-4">
                      <Button
                        variant={"destructive"}
                        onClick={() =>
                          mutate({
                            id: food.id!,
                            status: "canceled",
                          })
                        }>
                        Cancel Order
                      </Button>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="w-full flex space-x-5">
                <span className="size-20 rounded-md">
                  <Skeleton className="size-full rounded-md" />
                </span>
                <div className="space-y-4">
                  <Skeleton className="h-5 w-5 rounded-md" />
                  <Skeleton className="h-5 w-5 rounded-md" />
                  <Skeleton className="h-5 w-5 rounded-md" />
                </div>
              </div>
            )}
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default MyOrdersSheet;
