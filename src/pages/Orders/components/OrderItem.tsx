import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { TOrderItem, useOrderActions } from "../store/data.store";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ShoppingCart } from "lucide-react";

const OrderItem = () => {
  const { orderId } = useParams();
  const { findOrderItem, updateOrderItem } = useOrderActions();
  const navigate = useNavigate();

  const data = findOrderItem(parseInt(orderId!));
  const [quantity, setQuantity] = useState(data?.quantity);
  const [total, setTotal] = useState(quantity! * data?.price!);

  const handleQuantityChange = () => {
    setTotal(quantity! * data?.price!);
  };

  const orderItemDto: TOrderItem = {
    total,
    productId: data?.productId!,
    quantity: quantity!,
    productName: data?.productName!,
    assetImage: data?.assetImage!,
    price: data?.price!,
  };

  const addItemToCart = () => {
    updateOrderItem(parseInt(orderId!), orderItemDto);
    setTimeout(() => navigate("/menu"),2000);
  };

  useEffect(() => {
    handleQuantityChange()
  },[quantity])

  if (data) {
    return (
      <div className="w-full space-y-6">
        <div className="w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 p-3 gap-2 lg:gap-0">
            <span className="size-full lg:size-[500px] rounded-md shadow-md">
              <img
                src={data.assetImage}
                className="size-full lg:size-[500px] rounded-md object-cover shadow-md"
                loading="lazy"
              />
            </span>
            <div className="space-y-10 w-full">
              <p className="text-primary text-2xl font-bold rubik-moonrocks-regular">
                {data.productName}
              </p>
              <p className="text-foreground rubik-moonrocks-regular text-xl font-medium">
                {data.productName}
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
                Update Cart
              </Button>
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default OrderItem;
