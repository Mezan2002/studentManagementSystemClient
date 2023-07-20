import axios from "axios";
import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

const PaymentSuccess = () => {
  const location = useLocation();

  const query = new URLSearchParams(location.search);

  const transactionId = query.get("transactionId");

  useEffect(() => {
    axios
      .get(`http://localhost:3000/getUsersPayment/${transactionId}`)
      .then((res) => {
        console.log(res.data);
      });
  }, []);

  return (
    <section
      style={{
        backgroundImage: "url(https://i.ibb.co/vsv28Xt/bg-banner.png)",
      }}
      className="col-span-10 min-h-screen"
    >
      <div className="p-20">
        <div className="">
          <div>
            <div className="flex items-start justify-between">
              <h2 className="text-5xl font-bold">Payment Success</h2>
              <img
                draggable="false"
                loading="lazy"
                src="https://i.ibb.co/gmgtqjm/setting.png"
                alt=""
                className="w-10"
              />
            </div>
          </div>
          <div className="mt-24">
            <h2>Hello</h2>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PaymentSuccess;
