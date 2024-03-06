import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "@/components/ui/use-toast";
import { amountSchema } from "@/lib/validations/main";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useLocation, useNavigate } from "react-router-dom";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";

const Transfer = () => {
  const [accountId, setAccountId] = useState("");
  const location = useLocation();
  const navigate = useNavigate();

  const queryParams = new URLSearchParams(location.search);
  const receiverId = queryParams.get("id");
  const receiverName = queryParams.get("name");

  const token = localStorage.getItem("token");
  const headers = token ? { Authorization: `Bearer ${token}` } : {};

  if (!headers) navigate("/signin");

  const form = useForm<z.infer<typeof amountSchema>>({
    resolver: zodResolver(amountSchema),
    defaultValues: {
      amount: 0,
    },
  });

  async function onSubmit(values: z.infer<typeof amountSchema>) {
    try {
      await axios.post(
        "http://localhost:3000/api/v1/account/transfer",
        { to: receiverId, amount: values.amount },
        { headers }
      );
      toast({
        description: "Money sent successfully",
        className: "bg-green-800 text-white font-bold",
      });
    } catch (error: any) {
      console.log(error);
      error?.response?.status === 403
        ? toast({
            variant: "destructive",
            description: "Insufficient Balance",
          })
        : toast({
            variant: "destructive",
            title: "Internal Server Error",
            description: "We'll come back shortly",
          });
    }
  }

  useEffect(() => {
    if (receiverId) {
      fetchAccountId(receiverId);
    }
  }, []);

  const fetchAccountId = async (receiverId: string) => {
    try {
      const response = await axios.get(
        `http://localhost:3000/api/v1/account/details?id=${receiverId}`,
        { headers }
      );
      setAccountId(response?.data?.id);
    } catch (error) {
      console.error("Error fetching account data:", error);
    }
  };

  return (
    <>
      <div className="w-full h-screen flex justify-center items-center">
        <div className="w-80 px-4 py-8 h-80 bg-gray-300 dark:bg-muted-foreground rounded-lg -mt-20 flex flex-col justify-between items-center">
          <div className="flex flex-col items-center gap-3">
            <p className="text-xl font-semibold">
              Sending Money to: {receiverName}
            </p>
            <p className="text-lg font-semibold">Banking Id</p>
            <p className="text-lg font-semibold">[{accountId}]</p>
          </div>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="flex gap-4">
              <FormField
                control={form.control}
                name="amount"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        className="dark:placeholder:text-gray-600"
                        placeholder="Enter amount"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button
                type="submit"
                className=" px-7 dark:text-secondary-foreground"
              >
                Send
              </Button>
            </form>
          </Form>
        </div>
      </div>
    </>
  );
};

export default Transfer;
