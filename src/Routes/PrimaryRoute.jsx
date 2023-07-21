import { createBrowserRouter } from "react-router-dom";
import Attendence from "../components/Pages/Dashboard/StudentsDashboard/Attendence/Attendence";
import Complain from "../components/Pages/Dashboard/StudentsDashboard/Complain/Complain";
import Notice from "../components/Pages/Dashboard/StudentsDashboard/Notice/Notice";
import PaymentCancel from "../components/Pages/Dashboard/StudentsDashboard/PaymentFor/PaymentCancel/PaymentCancel";
import PaymentFail from "../components/Pages/Dashboard/StudentsDashboard/PaymentFor/PaymentFail/PaymentFail";
import PaymentFor from "../components/Pages/Dashboard/StudentsDashboard/PaymentFor/PaymentFor";
import PaymentSuccess from "../components/Pages/Dashboard/StudentsDashboard/PaymentFor/PaymentSuccess/PaymentSuccess";
import Result from "../components/Pages/Dashboard/StudentsDashboard/Result/Result";
import Routine from "../components/Pages/Dashboard/StudentsDashboard/Routine/Routine";
import StudentsMainDashboard from "../components/Pages/Dashboard/StudentsDashboard/StudentsMainDashboard/StudentsMainDashboard";
import TeachersMainDashboard from "../components/Pages/Dashboard/TeachersDashboard/TeachersMainDashboard/TeachersMainDashboard";
import Home from "../components/Pages/Home/Home";
import Login from "../components/Pages/Login/Login";
import Register from "../components/Pages/Register/Register";
import StudentRegister from "../components/Pages/Register/StudentRegister/StudentRegister";
import TeacherRegister from "../components/Pages/Register/TeacherRegister/TeacherRegister";
import Main from "../layouts/Main/Main";
import StudentDashboardLayout from "../layouts/StudentDashboardLayout/StudentDashboardLayout";
import TeachersDashboardLayout from "../layouts/TeachersDashboardLayout/TeachersDashboardLayout";

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
  {
    path: "/studentsDashboard",
    element: <StudentDashboardLayout></StudentDashboardLayout>,
    children: [
      {
        path: "/studentsDashboard",
        element: <StudentsMainDashboard></StudentsMainDashboard>,
      },
      {
        path: "/studentsDashboard/attendence",
        element: <Attendence></Attendence>,
      },
      {
        path: "/studentsDashboard/routine",
        element: <Routine></Routine>,
      },
      {
        path: "/studentsDashboard/notice",
        element: <Notice></Notice>,
      },
      {
        path: "/studentsDashboard/complain",
        element: <Complain></Complain>,
      },
      {
        path: "/studentsDashboard/result",
        element: <Result></Result>,
      },
      {
        path: "/studentsDashboard/payment",
        element: <PaymentFor></PaymentFor>,
      },
      {
        path: "/studentsDashboard/payment/success",
        element: <PaymentSuccess></PaymentSuccess>,
      },
      {
        path: "/studentsDashboard/payment/fail",
        element: <PaymentFail></PaymentFail>,
      },
      {
        path: "/studentsDashboard/payment/cancel",
        element: <PaymentCancel></PaymentCancel>,
      },
    ],
  },
  {
    path: "/teachersDashboard",
    element: <TeachersDashboardLayout></TeachersDashboardLayout>,
    children: [
      {
        path: "/teachersDashboard",
        element: <TeachersMainDashboard></TeachersMainDashboard>,
      },
    ],
  },
]);
