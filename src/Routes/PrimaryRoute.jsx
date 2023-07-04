import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main/Main";
import Home from "../components/Pages/Home/Home";
import Login from "../components/Pages/Login/Login";
import Register from "../components/Pages/Register/Register";
import StudentRegister from "../components/Pages/Register/StudentRegister/StudentRegister";
import TeacherRegister from "../components/Pages/Register/TeacherRegister/TeacherRegister";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
    ],
  },
  {
    path: "/login",
    element: <Login></Login>,
  },
  {
    path: "/register",
    element: <Register></Register>,
  },
  {
    path: "/studentRegister",
    element: <StudentRegister></StudentRegister>,
  },
  {
    path: "/teacherRegister",
    element: <TeacherRegister></TeacherRegister>,
  },
]);
