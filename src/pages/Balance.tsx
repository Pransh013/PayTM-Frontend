import axios from "axios";
import { useEffect, useState } from "react";

const Balance = () => {
  const [balance, setBalance] = useState(0);

  const token = localStorage.getItem("token");
  const headers = token ? { Authorization: "Bearer " + token } : {};
  useEffect(() => {
    getBalance();
  }, []);

  const getBalance = async () => {
    const response = await axios.get(
      "http://localhost:3000/api/v1/account/balance",
      { headers }
    );
    setBalance(response.data.amount);
  };

  return (
    <>
      <div className="w-full h-screen flex items-center justify-center">
        <div className="bg-muted w-80 rounded-xl h-60 text-center flex gap-5 py-5 border-2 flex-col items-center">
          <div>
            <h1 className="text-4xl font-extrabold tracking-wider">Payify</h1>
            <p>Where every transaction feels right</p>
          </div>
          <div className="text-lg font-bold flex flex-col gap-2">
            <p>Your balance is </p>
            <p>₹ {balance}</p>
          </div>
          <p className="">Happy spending!!!</p>
        </div>
      </div>
    </>
  );
};

export default Balance;
