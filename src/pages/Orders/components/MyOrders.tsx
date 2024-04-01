import HomeSkeletonMenu from "@/pages/Home/components/HomeSkeletonMenu";
import useGetOrders from "../services/getMyOrders";
import ErrorFallBack from "@/layouts/components/ErrorFallBack";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import useUpdateOrder from "../services/updateOrderById";

const MyOrders = () => {
  const { data, isLoading, isError, error, refetch } = useGetOrders();
  const { mutate, isPending } = useUpdateOrder();
  if (isLoading) return <HomeSkeletonMenu />;
  if (isError) return <ErrorFallBack error={error} retry={refetch} />;

  if (!data)
    return (
      <Alert className="w-full md:w-[500px]">
        <AlertTitle>Unauthorized Access</AlertTitle>
        <AlertDescription>Please Login to fetch your orders</AlertDescription>
      </Alert>
    );

 console.log(data);
  if (data) {
    return (
      <div className="w-full h-max container space-y-8">
        <p className="text-4xl font-medium rubik-wet-paint-regular text-foreground text-center">
          Preview Menu
        </p>
        <div className="grid grid-cols-1 md:grid-cols-4 sm:grid-cols-2 gap-4">
          {data.map((item, index) => (
            <Card className="w-[300px] hover:scale-105 transition ease-in delay-100 duration-75">
              <CardContent className="w-full p-0">
                <span className="w-full h-max rounded-md relative">
                  <img
                    src={item.items[0].product.asset[0].images[0]}
                    loading="lazy"
                    alt="Burger"
                    className="w-[300px] h-[300px] rounded-md"
                  />
                  <span className="w-max p-2 absolute top-1 left-1 rounded-md flex items-center justify-center bg-primary/80 text-foreground">
                    {item.status}
                  </span>
                </span>
                <CardHeader>
                  <CardTitle>{item.items[0].product.productName}</CardTitle>
                  <CardDescription>
                    {item.items[0].product.productName}
                  </CardDescription>
                  <Button
                    variant={"destructive"}
                    onClick={() =>
                      mutate({
                        id: item.id!,
                        status: "canceled",
                      })
                    }>
                    Cancel Order
                  </Button>
                </CardHeader>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    );
  }
};

export default MyOrders;
