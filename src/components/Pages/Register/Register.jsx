import { Card } from "@material-tailwind/react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();
  const [isTeacher, setIsTeacher] = useState(false);
  const [isStudent, setIsStudent] = useState(false);

  const handleSetTeacher = () => {
    setIsTeacher(true);
  };
  const handleSetStudent = () => {
    setIsStudent(true);
  };
  return (
    <div>
      <section
        style={{
          backgroundImage: "url(https://i.ibb.co/vsv28Xt/bg-banner.png)",
        }}
        className="min-h-screen flex flex-col items-center justify-center"
      >
        <h2 className="text-4xl mb-5 font-medium">You want to register as a</h2>
        <div className="grid grid-cols-2 gap-10">
          <Card
            onClick={handleSetTeacher}
            className="w-96 p-10 text-center cursor-pointer"
          >
            <img
              draggable="false"
              loading="lazy"
              src="https://i.ibb.co/sPHvXQ8/teacher-1.png"
              alt="profile-picture"
              className=""
            />

            <h2 className="text-3xl mt-6 font-semibold py-2 px-4 rounded-xl bg-[#2196F3] text-white">
              Teacher
            </h2>
          </Card>
          <Card
            onClick={handleSetStudent}
            className="w-96 p-10 text-center cursor-pointer"
          >
            <img
              draggable="false"
              loading="lazy"
              src="https://i.ibb.co/c6nK5w1/student-2.png"
              alt="profile-picture"
              className=""
            />

            <h2 className="text-3xl mt-6 font-semibold py-2 px-4 rounded-xl bg-[#2196F3] text-white">
              Student
            </h2>
          </Card>
        </div>
        {isStudent && navigate("/studentRegister")}
        {isTeacher && navigate("/teacherRegister")}
      </section>
    </div>
  );
};

export default Register;
