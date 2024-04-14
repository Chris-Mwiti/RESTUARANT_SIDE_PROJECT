import useAxiosInstance from "@/config/axios"
import { useMutation } from "@tanstack/react-query"
import { TOrderDto } from "../store/data.store";
import { useToast } from "@/components/ui/use-toast";
import { queryClient } from "@/main";

const useCreateOrder = () => {
    const axiosInstance = useAxiosInstance();
    const { toast } = useToast();
    return useMutation({
        mutationKey: ["createOrder"],
        mutationFn: (values: TOrderDto) => axiosInstance.post("/api/orders",values).then(res => res.status),
        onSuccess(data, variables, context) {
            toast({
                title: "Order Success",
                description: "Your order placement is successfull"
            }),
            queryClient.invalidateQueries({
                queryKey: ["Orders"]
            });
        },
    })
}

export default useCreateOrder;