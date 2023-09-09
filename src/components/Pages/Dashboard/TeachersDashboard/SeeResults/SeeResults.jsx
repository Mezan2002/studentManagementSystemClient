import { Input, Option, Select } from "@material-tailwind/react";
import axios from "axios";
import { useState } from "react";
import { useSelector } from "react-redux";

const SeeResults = () => {
  const user = useSelector((state) => state.loggedInUser.loggedInUser);
  const [selectedStudentsData, setSelectedStudentsData] = useState({});
  const [data, setData] = useState([]);
  const [section, setSection] = useState("");
  const [session, setSession] = useState(null);

  console.log(selectedStudentsData);

  const handleChangeSelectedClass = (selectedClass) => {
    setSection(selectedClass.toUpperCase());
  };

  const handleChangeSelectedSession = (selectedValue) => {
    setSession(selectedValue);
  };

  const handleGetResult = (event) => {
    event.preventDefault();
    axios
      .get(
        `https://atg-server-tau.vercel.app/get-results?resultOfClass=${user?.teachersInfo?.teachersTakingClass}&section=${section}&session=${session}`
      )
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleDetailsOfResult = (rollNumber) => {
    document.getElementById("make_result_modal").showModal();
    axios
      .get(
        `https://atg-server-tau.vercel.app/get-result-by-student-roll-number?semister=${section}&session=${session}&rollNumber=${rollNumber}`
      )
      .then((res) => {
        setSelectedStudentsData(res.data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  return (
    <section
      style={{
        backgroundImage: "url(https://i.ibb.co/vsv28Xt/bg-banner.png)",
      }}
      className="col-span-10 min-h-screen"
    >
      <div className="p-20">
        {data.length > 0 ? (
          <div className="">
            <div>
              <div className="flex items-start justify-between">
                <h2 className="text-2xl font-bold">
                  Result of Class {user?.teachersInfo?.teachersTakingClass}{" "}
                  {section}
                </h2>
                <img
                  draggable="false"
                  loading="lazy"
                  src="https://i.ibb.co/gmgtqjm/setting.png"
                  alt=""
                  className="w-10"
                />
              </div>
            </div>
            <div>
              <div className="mt-10 w-full flex items-center justify-center">
                <div className="card bg-white shadow-2xl w-full">
                  <div className="card-body">
                    <div className="overflow-x-auto">
                      <table className="table">
                        <thead>
                          <tr>
                            <th></th>
                            <th>Student</th>
                            <th>Roll Number</th>
                            <th>Session</th>
                            <th>CGPA</th>
                            <th></th>
                          </tr>
                        </thead>
                        <tbody>
                          {data.map((item) => (
                            <tr key={item?._id}>
                              <th></th>
                              <td>
                                <div className="flex items-center space-x-3">
                                  <div className="avatar">
                                    <div className="mask mask-squircle w-12 h-12">
                                      <img
                                        src={item?.studentsData?.studentsImage}
                                        alt="Avatar Tailwind CSS Component"
                                      />
                                    </div>
                                  </div>
                                  <div>
                                    <div className="font-bold">
                                      {item?.studentsData?.name}
                                    </div>
                                    <span className="bg-gray-300 p-1 text-xs rounded-lg">
                                      Department:{" "}
                                      {item?.studentsData?.department} /
                                      {item?.studentsData?.semister} semister
                                    </span>
                                    <div className="text-sm opacity-50"></div>
                                  </div>
                                </div>
                              </td>
                              <td>{item?.studentsData?.rollNumber}</td>
                              <td>{item?.studentsData?.session}</td>
                              <td>4.00</td>
                              <th>
                                <button
                                  onClick={() =>
                                    handleDetailsOfResult(
                                      item?.studentsData?.rollNumber
                                    )
                                  }
                                  className="btn btn-primary btn-xs"
                                >
                                  details
                                </button>
                              </th>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="">
            <div>
              <div className="flex items-start justify-between">
                <h2 className="text-5xl font-bold">See Results</h2>
                <img
                  draggable="false"
                  loading="lazy"
                  src="https://i.ibb.co/gmgtqjm/setting.png"
                  alt=""
                  className="w-10"
                />
              </div>
            </div>
            <div>
              <div className="mt-32 flex items-center justify-center">
                <div className="card w-4/12 bg-white shadow-2xl">
                  <div className="card-body">
                    <div className="">
                      <h2 className="text-left font-semibold text-xl mb-5">
                        See Result of
                      </h2>
                      <form
                        onSubmit={handleGetResult}
                        className="flex flex-col gap-5"
                      >
                        <>
                          <Input
                            readOnly
                            disabled
                            size="lg"
                            defaultValue={
                              user?.teachersInfo?.teachersTakingClass
                            }
                            label="Section"
                          />
                        </>
                        <Select
                          onChange={(selectedValue) => {
                            handleChangeSelectedClass(selectedValue);
                          }}
                          label="Select Your Semister"
                          animate={{
                            mount: { y: 0 },
                            unmount: { y: 25 },
                          }}
                        >
                          <Option className="mb-2 text-xs" value="1st">
                            1st
                          </Option>
                          <Option className="mb-2 text-xs" value="2nd">
                            2nd
                          </Option>
                          <Option className="mb-2 text-xs" value="3rd">
                            3rd
                          </Option>
                          <Option className="mb-2 text-xs" value="4th">
                            4th
                          </Option>
                          <Option className="mb-2 text-xs" value="5th">
                            5th
                          </Option>
                          <Option className="mb-2 text-xs" value="6th">
                            6th
                          </Option>
                          <Option className="mb-2 text-xs" value="7th">
                            7th
                          </Option>
                          <Option className="mb-2 text-xs" value="8th">
                            8th
                          </Option>
                        </Select>

                        <Select
                          onChange={(selectedValue) => {
                            handleChangeSelectedSession(selectedValue);
                          }}
                          label="Select Session"
                          animate={{
                            mount: { y: 0 },
                            unmount: { y: 25 },
                          }}
                        >
                          <Option className="mb-2 text-xs" value="22-23">
                            2022-2023
                          </Option>
                          <Option className="mb-2 text-xs" value="21-22">
                            2021-2022
                          </Option>
                        </Select>
                        <input
                          type="submit"
                          value="See Result"
                          className="btn btn-block bg-black text-white hover:bg-black"
                        />
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
      <div>
        <dialog id="make_result_modal" className="modal">
          <div className="modal-box">
            <form method="dialog">
              <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                ✕
              </button>
            </form>
            <h3 className="font-bold text-lg">See Result</h3>
            <div className="mt-5 flex items-center justify-center">
              <div className="">
                <div className="">
                  <div className="">
                    <form className="flex flex-col gap-5">
                      <div className="grid grid-cols-2 gap-5">
                        <div className="form-control">
                          <label className="label">
                            <span className="font-bold text-xs">
                              Students Name *
                            </span>
                          </label>
                          <Input
                            name="studnetsName"
                            defaultValue={
                              selectedStudentsData?.studentsData?.name
                            }
                            disabled
                            readOnly
                            size="lg"
                          />
                        </div>
                        <div className="form-control">
                          <label className="label">
                            <span className="font-bold text-xs">Exam *</span>
                          </label>
                          <Input
                            name="examName"
                            defaultValue="Test Exam"
                            disabled
                            readOnly
                            size="lg"
                          />
                        </div>
                      </div>
                      <div className="grid grid-cols-2 gap-5">
                        <div className="form-control">
                          <label className="label">
                            <span className="font-bold text-xs">
                              Students Roll Number *
                            </span>
                          </label>
                          <Input
                            name="studentsRollNumber"
                            defaultValue={
                              selectedStudentsData?.studentsData?.rollNumber
                            }
                            disabled
                            readOnly
                            size="lg"
                          />
                        </div>
                        <div className="form-control">
                          <label className="label">
                            <span className="font-bold text-xs">
                              Students Session *
                            </span>
                          </label>
                          <Input
                            name="studentsRegistrationNumber"
                            defaultValue={
                              selectedStudentsData?.studentsData?.session
                            }
                            disabled
                            readOnly
                            size="lg"
                          />
                        </div>
                      </div>
                      <div className="grid grid-cols-2 gap-5">
                        <div className="form-control">
                          <label className="label">
                            <span className="font-bold text-xs">
                              Student of Department *
                            </span>
                          </label>
                          <Input
                            defaultValue={
                              selectedStudentsData?.studentsData?.department
                            }
                            disabled
                            readOnly
                            size="lg"
                          />
                        </div>
                        <div className="form-control">
                          <label className="label">
                            <span className="font-bold text-xs">
                              Students of Semister *
                            </span>
                          </label>
                          <Input
                            defaultValue={
                              selectedStudentsData?.studentsData?.semister
                            }
                            disabled
                            readOnly
                            size="lg"
                          />
                        </div>
                      </div>
                      <div className="form-control ">
                        <label className="label">
                          <span className="font-bold text-xs">
                            Marks Of Structured Programming Language *
                          </span>
                        </label>
                        <div className="grid grid-cols-2 gap-5">
                          <Input
                            name="structuredProgrammingLanguageTotalMarks"
                            defaultValue={
                              selectedStudentsData?.marksOfSubject
                                ?.structuredProgrammingLanguage
                                ?.marksOfStructuredProgrammingLanguage
                            }
                            disabled
                            readOnly
                            size="lg"
                            label="Total Marks Here"
                          />
                          <Input
                            name="structuredProgrammingLanguageCGPA"
                            defaultValue={
                              selectedStudentsData?.marksOfSubject
                                ?.structuredProgrammingLanguage
                                ?.CGPAOfStructuredProgrammingLanguage
                            }
                            disabled
                            readOnly
                            size="lg"
                            label="CGPA Here Out of 4.00"
                          />
                        </div>
                      </div>
                      <div className="form-control ">
                        <label className="label">
                          <span className="font-bold text-xs">
                            Marks Of Structured Programming Language Lab *
                          </span>
                        </label>
                        <div className="grid grid-cols-2 gap-5">
                          <Input
                            name="marksOfStructuredProgrammingLanguageLab"
                            size="lg"
                            defaultValue={
                              selectedStudentsData?.marksOfSubject
                                ?.structuredProgrammingLanguageLab
                                ?.marksOfStructuredProgrammingLanguageLab
                            }
                            disabled
                            readOnly
                            label="Total Marks Here"
                          />
                          <Input
                            name="CGPAOfStructuredProgrammingLanguageLab"
                            size="lg"
                            defaultValue={
                              selectedStudentsData?.marksOfSubject
                                ?.structuredProgrammingLanguageLab
                                ?.CGPAOfStructuredProgrammingLanguageLab
                            }
                            disabled
                            readOnly
                            label="CGPA Here Out of 4.00"
                          />
                        </div>
                      </div>
                      <div className="form-control ">
                        <label className="label">
                          <span className="font-bold text-xs">
                            Marks Of Electrical and Electronic Circuit *
                          </span>
                        </label>
                        <div className="grid grid-cols-2 gap-5">
                          <Input
                            name="marksOfElectricalAndElectronicCircuit"
                            size="lg"
                            defaultValue={
                              selectedStudentsData?.marksOfSubject
                                ?.electricalAndElectronicCircuit
                                ?.marksOfElectricalAndElectronicCircuit
                            }
                            disabled
                            readOnly
                            label="Total Marks Here"
                          />
                          <Input
                            name="CGPAOfElectricalAndElectronicCircuit"
                            size="lg"
                            defaultValue={
                              selectedStudentsData?.marksOfSubject
                                ?.electricalAndElectronicCircuit
                                ?.CGPAOfElectricalAndElectronicCircuit
                            }
                            disabled
                            readOnly
                            label="CGPA Here Out of 4.00"
                          />
                        </div>
                      </div>
                      <div className="form-control ">
                        <label className="label">
                          <span className="font-bold text-xs">
                            Marks Of Electrical and Electronic Circuit Lab *
                          </span>
                        </label>
                        <div className="grid grid-cols-2 gap-5">
                          <Input
                            name="marksOfElectricalAndElectronicCircuitLab"
                            size="lg"
                            defaultValue={
                              selectedStudentsData?.marksOfSubject
                                ?.electricalAndElectronicCircuitLab
                                ?.marksOfElectricalAndElectronicCircuitLab
                            }
                            disabled
                            readOnly
                            label="Total Marks Here"
                          />
                          <Input
                            name="CGPAOfElectricalAndElectronicCircuitLab"
                            size="lg"
                            defaultValue={
                              selectedStudentsData?.marksOfSubject
                                ?.electricalAndElectronicCircuitLab
                                ?.CGPAOfElectricalAndElectronicCircuitLab
                            }
                            disabled
                            readOnly
                            label="CGPA Here Out of 4.00"
                          />
                        </div>
                      </div>
                      <div className="form-control ">
                        <label className="label">
                          <span className="font-bold text-xs">
                            Marks Of Calculus *
                          </span>
                        </label>
                        <div className="grid grid-cols-2 gap-5">
                          <Input
                            name="marksOfCalculus"
                            size="lg"
                            defaultValue={
                              selectedStudentsData?.marksOfSubject?.calculus
                                ?.marksOfCalculus
                            }
                            disabled
                            readOnly
                            label="Total Marks Here"
                          />
                          <Input
                            name="CGPAOfCalculus"
                            size="lg"
                            defaultValue={
                              selectedStudentsData?.marksOfSubject?.calculus
                                ?.CGPAOfCalculus
                            }
                            disabled
                            readOnly
                            label="CGPA Here Out of 4.00"
                          />
                        </div>
                      </div>
                      <div className="form-control ">
                        <label className="label">
                          <span className="font-bold text-xs">
                            Marks Of English *
                          </span>
                        </label>
                        <div className="grid grid-cols-2 gap-5">
                          <Input
                            name="marksOfEnglish"
                            size="lg"
                            defaultValue={
                              selectedStudentsData?.marksOfSubject?.english
                                ?.marksOfEnglish
                            }
                            disabled
                            readOnly
                            label="Total Marks Here"
                          />
                          <Input
                            name="CGPAOfEnglish"
                            size="lg"
                            defaultValue={
                              selectedStudentsData?.marksOfSubject?.english
                                ?.CGPAOfEnglish
                            }
                            disabled
                            readOnly
                            label="CGPA Here Out of 4.00"
                          />
                        </div>
                      </div>

                      <div className="form-control ">
                        <label className="label">
                          <span className="font-bold text-xs">
                            Marks Of Physics *
                          </span>
                        </label>
                        <div className="grid grid-cols-2 gap-5">
                          <Input
                            name="marksOfPhysics"
                            size="lg"
                            defaultValue={
                              selectedStudentsData?.marksOfSubject?.physics
                                ?.marksOfPhysics
                            }
                            disabled
                            readOnly
                            label="Total Marks Here"
                          />
                          <Input
                            name="CGPAOfPhysics"
                            size="lg"
                            defaultValue={
                              selectedStudentsData?.marksOfSubject?.physics
                                ?.CGPAOfPhysics
                            }
                            disabled
                            readOnly
                            label="CGPA Here Out of 4.00"
                          />
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </dialog>
      </div>
    </section>
  );
};

export default SeeResults;
