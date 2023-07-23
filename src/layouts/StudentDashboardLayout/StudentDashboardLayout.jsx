import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import StudentsDashboardLeft from "../../components/Pages/Dashboard/StudentsDashboard/StudentsDashboardLeft/StudentsDashboardLeft";
import Login from "../../components/Pages/Login/Login";
import { fetchUser } from "../../features/loggedInUser/loggedInUserSlice";

const StudentDashboardLayout = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchUser());
  }, [dispatch]);
  const user = useSelector((state) => state.loggedInUser.loggedInUser);
  const usersName = user?.studentsInfo?.studentNameInEnglish;
  const usersType = "student";
  const usersImage = user?.studentsInfo?.studentsImage;
  const studentsClass = user?.studentsInfo?.class;

  return (
    <section>
      {user._id ? (
        <div className="grid grid-cols-12">
          <div className="col-span-2 bg-[#E8F0FD] min-h-screen text-center relative">
            <StudentsDashboardLeft
              usersImage={usersImage}
              usersName={usersName}
              usersType={usersType}
              studentsClass={studentsClass}
            ></StudentsDashboardLeft>
          </div>
          <Outlet></Outlet>
        </div>
      ) : (
        <Login></Login>
      )}
    </section>
  );
};

export default StudentDashboardLayout;
