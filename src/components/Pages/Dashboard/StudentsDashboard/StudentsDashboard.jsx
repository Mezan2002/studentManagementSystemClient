import { useState } from "react";
import PaymentTab from "./PaymentTab/PaymentTab";
import StudentsDashboardLeft from "./StudentsDashboardLeft/StudentsDashboardLeft";
import StudentsMainDashboard from "./StudentsMainDashboard/StudentsMainDashboard";

const StudentsDashboard = ({ usersImage, usersName, usersType }) => {
  // * states start
  const [isMainDashboard, setIsMainDashboard] = useState(true);
  const [isPayment, setIsPayment] = useState(false);
  // * states end

  // * handler functions start
  const handleMainDashboard = () => {
    setIsMainDashboard(true);
    setIsPayment(false);
  };
  const handlePayment = () => {
    setIsPayment(true);
    setIsMainDashboard(false);
  };
  // * handler functions end
  return (
    <section>
      <div className="grid grid-cols-12">
        <div className="col-span-2 bg-[#E8F0FD] min-h-screen text-center relative">
          <StudentsDashboardLeft
            usersImage={usersImage}
            usersName={usersName}
            usersType={usersType}
            isPayment={isPayment}
            setIsPayment={setIsPayment}
            handlePayment={handlePayment}
            handleMainDashboard={handleMainDashboard}
            isMainDashboard={isMainDashboard}
          ></StudentsDashboardLeft>
        </div>
        {isMainDashboard && <StudentsMainDashboard></StudentsMainDashboard>}
        {isPayment && <PaymentTab></PaymentTab>}
      </div>
    </section>
  );
};

export default StudentsDashboard;
