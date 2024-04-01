import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ShoppingCart } from "lucide-react";
import { useEffect, useState } from "react";
import {
  TOrderDto,
  TOrderItem,
  useOrderActions,
} from "../Orders/store/data.store";
import useGetProductsById from "../Home/services/getProductsById";
import { useNavigate, useParams } from "react-router-dom";
import MenuItemSkeleton from "./components/MenuItemSkeleton";
import ErrorFallBack from "@/layouts/components/ErrorFallBack";

const MenuItem = () => {
  const { menuItem } = useParams();
  const { data, isLoading, isError, error, refetch } = useGetProductsById(
    menuItem!
  );

  const [quantity, setQuantity] = useState(0);
  const [total, setTotal] = useState(0);

  const { addOrderItem } = useOrderActions();
  const navigate = useNavigate();

  const handleQuantityChange = () => {
    setTotal(quantity * data?.sellingPrice!);
  };

  useEffect(() => {
    handleQuantityChange();
  }, [quantity]);

  const orderItemDto: TOrderItem = {
    total,
    productId: data?.id!,
    quantity,
    productName: data?.productName!,
    assetImage: data?.asset[0].images[0]!,
    price: data?.sellingPrice!,
  };

  const addItemToCart = () => {
    addOrderItem(orderItemDto);
    setTimeout(() => navigate("/menu"), 2000);
  };

  if (isLoading) return <MenuItemSkeleton />;
  if (isError) return <ErrorFallBack error={error} retry={refetch} />;

  if (data) {
    return (
      <div className="w-full space-y-6">
        <span className="w-full h-[100px] relative">
          <img
            src="https://i0.wp.com/www.cookhacker.com/wp-content/uploads/2012/06/Oven-Crispy-Fries-2.jpg?w=2685"
            loading="lazy"
            className="h-[400px] w-full object-cover"
          />
          <div className="absolute -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
            <p className="text-3xl rubik-moonrocks-regular font-bold text-foreground text-center">
              Menu
            </p>
            <p className="text-muted-foreground rubik-moonrocks-regular text-2xl">
              Enjoy our tasty foods
            </p>
          </div>
        </span>

        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 p-3 gap-2 lg:gap-0">
            <span className="size-full lg:size-[500px] rounded-md shadow-md">
              <img
                src={data.asset[0].images[0]}
                className="size-full lg:size-[500px] rounded-md object-cover shadow-md"
                loading="lazy"
              />
            </span>
            <div className="space-y-10 w-full">
              <p className="text-primary text-2xl font-bold rubik-moonrocks-regular">
                {data.productName}
              </p>
              <p className="text-foreground rubik-moonrocks-regular text-xl font-medium">
                {data.productDescription}
              </p>

              <div className="w-full space-y-3">
                <Label htmlFor="quantity" className="text-foreground text-lg">
                  Quantity
                </Label>
                <Input
                  id="quantity"
                  className="text-foreground"
                  type="number"
                  value={quantity}
                  onChange={(e) => setQuantity(parseInt(e.target.value))}
                />
              </div>

              <p className="text-foreground text-xl font-medium">
                Total:{" "}
                <span className="text-primary font-semibold">sh {total}</span>
              </p>

              <Button className="w-full" onClick={addItemToCart}>
                <ShoppingCart className="stroke-white mr-3" />
                Add to cart
              </Button>
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default MenuItem;
