import { useState } from "react";
import { useSelector } from "react-redux";
import MakeResultOf from "./MakeResultOf/MakeResultOf";
import MakingResultFor from "./MakingResultFor/MakingResultFor";

const MakeResult = () => {
  const user = useSelector((state) => state.loggedInUser.loggedInUser);
  const [studentsRollNumber, setStudentsRollNumber] = useState(null);
  const [section, setSection] = useState(null);
  const [session, setSession] = useState(null);
  const [studentsOfMakingResult, setStudentOfMakingResult] = useState([]);
  const [selectedClass, setSelectedClass] = useState(
    user?.teachersInfo?.teachersTakingClass
  );
  console.log(session);

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
          {studentsOfMakingResult.length > 0 ? (
            <MakingResultFor
              setStudentOfMakingResult={setStudentOfMakingResult}
              studentsOfMakingResult={studentsOfMakingResult}
            ></MakingResultFor>
          ) : (
            <MakeResultOf
              section={section}
              session={session}
              setSession={setSession}
              setSection={setSection}
              selectedClass={selectedClass}
              setStudentOfMakingResult={setStudentOfMakingResult}
            ></MakeResultOf>
          )}
        </div>
      </div>
    </section>
  );
};

export default MakeResult;
