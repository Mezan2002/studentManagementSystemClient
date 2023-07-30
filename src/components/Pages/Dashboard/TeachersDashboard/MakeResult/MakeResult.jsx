import { useState } from "react";
import MakeResultOf from "./MakeResultOf/MakeResultOf";
import MakingResultFor from "./MakingResultFor/MakingResultFor";

const MakeResult = () => {
  const [studentToMakeResult, setStudentToMakeResult] = useState(null);
  const [studentsRollNumber, setStudentsRollNumber] = useState(null);
  const [section, setSection] = useState(null);
  const [selectedClass, setSelectedClass] = useState(null);
  const [examName, setExamName] = useState(null);
  const [studentsRegistrationNumber, setStudentsRegistrationNumber] =
    useState(null);

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
              setSelectedClass={setSelectedClass}
              setSection={setSection}
              setExamName={setExamName}
              setStudentsRollNumber={setStudentsRollNumber}
              setStudentsRegistrationNumber={setStudentsRegistrationNumber}
              setStudentToMakeResult={setStudentToMakeResult}
            ></MakeResultOf>
          ) : (
            <MakingResultFor
              section={section}
              selectedClass={selectedClass}
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
