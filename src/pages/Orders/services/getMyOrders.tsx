import { TOrdersSchema } from "../schemas/orders.schema";
import { useQuery } from "@tanstack/react-query";
import useAxiosInstance from "@/config/axios";
import { IResponse } from "@/pages/Home/services/getProducts";
import { useUserInfo } from "@/store/data.store";

const useGetOrders = () => {
  const axiosInstance = useAxiosInstance();
  const { id } = useUserInfo();
  console.log(id);
  return useQuery({
    queryKey: ["Orders"],
    queryFn: () =>
      axiosInstance
        .get<IResponse<TOrdersSchema[]>>("/api/orders/userOrders/" + id)
        .then((res) => res.data.data),
  });
};

export default useGetOrders;
