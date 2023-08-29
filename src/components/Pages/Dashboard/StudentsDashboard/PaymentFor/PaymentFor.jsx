import axios from "axios";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import PaymentCard from "./PaymentCard/PaymentCard";
import "./PaymentFor.css";

const PaymentFor = () => {
  const user = useSelector((state) => state.loggedInUser.loggedInUser);
  const userId = user._id;
  const [paymentOccaisons, setPaymentOccaisons] = useState([]);
  const [userIsPaid, setUserIsPaid] = useState([]);

  // console.log(isPaid);
  useEffect(() => {
    axios
      .get("https://atg-server-tau.vercel.app/getPaymentOccasions")
      .then((res) => {
        if (res.data.length > 0) {
          setPaymentOccaisons(res.data);
        }
      });

    axios
      .get(`https://atg-server-tau.vercel.app/user-is-paid/${userId}`)
      .then((res) => {
        setUserIsPaid(res.data);
      })
      .catch((err) => console.log(err));
  }, [userId]);
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
                draggable="false"
                loading="lazy"
                src="https://i.ibb.co/gmgtqjm/setting.png"
                alt=""
                className="w-10"
              />
            </div>
          </div>
          <div className="mt-24">
            {/* <div className="grid grid-cols-3 gap-10">
              {paymentOccaisons.map((payment) => (
                <PaymentCard
                  key={payment._id}
                  paymentId={payment._id}
                  paymentTitle={payment?.paymentTitle}
                  paymentAmount={payment?.paymentAmount}
                  paymentStartsDate={payment?.paymentStartsDate}
                  paymentEndsDate={payment?.paymentEndsDate}
                  paymentFor={payment?.paymentFor}
                />
              ))}
              
            </div> */}
            <div className="grid grid-cols-3 gap-10">
              {paymentOccaisons.map((payment) => {
                const isPaidForPayment = userIsPaid.find(
                  (userPayment) =>
                    userPayment.paymentFor === payment.paymentFor &&
                    userPayment.paid === true
                )?.isPaid;

                return (
                  <PaymentCard
                    key={payment?._id}
                    paymentId={payment?._id}
                    paymentTitle={payment?.paymentTitle}
                    paymentAmount={payment?.paymentAmount}
                    paymentStartsDate={payment?.paymentStartsDate}
                    paymentEndsDate={payment?.paymentEndsDate}
                    paymentFor={payment?.paymentFor}
                  >
                    {isPaidForPayment ? <p>Paid</p> : <p>Not Paid</p>}
                  </PaymentCard>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PaymentFor;
