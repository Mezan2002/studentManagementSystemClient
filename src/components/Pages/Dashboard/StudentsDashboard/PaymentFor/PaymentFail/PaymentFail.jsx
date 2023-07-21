import React from "react";

const PaymentFail = () => {
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
              <h2 className="text-5xl font-bold">Payment Failed</h2>
              <img
                draggable="false"
                loading="lazy"
                src="https://i.ibb.co/gmgtqjm/setting.png"
                alt=""
                className="w-10"
              />
            </div>
          </div>
          <div className="flex items-center justify-center mt-24">
            <p className="text-2xl font-semibold text-red-500">
              Something Went Wrong! Your Payment is Failed , Try Again.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PaymentFail;
