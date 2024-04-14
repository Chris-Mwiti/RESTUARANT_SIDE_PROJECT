import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import registerSchema, { TRegisterSchema } from "../schemas/register.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import useCreateUser from "../services/registerUser";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Eye, EyeOff, Info, Loader, UserPlus } from "lucide-react";
import { Button } from "@/components/ui/button";

const RegisterPage = () => {
  const { mutate: submitRegister, isPending } = useCreateUser();
  const [error, setError] = useState("");
  const [toogleVisisbility, setVisibility] = useState(false);

  const registerForm = useForm<TRegisterSchema>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      firstName: "admin",
      lastName: "earth",
      email: "admin@earth.co.ke",
      password: "admin@earth",
      phone: "0523456785",
    },
  });

  const registerSubmit = (values: TRegisterSchema) => {
    submitRegister(values, {
      onSuccess: () => {
        setError("Please return to the login tab");
      },
      onError(error, variables, context) {
        setError(error.message);
      },
    });
  };

  return (
    <div className="w-full h-full flex flex-col items-center justify-center space-y-7">
      <p className="text-4xl text-center text-primary rubik-wet-paint-regular font-bold">
        VENUS REGISTER
      </p>
      <Card className="w-full max-w-lg">
        <div className="w-full h-10 rounded-t-md flex items-center justify-center bg-primary/50">
          <Info className="stroke-white mr-3" />
          {error}
        </div>
        <CardHeader>
          <CardTitle>Register</CardTitle>
          <CardDescription>Create a new account</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <Form {...registerForm}>
            <form
              className="grid grid-cols-2 gap-4"
              onSubmit={registerForm.handleSubmit(registerSubmit)}>
              <FormField
                control={registerForm.control}
                name="firstName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>First name</FormLabel>
                    <FormControl>
                      <Input {...field} placeholder="First name" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={registerForm.control}
                name="lastName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Last name</FormLabel>
                    <FormControl>
                      <Input {...field} placeholder="Last name" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={registerForm.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input {...field} placeholder="Email address" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={registerForm.control}
                name="phone"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Phone</FormLabel>
                    <FormControl>
                      <Input {...field} placeholder="Phone" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={registerForm.control}
                name="password"
                render={({ field }) => (
                  <FormItem className="col-span-2">
                    <FormLabel>Password</FormLabel>
                    <div className="flex space-x-1 items-center">
                      <FormControl>
                        <Input
                          {...field}
                          placeholder="Password"
                          type={toogleVisisbility ? "text" : "password"}
                        />
                      </FormControl>
                      <span
                        className="size-max rounded-full p-2 cursor-pointer hover:bg-slate-400/10"
                        onClick={() => setVisibility((prev) => !prev)}>
                        {toogleVisisbility ? <EyeOff /> : <Eye />}
                      </span>
                    </div>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button className="w-full col-span-2" type="submit">
                {isPending ? (
                  <span className="flex items-center justify-center w-full">
                    <Loader className="animate-spin mr-3" /> Creating...
                  </span>
                ) : (
                  <span className="flex items-center justify-center w-full">
                    <UserPlus className="animate-pulse mr-3" /> Create
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

export default RegisterPage;
