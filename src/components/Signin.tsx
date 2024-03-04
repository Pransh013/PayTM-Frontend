import { signinSchema } from "@/lib/validations/main";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Link, useNavigate } from "react-router-dom";
import Branding from "./Branding";
import axios from "axios";
import { ToastAction } from "./ui/toast";
import { useToast } from "./ui/use-toast";

const Signin = () => {
  const form = useForm<z.infer<typeof signinSchema>>({
    resolver: zodResolver(signinSchema),
    defaultValues: {
      username: "",
      password: "",
    },
  });

  const { toast } = useToast();
  const navigate = useNavigate();

  async function onSubmit(values: z.infer<typeof signinSchema>) {
    try {
      const response = await axios.post(
        "http://localhost:3000/api/v1/user/signin",
        values
      );
      localStorage.setItem("token", response?.data?.token);
      toast({
        description: "Logged in successfully",
        className: "bg-green-800",
      });
      navigate("/");
    } catch (error: any) {
      if (error?.response?.status === 400) {
        toast({
          variant: "destructive",
          title: "User with this username does not exist",
          action: (
            <ToastAction
              altText="Try again"
              onClick={() => navigate("/signup")}
            >
              Try Signing Up
            </ToastAction>
          ),
        });
      } else if (error?.response?.status === 401) {
        toast({
          variant: "destructive",
          title: "Incorrect password",
          description: "Please enter correct password",
        });
      } else {
        toast({
          variant: "destructive",
          title: "Internal Server Error",
          description: "We'll come back shortly",
        });
      }
    }
  }
  return (
    <Form {...form}>
      <div className="flex flex-col items-center gap-5 w-1/4 py-4 rounded-xl shadow-[0_2px_20px_rgb(0,0,0,0.12)] shadow-slate-800">
        <div className="flex flex-col gap-2">
          <Branding />
          <p>Where every transaction feels right</p>
        </div>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="flex flex-col gap-4 w-8/12"
        >
          <FormField
            control={form.control}
            name="username"
            render={({ field }) => (
              <FormItem>
                <FormLabel>E-mail</FormLabel>
                <FormControl>
                  <Input
                    type="email"
                    placeholder="Enter your email"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <Input
                    type="password"
                    placeholder="Enter your password"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit" className="dark:text-secondary-foreground">
            Sign in
          </Button>
          <p>
            Don't have an account?
            <Link to={"/signup"} className="underline text-sky-700 ml-2">
              Sign up
            </Link>
          </p>
        </form>
      </div>
    </Form>
  );
};

export default Signin;
