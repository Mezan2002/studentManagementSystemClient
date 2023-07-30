import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import AdminDashboardLeft from "../../components/Pages/Dashboard/AdminDashboard/AdminDashboardLeft/AdminDashboardLeft";
import Login from "../../components/Pages/Login/Login";
import { fetchUser } from "../../features/loggedInUser/loggedInUserSlice";

const AdminDashboardLayout = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchUser());
  }, [dispatch]);
  const user = useSelector((state) => state.loggedInUser.loggedInUser);
  const adminImage = user?.adminInfo?.adminImage;
  const adminName = user?.adminInfo?.adminNameInEnglish;
  return (
    <section>
      {user._id ? (
        <div className="grid grid-cols-12">
          <div className="col-span-2 bg-[#E8F0FD] min-h-screen text-center relative">
            {/* <StudentsDashboardLeft
            usersImage={usersImage}
              usersName={usersName}
              usersType={usersType}
              studentsClass={studentsClass}
            ></StudentsDashboardLeft> */}
            <AdminDashboardLeft
              adminImage={adminImage}
              adminName={adminName}
            ></AdminDashboardLeft>
          </div>
          <Outlet></Outlet>
        </div>
      ) : (
        <Login></Login>
      )}
    </section>
  );
};

export default AdminDashboardLayout;
