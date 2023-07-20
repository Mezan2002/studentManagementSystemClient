import { FaAngleRight, FaAngleUp } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { logoutUser } from "../../../../../features/loggedInUser/loggedInUserSlice";
const TeachersDashboardLeft = ({ usersImage, usersName, usersType }) => {
  const dispatch = useDispatch();

  const handleLogOut = () => {
    dispatch(logoutUser());
    localStorage.removeItem("token");
  };

  return (
    <section>
      <div className="">
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
              <div className="flex items-center justify-between cursor-pointer bg-white 2xl:p-4 2xl:m-2 lg:p-3 lg:m-1 rounded-2xl">
                <div className="flex items-center">
                  <img
                    draggable="false"
                    loading="lazy"
                    loading="lazy"
                    draggable={false}
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
              <div className="flex items-center justify-between cursor-pointer hover:bg-white 2xl:p-4 2xl:m-2 lg:p-3 lg:m-1 rounded-2xl">
                <div className="flex items-center">
                  <img
                    draggable="false"
                    loading="lazy"
                    loading="lazy"
                    draggable={false}
                    src="https://i.ibb.co/9q0gqLy/group-1.png"
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
              <div className="flex items-center justify-between cursor-pointer hover:bg-white 2xl:p-4 2xl:m-2 lg:p-3 lg:m-1 rounded-2xl">
                <div className="flex items-center">
                  <img
                    draggable="false"
                    loading="lazy"
                    loading="lazy"
                    draggable={false}
                    src="https://i.ibb.co/VB6vMNZ/web-content.png"
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
              <div className="flex items-center justify-between cursor-pointer hover:bg-white 2xl:p-4 2xl:m-2 lg:p-3 lg:m-1 rounded-2xl">
                <div className="flex items-center">
                  <img
                    draggable="false"
                    loading="lazy"
                    loading="lazy"
                    draggable={false}
                    src="https://i.ibb.co/4NzJXFy/request.png"
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
              <div className="flex items-center justify-between cursor-pointer hover:bg-white 2xl:p-4 2xl:m-2 lg:p-3 lg:m-1 rounded-2xl">
                <div className="flex items-center">
                  <img
                    draggable="false"
                    loading="lazy"
                    loading="lazy"
                    draggable={false}
                    src="https://i.ibb.co/2YJKmJj/warning-1.png"
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
              <div className="flex items-center justify-between cursor-pointer hover:bg-white 2xl:p-4 2xl:m-2 lg:p-3 lg:m-1 rounded-2xl">
                <div className="flex items-center">
                  <img
                    draggable="false"
                    loading="lazy"
                    loading="lazy"
                    draggable={false}
                    src="https://i.ibb.co/Jd44Yf4/warning-4.png"
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
              <div className="flex items-center justify-between cursor-pointer hover:bg-white 2xl:p-4 2xl:m-2 lg:p-3 lg:m-1 rounded-2xl">
                <div className="flex items-center">
                  <img
                    draggable="false"
                    loading="lazy"
                    loading="lazy"
                    draggable={false}
                    src="https://i.ibb.co/k8QDS68/warning-3.png"
                    alt=""
                    className="w-6 mr-5"
                  />
                  <p className="">Complain a Student</p>
                </div>
                <div>
                  <p>
                    {" "}
                    <FaAngleRight></FaAngleRight>{" "}
                  </p>
                </div>
              </div>
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
                        loading="lazy"
                        draggable={false}
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
                    loading="lazy"
                    draggable={false}
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
                    loading="lazy"
                    draggable={false}
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
                    loading="lazy"
                    draggable={false}
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
