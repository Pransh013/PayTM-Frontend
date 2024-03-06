import { Input } from "@/components/ui/input";
import { ToastAction } from "@/components/ui/toast";
import { toast } from "@/components/ui/use-toast";
import { User } from "@/lib/types/main";
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import UserCard from "../components/UserCard";
import { Button } from "@/components/ui/button";

const SendMoney = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [name, setName] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    getUsers();
  }, [name]);

  const getUsers = async () => {
    try {
      const token = localStorage.getItem("token");
      const headers = token ? { Authorization: `Bearer ${token}` } : {};
      const response = await axios.get(
        `http://localhost:3000/api/v1/user/search?filter=${name}`,
        { headers }
      );
      setUsers(response?.data?.filteredUsers);
    } catch (error: any) {
      error?.response?.status === 401
        ? toast({
            variant: "destructive",
            title: "You are not logged in",
            action: (
              <ToastAction
                altText="Try again"
                onClick={() => navigate("/signin")}
              >
                Signin first
              </ToastAction>
            ),
          })
        : toast({
            variant: "destructive",
            title: "Internal Server Error",
            description: "We'll come back shortly",
          });
    }
  };

  return (
    <>
      <div className="pt-20 px-40 flex flex-col w-full h-screen gap-12">
        <div className="flex w-full items-center gap-24">
          <Input
            type="text"
            placeholder="Enter name of the user"
            onChange={(e) => setName(e.target.value)}
            className="flex-grow py-6 px-4 text-lg font-medium border-2"
          />
          <Button
            type="button"
            className="py-6 px-8 text-lg font-semibold dark:text-secondary-foreground"
            onClick={getUsers}
          >
            Search User
          </Button>
        </div>
        <div className="flex flex-col gap-6">
          {users?.map((user) => (
            <UserCard key={user._id} {...user} />
          ))}
        </div>
      </div>
    </>
  );
};

export default SendMoney;
