import { Card } from "@material-tailwind/react";
import React from "react";

const PaymentFor = () => {
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
              <h2 className="text-5xl font-bold">Payment For</h2>
              <img
                src="https://i.ibb.co/gmgtqjm/setting.png"
                alt=""
                className="w-10"
              />
            </div>
          </div>
          <div className="flex flex-col items-center justify-center mt-16">
            <h2 className="text-4xl mb-9 font-medium bg-black text-white p-3 rounded-xl">
              You want to make the payment for
            </h2>
            <div className="grid grid-cols-3 gap-10">
              <Card className="w-96 p-10 relative text-center cursor-pointer">
                <div className="absolute h-20 w-20 bg-green-400 rounded-full text-white flex items-center justify-center font-semibold top-3 right-4">
                  <p>Paid</p>
                </div>
                <img
                  src="https://i.ibb.co/wSjmSzX/registered.png"
                  alt="profile-picture"
                  className="w-10/12 mx-auto"
                />

                <h2 className="text-3xl mt-6 font-semibold py-2 px-4 rounded-xl bg-[#2196F3] text-white">
                  Registration Fee
                </h2>
              </Card>
              <Card className="w-96 p-10 relative text-center cursor-pointer">
                <div className="absolute h-20 w-20 bg-red-400 rounded-full text-white flex items-center justify-center font-semibold top-3 right-4">
                  <p>Unpaid</p>
                </div>
                <img
                  src="https://i.ibb.co/6gwKXdD/money.png"
                  alt="profile-picture"
                  className="w-10/12 mx-auto"
                />

                <h2 className="text-3xl mt-6 font-semibold py-2 px-4 rounded-xl bg-[#2196F3] text-white">
                  Monthly Fee
                </h2>
              </Card>
              <Card className="w-96 p-10 relative text-center cursor-pointer">
                <div className="absolute h-20 w-20 bg-red-400 rounded-full text-white flex items-center justify-center font-semibold top-3 right-4">
                  <p>Unpaid</p>
                </div>
                <img
                  src="https://i.ibb.co/WtHLCnB/marking.png"
                  alt="profile-picture"
                  className="w-10/12 mx-auto"
                />

                <h2 className="text-3xl mt-6 font-semibold py-2 px-4 rounded-xl bg-[#2196F3] text-white">
                  Exam Fee
                </h2>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PaymentFor;
