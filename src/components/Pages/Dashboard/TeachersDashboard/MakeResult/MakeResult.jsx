import { useState } from "react";
import { useForm } from "react-hook-form";
import MakeResultOf from "./MakeResultOf/MakeResultOf";
import MakingResultFor from "./MakeResultOf/MakingResultFor/MakingResultFor";

const MakeResult = () => {
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [studentToMakeResult, setStudentToMakeResult] = useState(null);
  const [studentsRollNumber, setStudentsRollNumber] = useState(null);
  const [isClassError, setIsClassError] = useState(false);
  const [selectedClass, setSelectedClass] = useState(null);
  const [selectedStudent, setSelectedStudent] = useState("");
  const [examName, setExamName] = useState(null);
  const [studentsRegistrationNumber, setStudentsRegistrationNumber] =
    useState(null);

  const onSubmit = async (data) => {
    console.log(data);
  };

  return (
    <section
      style={{
        backgroundImage: "url(https://i.ibb.co/vsv28Xt/bg-banner.png)",
      }}
      className="col-span-10 min-h-screen"
    >
      <div className="p-20">
        <div className="">
          <div>
            <div className="flex items-start justify-between">
              <h2 className="text-5xl font-bold">Make Result</h2>
              <img
                draggable="false"
                loading="lazy"
                src="https://i.ibb.co/gmgtqjm/setting.png"
                alt=""
                className="w-10"
              />
            </div>
          </div>
          {studentToMakeResult === null ? (
            <MakeResultOf
              setExamName={setExamName}
              setStudentsRollNumber={setStudentsRollNumber}
              setStudentsRegistrationNumber={setStudentsRegistrationNumber}
              setStudentToMakeResult={setStudentToMakeResult}
            ></MakeResultOf>
          ) : (
            <MakingResultFor
              handleSubmit={handleSubmit}
              onSubmit={onSubmit}
              errors={errors}
              register={register}
              examName={examName}
              studentsRollNumber={studentsRollNumber}
              studentsRegistrationNumber={studentsRegistrationNumber}
              studentToMakeResult={studentToMakeResult}
            ></MakingResultFor>
          )}
        </div>
      </div>
    </section>
  );
};

export default MakeResult;
