import { useEffect, useState } from "react";
import { FaAngleRight, FaAngleUp } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import { logoutUser } from "../../../../../features/loggedInUser/loggedInUserSlice";
const TeachersDashboardLeft = ({ usersImage, usersName, usersType }) => {
  const dispatch = useDispatch();
  const location = useLocation();

  const [isDashboard, setIsDashboard] = useState(true);
  const [isMyClasses, setIsMyClasses] = useState(false);
  const [isTakeAttendence, setIsTakeAttendence] = useState(false);
  const [isMakeResult, setIsMakeResult] = useState(false);
  const [isSeeResults, setIsSeeResults] = useState(false);
  const [isPublishNotice, setIsPublishNotice] = useState(false);
  const [isComplainAStudent, setIsComplainAStudent] = useState(false);

  const handleLogOut = () => {
    dispatch(logoutUser());
    localStorage.removeItem("token");
  };
  const currentPathName = location.pathname;

  useEffect(() => {
    if (currentPathName === "/teachersDashboard") {
      setIsDashboard(true);
      setIsMyClasses(false);
      setIsTakeAttendence(false);
      setIsMakeResult(false);
      setIsPublishNotice(false);
      setIsSeeResults(false);
      setIsComplainAStudent(false);
    } else if (currentPathName === "/teachersDashboard/my-classes") {
      setIsDashboard(false);
      setIsMyClasses(true);
      setIsTakeAttendence(false);
      setIsMakeResult(false);
      setIsPublishNotice(false);
      setIsSeeResults(false);
      setIsComplainAStudent(false);
    } else if (currentPathName === "/teachersDashboard/take-attendance") {
      setIsDashboard(false);
      setIsMyClasses(false);
      setIsTakeAttendence(true);
      setIsMakeResult(false);
      setIsPublishNotice(false);
      setIsSeeResults(false);
      setIsComplainAStudent(false);
    } else if (currentPathName === "/teachersDashboard/make-result") {
      setIsDashboard(false);
      setIsMyClasses(false);
      setIsTakeAttendence(false);
      setIsMakeResult(true);
      setIsPublishNotice(false);
      setIsSeeResults(false);
      setIsComplainAStudent(false);
    } else if (currentPathName === "/teachersDashboard/see-results") {
      setIsDashboard(false);
      setIsMyClasses(false);
      setIsTakeAttendence(false);
      setIsMakeResult(false);
      setIsSeeResults(true);
      setIsPublishNotice(false);
      setIsComplainAStudent(false);
    } else if (currentPathName === "/teachersDashboard/publish-notice") {
      setIsDashboard(false);
      setIsMyClasses(false);
      setIsTakeAttendence(false);
      setIsMakeResult(false);
      setIsSeeResults(false);
      setIsPublishNotice(true);
      setIsComplainAStudent(false);
    } else if (currentPathName === "/teachersDashboard/complain") {
      setIsDashboard(false);
      setIsMyClasses(false);
      setIsTakeAttendence(false);
      setIsMakeResult(false);
      setIsPublishNotice(false);
      setIsSeeResults(false);
      setIsComplainAStudent(true);
    }
  }, [currentPathName]);

  return (
    <section>
      <div className="fixed w-[320px] top-0 left-0 bottom-0 right-0">
        <div className="py-10 px-2">
          <div>
            <Link to="/">
              <div className="flex flex-row items-center justify-center">
                <img
                  draggable="false"
                  loading="lazy"
                  src="https://i.ibb.co/NLx196P/download-removebg-preview.png"
                  alt=""
                  className="w-14"
                />
                <p className="text-5xl ml-2 font-bold">DHSC</p>
              </div>
            </Link>
          </div>
          <div className="mb-16">
            <div className="mt-8">
              <Link to="/teachersDashboard">
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
              <Link to="/teachersDashboard/my-classes">
                <div
                  className={`flex items-center hover:bg-white justify-between cursor-pointer ${
                    isMyClasses && "bg-white"
                  } 2xl:p-4 2xl:m-2 lg:p-3 lg:m-1 rounded-2xl`}
                >
                  <div className="flex items-center">
                    <img
                      draggable="false"
                      loading="lazy"
                      src="https://i.ibb.co/WxyMQmS/training.png"
                      alt=""
                      className="w-6 mr-5"
                    />
                    <p className="">My Classes</p>
                  </div>
                  <div>
                    <p>
                      {" "}
                      <FaAngleRight></FaAngleRight>{" "}
                    </p>
                  </div>
                </div>
              </Link>
              <Link to="/teachersDashboard/take-attendance">
                <div
                  className={`flex items-center hover:bg-white justify-between cursor-pointer ${
                    isTakeAttendence && "bg-white"
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
                    <p className="">Take Attendance</p>
                  </div>
                  <div>
                    <p>
                      {" "}
                      <FaAngleRight></FaAngleRight>{" "}
                    </p>
                  </div>
                </div>
              </Link>
              <Link to="/teachersDashboard/make-result">
                <div
                  className={`flex items-center hover:bg-white justify-between cursor-pointer ${
                    isMakeResult && "bg-white"
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
                    <p className="">Make Result</p>
                  </div>
                  <div>
                    <p>
                      {" "}
                      <FaAngleRight></FaAngleRight>{" "}
                    </p>
                  </div>
                </div>
              </Link>
              <Link to="/teachersDashboard/see-results">
                <div
                  className={`flex items-center hover:bg-white justify-between cursor-pointer ${
                    isSeeResults && "bg-white"
                  } 2xl:p-4 2xl:m-2 lg:p-3 lg:m-1 rounded-2xl`}
                >
                  <div className="flex items-center">
                    <img
                      draggable="false"
                      loading="lazy"
                      src="https://i.ibb.co/1LvNkn7/case-study.png"
                      alt=""
                      className="w-6 mr-5"
                    />
                    <p className="">See Results</p>
                  </div>
                  <div>
                    <p>
                      {" "}
                      <FaAngleRight></FaAngleRight>{" "}
                    </p>
                  </div>
                </div>
              </Link>
              <Link to="/teachersDashboard/publish-notice">
                <div
                  className={`flex items-center hover:bg-white justify-between cursor-pointer ${
                    isPublishNotice && "bg-white"
                  } 2xl:p-4 2xl:m-2 lg:p-3 lg:m-1 rounded-2xl`}
                >
                  <div className="flex items-center">
                    <img
                      draggable="false"
                      loading="lazy"
                      src="https://i.ibb.co/ySnQkBH/notice-1.png"
                      alt=""
                      className="w-6 mr-5"
                    />
                    <p className="">Publish Notice</p>
                  </div>
                  <div>
                    <p>
                      {" "}
                      <FaAngleRight></FaAngleRight>{" "}
                    </p>
                  </div>
                </div>
              </Link>
              <Link to="/teachersDashboard/complain">
                <div
                  className={`flex items-center hover:bg-white justify-between cursor-pointer ${
                    isComplainAStudent && "bg-white"
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
                    <h2 className="font-semibold text-sm">{usersName}</h2>
                    <p className="text-gray-600 font-medium text-sm capitalize">
                      {" "}
                      {usersType}
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

export default TeachersDashboardLeft;
