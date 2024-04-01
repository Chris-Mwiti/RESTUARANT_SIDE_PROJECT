import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useForm } from "react-hook-form";
import loginSchema, { TLoginSchema } from "../schemas/login.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { Eye, EyeOff, EyeOffIcon, Loader, LogIn } from "lucide-react";
import { Button } from "@/components/ui/button";
import useLoginUser from "../services/loginUser";
const LoginPage = () => {
  const loginForm = useForm<TLoginSchema>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "admin@venus.co.ke",
      password: "admin@venus",
    },
  });
  const [showPwd, setShowPwd] = useState(false);

  const { mutate, isPending } = useLoginUser();
  const handleLogin = (values: TLoginSchema) => {
    mutate(values);
  };
  return (
    <div className="w-full h-full flex flex-col items-center justify-center p-3 space-y-5">
      <p className="text-4xl text-center text-primary rubik-moonrocks-regular font-bold">
        VENUS LOGIN
      </p>
      <Card className="w-full max-w-xl">
        <CardHeader>
          <CardTitle>Login page</CardTitle>
          <CardDescription>Welcome to our login page</CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...loginForm}>
            <form
              className="w-full space-y-5"
              onSubmit={loginForm.handleSubmit((values) =>
                handleLogin(values)
              )}>
              <FormField
                control={loginForm.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email: </FormLabel>
                    <FormControl>
                      <Input {...field} placeholder="Enter your email" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={loginForm.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Password: </FormLabel>
                    <div className="w-full space-x-3 flex items-center">
                      <FormControl>
                        <Input
                          {...field}
                          type={showPwd ? "text" : "password"}
                          placeholder="Enter your password"
                        />
                      </FormControl>
                      <span
                        className="size-max rounded-full p-2 cursor-pointer hover:bg-slate-400/10"
                        onClick={() => setShowPwd((prev) => !prev)}>
                        {showPwd ? <EyeOff /> : <Eye />}
                      </span>
                    </div>
                  </FormItem>
                )}
              />
              <Button className="w-full" type="submit">
                {isPending ? (
                  <span className="flex items-center justify-center w-full">
                    <Loader className="animate-spin mr-3" /> Logging in...
                  </span>
                ) : (
                  <span className="flex items-center justify-center w-full">
                    <LogIn className="animate-pulse mr-3" /> Log in
                  </span>
                )}
              </Button>
            </form>
          </Form>
        </CardContent>
      </Card>
    </div>
  );
};

export default LoginPage;
