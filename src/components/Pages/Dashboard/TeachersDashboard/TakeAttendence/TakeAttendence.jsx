import { Card } from "@material-tailwind/react";
import axios from "axios";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import { customDateOnly } from "../../../../../utils/takingDateOnly";

const TakeAttendence = () => {
  const [studentsDataFromDB, setStudentsDataFromDB] = useState([]);
  const [isClassSelected, setIsClassSelected] = useState(false);
  const [section, setSection] = useState("");
  const [selectedClass, setSelectedClass] = useState("");
  const sectionUppercase = section.toUpperCase();
  const date = new Date();
  useEffect(() => {
    if (section !== "") {
      axios
        .get(
          `https://super-ray-shrug.cyclic.cloud/getStudents?selectedClass=${selectedClass}&section=${sectionUppercase}`
        )
        .then((res) => {
          setStudentsDataFromDB(
            res.data.map((student) => ({ ...student, isPresent: false }))
          );
        });
    }
  }, [sectionUppercase, selectedClass, section]);

  const handleSelectClass = (selectedClass) => {
    setSelectedClass(selectedClass);
    setIsClassSelected(true);
  };

  const handleIsPresent = (studentId) => {
    setStudentsDataFromDB((prevData) =>
      prevData.map((student) =>
        student._id === studentId
          ? { ...student, isPresent: !student.isPresent }
          : student
      )
    );
  };

  const handleSubmitAttendence = () => {
    const attendenceData = {
      dateOfAttendence: customDateOnly(date),
      classOfAttendence: selectedClass,
      sectionOfAttendence: sectionUppercase,
      students: studentsDataFromDB,
    };

    axios
      .post(
        "https://super-ray-shrug.cyclic.cloud/postAttendence",
        JSON.stringify(attendenceData),
        {
          headers: {
            "content-type": "application/json",
          },
        }
      )
      .then((res) => {
        if (res.data.acknowledged) {
          Swal.fire("Attendence Submitted!", "", "success");
        } else {
          Swal.fire("Opps!", "Something went wrong, try again!", "error");
        }
      });

    console.log(attendenceData);
  };

  const classesInfo = [
    {
      class: "6",
      section: ["A", "B", "C"],
    },
    {
      class: "7",
      section: ["A", "B", "C"],
    },
    {
      class: "8",
      section: ["A", "B", "C"],
    },
    {
      class: "9",
      section: ["", "Humanities", "Business Studies"],
    },
    {
      class: "10",
      section: ["Science", "", ""],
    },
  ];
  return (
    <section
      style={{
        backgroundImage: "url(https://i.ibb.co/vsv28Xt/bg-banner.png)",
      }}
      className="col-span-10 min-h-screen relative"
    >
      <div className="p-20">
        <div className="">
          <div>
            <div className="flex items-start justify-between">
              <h2 className="text-5xl font-bold">Taking Attendence of </h2>
              <p className="text-3xl font-bold"> {customDateOnly(date)} </p>
            </div>
          </div>
          {section === "" ? (
            <div className="mt-20">
              {isClassSelected ? (
                <>
                  {" "}
                  <h2 className="text-4xl mb-5 font-medium">
                    Now select the section
                  </h2>
                  <div className={`flex items-center justify-center mt-20`}>
                    <Card
                      className={`p-10 text-center cursor-pointer ${
                        selectedClass === "9" || selectedClass === "10"
                          ? "w-5/12"
                          : "w-3/12"
                      }`}
                    >
                      <>
                        {isClassSelected && (
                          <>
                            <p className="text-xl font-medium">Class</p>
                            <h2 className="text-9xl my-6 font-semibold">
                              {selectedClass}
                            </h2>
                            <p className="text-xl font-medium">Section</p>
                            {selectedClass === "9" || selectedClass === "10" ? (
                              <div className="grid grid-cols-3 gap-5">
                                <h2
                                  onClick={() => setSection("Science")}
                                  className=" mt-6 bg-black rounded-lg text-white font-semibold"
                                >
                                  Science
                                </h2>
                                <h2
                                  onClick={() => setSection("Humanities")}
                                  className=" mt-6 bg-black rounded-lg text-white font-semibold"
                                >
                                  Humanities
                                </h2>
                                <h2
                                  onClick={() => setSection("Business Studies")}
                                  className=" mt-6 bg-black rounded-lg text-white font-semibold"
                                >
                                  Business Studies
                                </h2>
                              </div>
                            ) : (
                              <div className="grid grid-cols-3 gap-5">
                                <h2
                                  onClick={() => setSection("A")}
                                  className="text-7xl mt-6 bg-black rounded-lg text-white font-semibold"
                                >
                                  A
                                </h2>
                                <h2
                                  onClick={() => setSection("B")}
                                  className="text-7xl mt-6 bg-black rounded-lg text-white font-semibold"
                                >
                                  B
                                </h2>
                                <h2
                                  onClick={() => setSection("B")}
                                  className="text-7xl mt-6 bg-black rounded-lg text-white font-semibold"
                                >
                                  C
                                </h2>
                              </div>
                            )}
                          </>
                        )}
                      </>
                    </Card>
                  </div>{" "}
                </>
              ) : (
                <>
                  {" "}
                  <h2 className="text-4xl mb-5 font-medium">
                    Want to take attendence of class
                  </h2>
                  <div
                    className={`grid grid-cols-${classesInfo.length} gap-10 mt-20`}
                  >
                    {classesInfo.map((cls) => {
                      return (
                        <>
                          <Card
                            key={cls.class}
                            onClick={() => handleSelectClass(cls.class)}
                            className=" p-10 text-center cursor-pointer"
                          >
                            <>
                              <p className="text-xl font-medium">Class</p>
                              <h2 className="text-9xl mt-6 font-semibold">
                                {cls.class}
                              </h2>
                            </>
                          </Card>
                        </>
                      );
                    })}
                  </div>
                </>
              )}
            </div>
          ) : (
            <div className="mt-10">
              <div className="grid grid-cols-5 gap-5">
                {studentsDataFromDB.map((student) => (
                  <>
                    {" "}
                    <div
                      onClick={() => handleIsPresent(student._id)}
                      className={`card cursor-pointer relative ${
                        student.isPresent ? "bg-green-100" : "bg-red-100"
                      } shadow-xl`}
                    >
                      <div className="h-10 w-10 bg-white rounded-full absolute top-2 right-2 flex items-center justify-center">
                        <p
                          className={`text-lg font-medium ${
                            student.isPresent
                              ? "text-green-500"
                              : "text-red-500"
                          }`}
                        >
                          {student.isPresent ? "P" : "A"}
                        </p>
                      </div>
                      <div className="px-5 py-8">
                        <div className="avatar flex items-center justify-center">
                          <div className="w-24 mask mask-squircle">
                            <img src={student.studentsInfo.studentsImage} />
                          </div>
                        </div>
                        <div className="">
                          <h2 className="text-xl font-semibold text-center">
                            {student.studentsInfo.studentNameInEnglish}{" "}
                          </h2>
                        </div>
                      </div>
                    </div>
                  </>
                ))}
              </div>
              <button
                onClick={handleSubmitAttendence}
                className="btn bg-black text-white hover:bg-black mt-10 w-[81%] btn-circle fixed bottom-5 right-5"
              >
                Submit Attendence
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default TakeAttendence;