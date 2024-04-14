import { useQuery } from "@tanstack/react-query";
import useAxiosInstance from "@/config/axios";
import { useAppActions } from "@/store/data.store";

export type Products = {
  id: string;
  productName: string;
  productDescription: string;
  asset: {
    id: string;
    images: string[];
  }[];
  sellingPrice: number;
  category: {
    categoryName: string;
  };
  type: "casual" | "classic" | "clothing";
};

export interface IResponse<T> {
  msg: string;
  data: T;
}

const useGetProducts = (type: Products["type"]) => {
  const axiosInstance = useAxiosInstance();
  const { setProducts } = useAppActions();
  return useQuery({
    queryKey: ["Products"],
    queryFn: () =>
      axiosInstance
        .get<IResponse<Products[]>>("/api/product/restuarant/" + type)
        .then((res) => {
          setProducts(res.data.data);
          console.log(res.data.data);
          return res.data.data;
        }),
  });
};

export default useGetProducts;
