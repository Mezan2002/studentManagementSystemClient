import { Input } from "@material-tailwind/react";
import axios from "axios";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import Swal from "sweetalert2";

const MakingResultFor = ({
  studentsOfMakingResult,
  setStudentToMakeResult,
}) => {
  if (studentsOfMakingResult === []) {
    setStudentToMakeResult(false);
  }
  const [
    selectSingleStudentForMakeResult,
    setSelectSingleStudentForMakeResult,
  ] = useState(false);

  const [showResultMakingModal, setShowResultMakingModal] = useState(false);
  const [selectedStudentsData, setSelectedStudentsData] = useState({});
  const user = useSelector((state) => state.loggedInUser.loggedInUser);
  const teachersName = user?.teachersInfo?.teachersNameInEnglish;
  const teachersDesignation = user?.teachersInfo?.teachersDesignaion;
  const teachersTakingClass = user?.teachersInfo?.teachersTakingClass;
  const teachersImage = user?.teachersInfo?.teachersImage;
  const teachersId = user?._id;

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event?.target;
    const marksOfStructuredProgrammingLanguage =
      form?.structuredProgrammingLanguageTotalMarks?.value;
    const CGPAOfStructuredProgrammingLanguage =
      form?.structuredProgrammingLanguageCGPA?.value;
    const marksOfStructuredProgrammingLanguageLab =
      form.marksOfStructuredProgrammingLanguageLab.value;
    const CGPAOfStructuredProgrammingLanguageLab =
      form.CGPAOfStructuredProgrammingLanguageLab.value;
    const marksOfElectricalAndElectronicCircuit =
      form.marksOfElectricalAndElectronicCircuit.value;
    const CGPAOfElectricalAndElectronicCircuit =
      form.CGPAOfElectricalAndElectronicCircuit.value;
    const marksOfElectricalAndElectronicCircuitLab =
      form.marksOfElectricalAndElectronicCircuitLab.value;
    const CGPAOfElectricalAndElectronicCircuitLab =
      form.CGPAOfElectricalAndElectronicCircuitLab.value;
    const marksOfCalculus = form.marksOfCalculus.value;
    const CGPAOfCalculus = form.CGPAOfCalculus.value;
    const marksOfEnglish = form.marksOfEnglish.value;
    const CGPAOfEnglish = form.CGPAOfEnglish.value;
    const marksOfPhysics = form.marksOfPhysics.value;
    const CGPAOfPhysics = form.CGPAOfPhysics.value;
    const formData = {
      studentsData: {
        studentsImage: selectedStudentsData?.studentsInfo?.studentsImage,
        name: selectedStudentsData?.studentsInfo?.studentNameInEnglish,
        examName: "Test Exam",
        rollNumber: selectedStudentsData?.studentsInfo?.studentRollNumber,
        session: selectedStudentsData?.studentsInfo?.session,
        department: selectedStudentsData?.studentsInfo?.class,
        semister: selectedStudentsData?.studentsInfo?.section,
      },
      resultMadeBy: {
        teachersName,
        teachersImage,
        teachersId,
        teachersDesignation,
        teachersTakingClass,
      },
      marksOfSubject: {
        structuredProgrammingLanguage: {
          marksOfStructuredProgrammingLanguage,
          CGPAOfStructuredProgrammingLanguage,
        },
        structuredProgrammingLanguageLab: {
          marksOfStructuredProgrammingLanguageLab,
          CGPAOfStructuredProgrammingLanguageLab,
        },
        electricalAndElectronicCircuit: {
          marksOfElectricalAndElectronicCircuit,
          CGPAOfElectricalAndElectronicCircuit,
        },
        electricalAndElectronicCircuitLab: {
          marksOfElectricalAndElectronicCircuitLab,
          CGPAOfElectricalAndElectronicCircuitLab,
        },
        calculus: {
          marksOfCalculus,
          CGPAOfCalculus,
        },
        english: {
          marksOfEnglish,
          CGPAOfEnglish,
        },
        physics: {
          marksOfPhysics,
          CGPAOfPhysics,
        },
      },
    };

    console.log(formData);

    axios
      .post("http://localhost:5001/make-result", JSON.stringify(formData), {
        headers: {
          "content-type": "application/json",
        },
      })
      .then((res) => {
        if (res.data.acknowledged) {
          Swal.fire("Result Maked Successfully!", "", "success");
          form.reset();
        }
      })
      .catch((err) => {
        Swal.fire("Something Went Wrong!", "Try Again!", "error");
        console.log(err);
      });
  };
  const handleMakeResult = (rollNumber, studentId) => {
    document.getElementById("make_result_modal").showModal();
    axios
      .get(
        `http://localhost:5001/get-individual-students-data-by-id/${studentId}`
      )
      .then((res) => {
        console.log(res.data);
        setSelectedStudentsData(res.data);
        setSelectSingleStudentForMakeResult(true);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };
  return (
    <div>
      <div className="overflow-x-auto mt-5">
        <table className="table">
          <thead>
            <tr>
              <th>
                <label>
                  <input type="checkbox" className="checkbox" />
                </label>
              </th>
              <th>Student</th>
              <th>Department & Semister</th>
              <th>Mobile No.</th>
              <th>Make Result</th>
            </tr>
          </thead>
          <tbody>
            {studentsOfMakingResult &&
              studentsOfMakingResult.map((student) => (
                <>
                  <tr key={student?._id}>
                    <th>
                      <label>
                        <input type="checkbox" className="checkbox" />
                      </label>
                    </th>
                    <td>
                      <div className="flex items-center space-x-3">
                        <div className="avatar">
                          <div className="mask mask-squircle w-12 h-12">
                            <img
                              src={student?.studentsInfo?.studentsImage}
                              alt=""
                            />
                          </div>
                        </div>
                        <div>
                          <div className="font-bold">
                            {student?.studentsInfo?.studentNameInEnglish}
                          </div>
                          <div className="text-sm">
                            Roll No. {student?.studentsInfo?.studentRollNumber}
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="text-left uppercase">
                      Department: {student?.studentsInfo?.class}
                      <br />
                      <span className="badge bg-gray-300 badge-sm">
                        Semitster: {student?.studentsInfo?.section}
                      </span>
                    </td>
                    <td>{student?.studentsInfo?.studentsMobileNumber}</td>
                    <th>
                      <button
                        onClick={() =>
                          handleMakeResult(
                            student?.studentsInfo?.studentRollNumber,
                            student._id
                          )
                        }
                        className="btn btn-ghost bg-gray-300 btn-xs"
                      >
                        Make Result
                      </button>
                    </th>
                  </tr>
                  <dialog id="make_result_modal" className="modal">
                    <div className="modal-box">
                      <form method="dialog">
                        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                          ✕
                        </button>
                      </form>
                      <h3 className="font-bold text-lg">Making Result of</h3>
                      <div className="mt-5 flex items-center justify-center">
                        <div className="">
                          <div className="">
                            <div className="">
                              <form
                                onSubmit={handleSubmit}
                                className="flex flex-col gap-5"
                              >
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
                                        selectedStudentsData?.studentsInfo
                                          ?.studentNameInEnglish
                                      }
                                      disabled
                                      readOnly
                                      size="lg"
                                    />
                                  </div>
                                  <div className="form-control">
                                    <label className="label">
                                      <span className="font-bold text-xs">
                                        Exam *
                                      </span>
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
                                        selectedStudentsData?.studentsInfo
                                          ?.studentRollNumber
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
                                        selectedStudentsData?.studentsInfo
                                          ?.session
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
                                        selectedStudentsData?.studentsInfo
                                          ?.class
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
                                        selectedStudentsData?.studentsInfo
                                          ?.section
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
                                      required
                                      size="lg"
                                      label="Total Marks Here"
                                    />
                                    <Input
                                      name="structuredProgrammingLanguageCGPA"
                                      required
                                      size="lg"
                                      label="CGPA Here Out of 4.00"
                                    />
                                  </div>
                                </div>
                                <div className="form-control ">
                                  <label className="label">
                                    <span className="font-bold text-xs">
                                      Marks Of Structured Programming Language
                                      Lab *
                                    </span>
                                  </label>
                                  <div className="grid grid-cols-2 gap-5">
                                    <Input
                                      name="marksOfStructuredProgrammingLanguageLab"
                                      required
                                      size="lg"
                                      label="Total Marks Here"
                                    />
                                    <Input
                                      name="CGPAOfStructuredProgrammingLanguageLab"
                                      required
                                      size="lg"
                                      label="CGPA Here Out of 4.00"
                                    />
                                  </div>
                                </div>
                                <div className="form-control ">
                                  <label className="label">
                                    <span className="font-bold text-xs">
                                      Marks Of Electrical and Electronic Circuit
                                      *
                                    </span>
                                  </label>
                                  <div className="grid grid-cols-2 gap-5">
                                    <Input
                                      name="marksOfElectricalAndElectronicCircuit"
                                      required
                                      size="lg"
                                      label="Total Marks Here"
                                    />
                                    <Input
                                      name="CGPAOfElectricalAndElectronicCircuit"
                                      required
                                      size="lg"
                                      label="CGPA Here Out of 4.00"
                                    />
                                  </div>
                                </div>
                                <div className="form-control ">
                                  <label className="label">
                                    <span className="font-bold text-xs">
                                      Marks Of Electrical and Electronic Circuit
                                      Lab *
                                    </span>
                                  </label>
                                  <div className="grid grid-cols-2 gap-5">
                                    <Input
                                      name="marksOfElectricalAndElectronicCircuitLab"
                                      required
                                      size="lg"
                                      label="Total Marks Here"
                                    />
                                    <Input
                                      name="CGPAOfElectricalAndElectronicCircuitLab"
                                      required
                                      size="lg"
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
                                      required
                                      size="lg"
                                      label="Total Marks Here"
                                    />
                                    <Input
                                      name="CGPAOfCalculus"
                                      required
                                      size="lg"
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
                                      required
                                      size="lg"
                                      label="Total Marks Here"
                                    />
                                    <Input
                                      name="CGPAOfEnglish"
                                      required
                                      size="lg"
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
                                      required
                                      size="lg"
                                      label="Total Marks Here"
                                    />
                                    <Input
                                      name="CGPAOfPhysics"
                                      required
                                      size="lg"
                                      label="CGPA Here Out of 4.00"
                                    />
                                  </div>
                                </div>

                                <input
                                  type="submit"
                                  value="Make Result"
                                  className="btn btn-block bg-black text-white hover:bg-black"
                                />
                              </form>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </dialog>
                </>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MakingResultFor;
