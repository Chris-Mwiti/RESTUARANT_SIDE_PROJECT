import useAxiosInstance from "@/config/axios";
import { useMutation } from "@tanstack/react-query";
import { TOrdersSchema } from "../schemas/orders.schema";
import { queryClient } from "@/main";

const useUpdateOrder = () => {
  const axiosInstance = useAxiosInstance();
  return useMutation({
    mutationKey: ["updatingOrder"],
    mutationFn: (dto: {
        id:string,
        status:TOrdersSchema["status"]
    }) =>
      axiosInstance
        .put("/api/orders/" + dto.id, {
          status:dto.status
        })
        .then((res) => res.status),
    onSuccess(data, variables, context) {
      queryClient.invalidateQueries({
        queryKey: ["Orders"],
      });
    },
  });
};

export default useUpdateOrder;
