import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { signupSchema } from "@/lib/validations/main";
import Branding from "./Branding";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useToast } from "./ui/use-toast";
import { ToastAction } from "./ui/toast";

const Signup = () => {
  const form = useForm<z.infer<typeof signupSchema>>({
    resolver: zodResolver(signupSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      username: "",
      password: "",
    },
  });

  const { toast } = useToast();
  const navigate = useNavigate();

  async function onSubmit(values: z.infer<typeof signupSchema>) {
    try {
      const response = await axios.post(
        "http://localhost:3000/api/v1/user/signup",
        values
      );
      localStorage.setItem("token", response?.data?.token);
      toast({
        description: "Account has been created successfully",
        className: "bg-green-800",
      });
      navigate("/");
    } catch (error: any) {
      error?.response?.status === 409
        ? toast({
            variant: "destructive",
            title: "E-mail is already registered.",
            action: (
              <ToastAction
                altText="Try again"
                className="text-md font-bold"
                onClick={() => navigate("/signin")}
              >
                Try Signing In
              </ToastAction>
            ),
          })
        : toast({
            variant: "destructive",
            title: "Internal Server Error",
            description: "We'll come back shortly",
          });
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
            name="firstName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>First Name</FormLabel>
                <FormControl>
                  <Input
                    type="text"
                    placeholder="Enter your first name"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="lastName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Last Name</FormLabel>
                <FormControl>
                  <Input
                    type="text"
                    placeholder="Enter your last name"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
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
            Sign up
          </Button>
          <p>
            Already have an account?
            <Link to={"/signin"} className="underline text-sky-700 ml-2">
              Sign in
            </Link>
          </p>
        </form>
      </div>
    </Form>
  );
};

export default Signup;
