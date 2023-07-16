import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { fetchUser } from "../../../features/loggedInUser/loggedInUserSlice";
import Login from "../Login/Login";
import StudentsDashboard from "./StudentsDashboard/StudentsDashboard";
import TeachersDashboard from "./TeachersDashboard/TeachersDashboard";

const Dashboard = () => {
  const navigate = useNavigate();
  const [usersName, setUsersName] = useState("");
  const [usersType, setUsersType] = useState("");
  const [usersImage, setUsersImage] = useState("");

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchUser());
  }, [dispatch]);

  const user = useSelector((state) => state.loggedInUser.loggedInUser);
  console.log(user);

  if (user.message) {
    navigate("/login");
  }

  useEffect(() => {
    if (user?.userType === "teacher") {
      setUsersName(user?.teachersInfo?.teachersNameInEnglish);
      setUsersType("teacher");
      setUsersImage(user?.teachersInfo?.teachersImage);
    } else if (user?.userType === "student") {
      setUsersName(user?.studentsInfo?.studentNameInEnglish);
      setUsersType("student");
      setUsersImage(user?.studentsInfo?.studentsImage);
    }
  }, [
    user?.userType,
    user?.studentsInfo?.studentsImage,
    user?.teachersInfo?.teachersImage,
    user?.teachersInfo?.teachersNameInEnglish,
    user?.studentsInfo?.studentNameInEnglish,
  ]);
  return (
    <section>
      {user._id ? (
        <div>
          {usersType === "student" ? (
            <StudentsDashboard
              usersName={usersName}
              usersType={usersType}
              usersImage={usersImage}
            ></StudentsDashboard>
          ) : (
            <TeachersDashboard
              usersName={usersName}
              usersType={usersType}
              usersImage={usersImage}
            ></TeachersDashboard>
          )}
        </div>
      ) : (
        <Login></Login>
      )}
    </section>
  );
};

export default Dashboard;
