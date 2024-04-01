import { Products } from "./getProducts";
import { useQuery } from "@tanstack/react-query";
import useAxiosInstance from "@/config/axios";
import { IResponse } from "./getProducts";

const useGetProductsById = (id: string) => {
  const axiosInstance = useAxiosInstance();
  return useQuery({
    queryKey: ["Products", id],
    queryFn: () =>
      axiosInstance
        .get<IResponse<Products>>("/api/product/" + id)
        .then((res) => res.data.data),
  });
};

export default useGetProductsById;
