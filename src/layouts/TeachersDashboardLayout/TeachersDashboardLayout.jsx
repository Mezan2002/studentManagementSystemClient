import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import TeachersDashboardLeft from "../../components/Pages/Dashboard/TeachersDashboard/TeachersDashboardLeft/TeachersDashboardLeft";
import Login from "../../components/Pages/Login/Login";
import { fetchUser } from "../../features/loggedInUser/loggedInUserSlice";

const TeachersDashboardLayout = () => {
  const user = useSelector((state) => state.loggedInUser.loggedInUser);
  console.log(user);
  const [usersName, setUsersName] = useState("");
  const [usersType, setUsersType] = useState("");
  const [usersImage, setUsersImage] = useState("");
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchUser());
  }, [dispatch]);

  useEffect(() => {
    if (user?.userType === "teacher") {
      setUsersName(user?.teachersInfo?.teachersNameInEnglish);
      setUsersType(user?.teachersInfo.teachersDesignaion);
      setUsersImage(user?.teachersInfo?.teachersImage);
    }
  }, [
    user?.userType,
    user?.studentsInfo?.studentsImage,
    user?.teachersInfo?.teachersImage,
    user?.teachersInfo?.teachersNameInEnglish,
    user?.studentsInfo?.studentNameInEnglish,
    user?.teachersInfo?.teachersDesignaion,
  ]);

  return (
    <section>
      {user._id ? (
        <div className="grid grid-cols-12">
          <div className="col-span-2 bg-[#E8F0FD] min-h-screen text-center relative">
            <TeachersDashboardLeft
              usersImage={usersImage}
              usersName={usersName}
              usersType={usersType}
            ></TeachersDashboardLeft>
          </div>
          <Outlet></Outlet>
        </div>
      ) : (
        <Login></Login>
      )}
    </section>
  );
};

export default TeachersDashboardLayout;
