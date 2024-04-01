import { useMutation } from "@tanstack/react-query";
import { TLoginSchema } from "../schemas/login.schema";
import { useToast } from "@/components/ui/use-toast";
import { useNavigate } from "react-router";
import useAxiosInstance from "@/config/axios";
import { IUser } from "@/interfaces";
import { useAppActions } from "@/store/data.store";

interface ITokens {
  accessToken: string;
  refreshToken: string;
  user: IUser;
}

const useLoginUser = () => {
  const { toast } = useToast();
  const navigate = useNavigate();

  //axios instance
  const axiosInstance = useAxiosInstance();
  const { addUserDetails,addToken } = useAppActions();
  return useMutation({
    mutationKey: ["login"],
    mutationFn: (values: TLoginSchema) =>
      axiosInstance
        .post<ITokens>(
          "/auth/login",
          values
        )
        .then((res) => res.data),
    onSuccess(data, variables, context) {
      addUserDetails(data.user);
      localStorage.setItem("marsUserId", data.user.id);
      addToken({
        accessToken: data.accessToken,
        refreshToken: data.refreshToken
      });
      toast({
        title: "Login success",
        description: "Login successfully",
      });

      setTimeout(() => navigate("/"), 2000);
    },

    onError(error, variables, context) {
      toast({
        title: "Error",
        description: error.message,
      });
    },
  });
};

export default useLoginUser;
