import { useEffect, useState } from "react";
import { FaAngleRight, FaAngleUp } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import { logoutUser } from "../../../../../features/loggedInUser/loggedInUserSlice";

const StudentsDashboardLeft = ({
  usersName,
  usersType,
  usersImage,
  studentsClass,
}) => {
  const dispatch = useDispatch();
  const location = useLocation();
  const [isDashboard, setIsDashboard] = useState(true);
  const [isStudentProfile, setIsStudentProfile] = useState(false);
  const [isRoutine, setIsRoutine] = useState(false);
  const [isResult, setIsResult] = useState(false);
  const [isNotice, setIsNotice] = useState(false);
  const [isComplain, setIsComplain] = useState(false);
  const [isAttendence, setIsAttendence] = useState(false);
  const [isPayment, setIsPayment] = useState(false);

  const currentPathName = location.pathname;

  useEffect(() => {
    if (currentPathName === "/studentsDashboard") {
      setIsDashboard(true);
      setIsStudentProfile(false);
      setIsRoutine(false);
      setIsResult(false);
      setIsNotice(false);
      setIsAttendence(false);
      setIsComplain(false);
      setIsPayment(false);
    } else if (currentPathName === "/studentsDashboard/students-profile") {
      setIsDashboard(false);
      setIsStudentProfile(true);
      setIsRoutine(false);
      setIsResult(false);
      setIsNotice(false);
      setIsAttendence(false);
      setIsComplain(false);
      setIsPayment(false);
    } else if (currentPathName === "/studentsDashboard/payment") {
      setIsDashboard(false);
      setIsStudentProfile(false);
      setIsRoutine(false);
      setIsResult(false);
      setIsNotice(false);
      setIsAttendence(false);
      setIsComplain(false);
      setIsPayment(true);
    } else if (currentPathName === "/studentsDashboard/routine") {
      setIsDashboard(false);
      setIsStudentProfile(false);
      setIsRoutine(true);
      setIsResult(false);
      setIsNotice(false);
      setIsAttendence(false);
      setIsComplain(false);
      setIsPayment(false);
    } else if (currentPathName === "/studentsDashboard/notice") {
      setIsDashboard(false);
      setIsStudentProfile(false);
      setIsRoutine(false);
      setIsResult(false);
      setIsNotice(true);
      setIsAttendence(false);
      setIsComplain(false);
      setIsPayment(false);
    } else if (currentPathName === "/studentsDashboard/complain") {
      setIsDashboard(false);
      setIsStudentProfile(false);
      setIsRoutine(false);
      setIsResult(false);
      setIsNotice(false);
      setIsAttendence(false);
      setIsComplain(true);
      setIsPayment(false);
    } else if (currentPathName === "/studentsDashboard/result") {
      setIsDashboard(false);
      setIsStudentProfile(false);
      setIsRoutine(false);
      setIsResult(true);
      setIsNotice(false);
      setIsAttendence(false);
      setIsComplain(false);
      setIsPayment(false);
    } else if (currentPathName === "/studentsDashboard/attendence") {
      setIsDashboard(false);
      setIsRoutine(false);
      setIsStudentProfile(false);
      setIsResult(false);
      setIsNotice(false);
      setIsAttendence(true);
      setIsComplain(false);
      setIsPayment(false);
    }
  }, [currentPathName]);

  // * handler functions start
  const handleLogOut = () => {
    dispatch(logoutUser());
    localStorage.removeItem("token");
  };
  // * handler functions end
  return (
    <section className="relative">
      <div className="fixed w-[320px] top-0 left-0 bottom-0 right-0">
        <div className="py-10 px-2">
          <div>
            <Link>
              <div className="flex flex-row items-center justify-center">
                <img
                  draggable="false"
                  loading="lazy"
                  src="https://aiict.edu.bd/wp-content/uploads/2022/09/aiict-logo-1-2.png"
                  alt="AIICT's logo"
                  className="w-14"
                />
                <p className="text-5xl ml-2 font-bold">AIICT</p>
              </div>
            </Link>
          </div>
          <div className="mb-16">
            <div className="mt-8">
              <Link to="/studentsDashboard">
                <div
                  className={`flex items-center hover:bg-white justify-between cursor-pointer ${
                    isDashboard && "bg-white"
                  } 2xl:p-4 2xl:m-2 lg:p-3 lg:m-1 rounded-2xl`}
                >
                  <div className="flex items-center">
                    <img
                      draggable="false"
                      loading="lazy"
                      src="https://i.ibb.co/Y0K4W9f/dashboard-2.png"
                      alt=""
                      className="w-6 mr-5"
                    />
                    <p className="">Dashboard</p>
                  </div>
                  <div>
                    <p>
                      {" "}
                      <FaAngleRight></FaAngleRight>{" "}
                    </p>
                  </div>
                </div>
              </Link>
              <Link to="/studentsDashboard/students-profile">
                <div
                  className={`flex items-center hover:bg-white justify-between cursor-pointer ${
                    isStudentProfile && "bg-white"
                  } 2xl:p-4 2xl:m-2 lg:p-3 lg:m-1 rounded-2xl`}
                >
                  <div className="flex items-center">
                    <img
                      draggable="false"
                      loading="lazy"
                      src="https://i.ibb.co/YfvH6zr/user-1.png"
                      alt=""
                      className="w-6 mr-5"
                    />
                    <p className="">My Profile</p>
                  </div>
                  <div>
                    <p>
                      {" "}
                      <FaAngleRight></FaAngleRight>{" "}
                    </p>
                  </div>
                </div>
              </Link>
              <Link to="/studentsDashboard/attendence">
                <div
                  className={`flex items-center hover:bg-white justify-between cursor-pointer ${
                    isAttendence && "bg-white"
                  } 2xl:p-4 2xl:m-2 lg:p-3 lg:m-1 rounded-2xl`}
                >
                  <div className="flex items-center">
                    <img
                      draggable="false"
                      loading="lazy"
                      src="https://i.ibb.co/kc5J7qr/attendance.png"
                      alt=""
                      className="w-6 mr-5"
                    />
                    <p className="">Attendance</p>
                  </div>
                  <div>
                    <p>
                      {" "}
                      <FaAngleRight></FaAngleRight>{" "}
                    </p>
                  </div>
                </div>
              </Link>
              <Link to="/studentsDashboard/result">
                <div
                  className={`flex items-center hover:bg-white justify-between cursor-pointer ${
                    isResult && "bg-white"
                  } 2xl:p-4 2xl:m-2 lg:p-3 lg:m-1 rounded-2xl`}
                >
                  <div className="flex items-center">
                    <img
                      draggable="false"
                      loading="lazy"
                      src="https://i.ibb.co/wLM6J64/exam.png"
                      alt=""
                      className="w-6 mr-5"
                    />
                    <p className="">See Result</p>
                  </div>
                  <div>
                    <p>
                      {" "}
                      <FaAngleRight></FaAngleRight>{" "}
                    </p>
                  </div>
                </div>
              </Link>
              <Link to="/studentsDashboard/routine">
                <div
                  className={`flex items-center hover:bg-white justify-between cursor-pointer ${
                    isRoutine && "bg-white"
                  } 2xl:p-4 2xl:m-2 lg:p-3 lg:m-1 rounded-2xl`}
                >
                  <div className="flex items-center">
                    <img
                      draggable="false"
                      loading="lazy"
                      src="https://i.ibb.co/b2nLV67/routine-1.png"
                      alt=""
                      className="w-6 mr-5"
                    />
                    <p className="">Routine</p>
                  </div>
                  <div>
                    <p>
                      {" "}
                      <FaAngleRight></FaAngleRight>{" "}
                    </p>
                  </div>
                </div>
              </Link>
              <Link to="/studentsDashboard/notice">
                <div
                  className={`flex items-center hover:bg-white justify-between cursor-pointer ${
                    isNotice && "bg-white"
                  } 2xl:p-4 2xl:m-2 lg:p-3 lg:m-1 rounded-2xl`}
                >
                  <div className="flex items-center">
                    <img
                      draggable="false"
                      loading="lazy"
                      src="https://i.ibb.co/BsfRCwH/notice.png"
                      alt=""
                      className="w-6 mr-5"
                    />
                    <p className="">See Notices</p>
                  </div>
                  <div>
                    <p>
                      {" "}
                      <FaAngleRight></FaAngleRight>{" "}
                    </p>
                  </div>
                </div>
              </Link>
              <Link to="/studentsDashboard/complain">
                <div
                  className={`flex items-center hover:bg-white justify-between cursor-pointer ${
                    isComplain && "bg-white"
                  } 2xl:p-4 2xl:m-2 lg:p-3 lg:m-1 rounded-2xl`}
                >
                  <div className="flex items-center">
                    <img
                      draggable="false"
                      loading="lazy"
                      src="https://i.ibb.co/y8sbVR2/sad-face.png"
                      alt=""
                      className="w-6 mr-5"
                    />
                    <p className="">Complain</p>
                  </div>
                  <div>
                    <p>
                      {" "}
                      <FaAngleRight></FaAngleRight>{" "}
                    </p>
                  </div>
                </div>
              </Link>
              <Link to="/studentsDashboard/payment">
                <div
                  className={`flex items-center justify-between cursor-pointer ${
                    isPayment && "bg-white"
                  } hover:bg-white 2xl:p-4 2xl:m-2 lg:p-3 lg:m-1 rounded-2xl`}
                >
                  <div className="flex items-center">
                    <img
                      draggable="false"
                      loading="lazy"
                      src="https://i.ibb.co/HFh9HxK/wallet.png"
                      alt=""
                      className="w-6 mr-5"
                    />
                    <p className="">Payments</p>
                  </div>
                  <div>
                    <p>
                      {" "}
                      <FaAngleRight></FaAngleRight>{" "}
                    </p>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
        <div className="">
          <div className="bg-white absolute bottom-0 left-0 w-full dropdown dropdown-top dropdown-end">
            <label tabIndex={0} className="">
              <div className="2xl:p-4 lg:p-2 flex items-center justify-between">
                <div className="flex items-center">
                  <div className="avatar">
                    <div className="w-12 h-12 rounded-full">
                      <img
                        draggable="false"
                        loading="lazy"
                        src={usersImage}
                        alt=""
                      />
                    </div>
                  </div>
                  <div className="text-left ml-2">
                    <h2 className="font-semibold text-sm text-left">
                      {usersName}
                    </h2>
                    <p className="text-gray-600 font-medium text-sm capitalize">
                      {" "}
                      {usersType} / {studentsClass}
                    </p>
                  </div>
                </div>
                <div>
                  <button className="btn btn-xs">
                    <FaAngleUp className=""></FaAngleUp>
                  </button>
                </div>
              </div>
            </label>
            <ul
              tabIndex={0}
              className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-full"
            >
              <div className="flex items-center justify-between cursor-pointer hover:bg-gray-200 2xl:p-4 2xl:m-2 lg:p-3 lg:m-1 rounded-2xl">
                <div className="flex items-center">
                  <img
                    draggable="false"
                    loading="lazy"
                    src="https://i.ibb.co/gmgtqjm/setting.png"
                    alt=""
                    className="w-6 mr-5"
                  />
                  <p className="">Settings</p>
                </div>
              </div>
              <div className="flex items-center justify-between cursor-pointer hover:bg-gray-200 2xl:p-4 2xl:m-2 lg:p-3 lg:m-1 rounded-2xl">
                <div className="flex items-center">
                  <img
                    draggable="false"
                    loading="lazy"
                    src="https://i.ibb.co/9HN4m7D/customer-support-1.png"
                    alt=""
                    className="w-6 mr-5"
                  />
                  <p className="">Help</p>
                </div>
              </div>
              <div
                onClick={handleLogOut}
                className="flex items-center justify-between cursor-pointer hover:bg-gray-200 2xl:p-4 2xl:m-2 lg:p-3 lg:m-1 rounded-2xl"
              >
                <div className="flex items-center">
                  <img
                    draggable="false"
                    loading="lazy"
                    src="https://i.ibb.co/X33zMfq/exit-1.png"
                    alt=""
                    className="w-6 mr-5"
                  />
                  <p className="">Log Out</p>
                </div>
              </div>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StudentsDashboardLeft;
