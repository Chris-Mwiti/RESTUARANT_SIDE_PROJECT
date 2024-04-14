import { useMutation } from "@tanstack/react-query";
import { TRegisterSchema } from "../schemas/register.schema";
import { useToast } from "@/components/ui/use-toast";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const useCreateUser = () => {
  const { toast } = useToast();
  const navigate = useNavigate();
  return useMutation({
    mutationKey: ["createUser"],
    mutationFn: (values: TRegisterSchema) =>
      axios
        .post(
          "https://restaurant-backend-sable.vercel.app/auth/register",
          values
        )
        .then((res) => res.data),
    onSuccess(data, variables, context) {
      toast({
        title: "User created successfully",
        description:
          "Your account has been created successfully. Plesae login to access the dashboard",
      });

      setTimeout(() => navigate("/login"),2000);
    },
    onError(error, variables, context) {
      toast({
        title: "Error",
        description: error.message,
      });
    },
  });
};

export default useCreateUser;
