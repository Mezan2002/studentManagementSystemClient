import { CheckIcon } from "@heroicons/react/24/outline";
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Typography,
} from "@material-tailwind/react";
import axios from "axios";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const PaymentCard = ({
  paymentId,
  paymentTitle,
  paymentFor,
  paymentAmount,
  paymentStartsDate,
  paymentEndsDate,
}) => {
  const [usersPostCode, setUsersPostCode] = useState(null);
  const user = useSelector((state) => state.loggedInUser.loggedInUser);
  useEffect(() => {
    if (
      user?.address?.permanentAddress &&
      user?.address?.presentAddress !== null
    ) {
      setUsersPostCode(user?.address?.presentAddress?.presentPostCode);
    } else {
      setUsersPostCode(
        user.address.presentAndPermanentAddress.presentAndPermanentPostCode
      );
    }
  }, [
    user.address?.permanentAddress,
    user.address?.presentAddress,
    user?.address?.presentAndPermanentAddress?.presentAndPermanentPostCode,
    usersPostCode,
  ]);
  const userInfo = {
    userName: user?.studentsInfo?.studentNameInEnglish,
    userEmail: user?.studentsInfo?.studentsEmail,
    userPhoneNumber: user?.studentsInfo?.studentsMobileNumber,
    usersPostCode,
  };

  const [isPaid, setIsPaid] = useState(false);

  const handlePayNow = () => {
    const data = {
      paymentId,
      userId: user._id,
      paymentTitle,
      userInfo,
    };
    axios
      .post("http://localhost:3000/getPayment", JSON.stringify(data), {
        headers: {
          "content-type": "application/json",
        },
      })
      .then((res) => {
        console.log(res.data);
        window.location.replace(res.data.url);
      });
  };
  return (
    <div>
      <Card
        color="blue"
        variant="gradient"
        className="w-full p-8 relative duration-500 hover:translate-y-[-10px]"
      >
        <div
          className={`${
            isPaid ? "ribbon-paid" : "ribbon-unpaid"
          } ribbon-top-right`}
        >
          <span className="">{isPaid ? "Paid" : "Unpaid"}</span>
        </div>

        <CardHeader
          floated={false}
          shadow={false}
          color="transparent"
          className="m-0 mb-8 rounded-none border-b border-white/10 pb-8 text-center"
        >
          <Typography
            variant="small"
            color="white"
            className="font-normal capitalize"
          >
            {paymentTitle}
          </Typography>
          <Typography
            variant="h1"
            color="white"
            className="mt-6 flex justify-center gap-1 text-7xl font-normal"
          >
            <span className="mt-2 text-4xl">৳</span>
            {paymentAmount} <span className="self-end text-4xl">BDT</span>
          </Typography>
        </CardHeader>
        {
          <CardBody className="p-0">
            <ul className="flex flex-col gap-4">
              <li className="flex items-center gap-4">
                <span className="rounded-full border border-white/20 bg-white/20 p-1">
                  <CheckIcon strokeWidth={2} className="h-3 w-3" />
                </span>
                <Typography className="font-normal">
                  Payment Starts Date : {paymentStartsDate}
                </Typography>
              </li>
              <li className="flex items-center gap-4">
                <span className="rounded-full border border-white/20 bg-white/20 p-1">
                  <CheckIcon strokeWidth={2} className="h-3 w-3" />
                </span>
                <Typography className="font-normal">
                  Payment Ends Date : {paymentEndsDate}
                </Typography>
              </li>
              <li className="flex items-center gap-4">
                <span className="rounded-full border border-white/20 bg-white/20 p-1">
                  <CheckIcon strokeWidth={2} className="h-3 w-3" />
                </span>
                <Typography className="font-normal">
                  Payments For : {paymentFor}
                </Typography>
              </li>
              <li className="flex items-center gap-4">
                <span className="rounded-full border border-white/20 bg-white/20 p-1">
                  <CheckIcon strokeWidth={2} className="h-3 w-3" />
                </span>
                <Typography className="font-normal">
                  Your Payments Status : {isPaid ? "Paid" : "Unpaid"}
                </Typography>
              </li>
            </ul>
          </CardBody>
        }
        <CardFooter className="mt-12 p-0">
          <Button
            onClick={handlePayNow}
            size="lg"
            color="white"
            className="text-blue-500 hover:scale-[1.02] focus:scale-[1.02] active:scale-100"
            ripple={false}
            fullWidth={true}
          >
            Pay Now
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default PaymentCard;
