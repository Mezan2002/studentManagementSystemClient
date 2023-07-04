import { Card, CardBody, Typography } from "@material-tailwind/react";
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
            className="mt-6 cursor-pointer w-72 text-center"
          >
            <CardBody>
              <img
                src="https://i.ibb.co/HNXDCx5/teacher.png"
                alt=""
                className=" mx-auto mb-3"
              />
              <Typography className="mb-2 text-2xl font-medium text-black">
                Teacher{" "}
              </Typography>
            </CardBody>
          </Card>
          <Card
            onClick={handleSetStudent}
            className="mt-6 cursor-pointer w-72 text-center"
          >
            <CardBody>
              <img
                src="https://i.ibb.co/Q9n3mhT/student.png"
                alt=""
                className=" mx-auto mb-4"
              />
              <Typography className="mb-2 text-2xl font-medium text-black">
                Student{" "}
              </Typography>
            </CardBody>
          </Card>
        </div>
        {isStudent && navigate("/studentRegister")}
        {isTeacher && navigate("/teacherRegister")}
      </section>
    </div>
  );
};

export default Register;
