import axios from "axios";
import html2canvas from "html2canvas";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";

const PaymentSuccess = () => {
  const [paymentInfo, setPaymentInfo] = useState([]);
  const location = useLocation();
  const query = new URLSearchParams(location.search);
  const transactionId = query.get("transactionId");
  const user = useSelector((state) => state.loggedInUser.loggedInUser);
  useEffect(() => {
    axios
      .get(`http://localhost:3000/getUsersPayment/${transactionId}`)
      .then((res) => {
        setPaymentInfo(res.data);
      });
  }, [transactionId]);

  if (!paymentInfo) {
    return <div>No Payments have Done.</div>;
  }

  const utcDateTimeString = paymentInfo.paidAt;

  if (!utcDateTimeString) {
    return <div>Loading...</div>;
  }

  const utcDateTime = new Date(utcDateTimeString);

  // Create DateTimeFormat options for Bangladeshi time
  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "2-digit",
    hour: "numeric",
    minute: "numeric",
    hour12: true,
    timeZone: "Asia/Dhaka", // Use the time zone of Bangladesh (Asia/Dhaka)
  };

  // Format the date in Bangladeshi time
  const formattedDateTime = new Intl.DateTimeFormat("en-BD", options).format(
    utcDateTime
  );

  const handleDownload = () => {
    // Hide the button before capturing the content

    // Select the card element to capture as an image
    const cardElement = document.querySelector(".downloadCard");

    // Use html2canvas to capture the card element as an image
    html2canvas(cardElement).then((canvas) => {
      // Convert the canvas to a data URL (image/jpeg format)
      const imageDataURL = canvas.toDataURL("image/jpeg");

      // Create a temporary anchor element to trigger the download
      const anchor = document.createElement("a");
      anchor.href = imageDataURL;
      anchor.download = "payment_info.jpg"; // Set the filename for the downloaded image

      // Programmatically click on the anchor to trigger the download
      anchor.click();

      // Show the button after capturing the content and initiating the download
    });
  };

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
          <div className="mt-24 flex items-center justify-center">
            <div className="card w-5/12 bg-white border border-black">
              <div className="card-body">
                <div className="card-body downloadCard">
                  <h2 className="text-center text-xl font-bold">
                    {paymentInfo.paymentTitle}
                  </h2>
                  <div className="divider my-2"></div>
                  <div className="mb-10">
                    <div>
                      <h2 className="text-lg font-semibold">Payment Info</h2>
                      <div className="font-medium">
                        <p className="flex justify-between">
                          User Name :{" "}
                          <span className="">
                            {user?.studentsInfo?.studentNameInEnglish}
                          </span>
                        </p>
                        <p className="flex justify-between">
                          Payment For :{" "}
                          <span className="">{paymentInfo.paymentFor} </span>
                        </p>
                        <p className="flex justify-between">
                          Amount of Pay :{" "}
                          <span className="text-right">
                            {paymentInfo.paymentAmount}
                          </span>
                        </p>
                        <p className="flex justify-between">
                          Transaction ID :{" "}
                          <span className="text-right">
                            {paymentInfo.transId}
                          </span>
                        </p>
                        <p className="flex justify-between">
                          Payment At :{" "}
                          <span className="text-right">
                            {formattedDateTime}
                          </span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card-actions justify-end">
                  <button className="btn btn-block" onClick={handleDownload}>
                    Download Payment Info
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PaymentSuccess;
