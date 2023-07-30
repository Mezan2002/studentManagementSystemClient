import { Input } from "@material-tailwind/react";
import axios from "axios";
import React from "react";
import { useSelector } from "react-redux";
import Swal from "sweetalert2";

const MakingResultFor = ({
  register,
  errors,
  onSubmit,
  examName,
  studentToMakeResult,
  studentsRollNumber,
  studentsRegistrationNumber,
}) => {
  const studnetsName = studentToMakeResult.studentsInfo.studentNameInEnglish;
  const user = useSelector((state) => state.loggedInUser.loggedInUser);
  const teachersName = user?.teachersInfo?.teachersNameInEnglish;
  const teachersDesignation = user?.teachersInfo?.teachersDesignaion;
  const teachersTakingClass = user?.teachersInfo?.teachersTakingClass;
  const teachersId = user?._id;

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const studnetsName = form.studnetsName.value;
    const examName = form.examName.value;
    const studentsRollNumber = form.studentsRollNumber.value;
    const studentsRegistrationNumber = form.studentsRegistrationNumber.value;
    const banglaMCQ = form.banglaMCQ.value;
    const banglaWritten = form.banglaWritten.value;
    const englishMCQ = form.englishMCQ.value;
    const englishWritten = form.englishWritten.value;
    const mathsMCQ = form.mathsMCQ.value;
    const mathsWritten = form.mathsWritten.value;

    const formData = {
      studnetsName,
      examName,
      studentsRollNumber,
      studentsRegistrationNumber,
      resultMakedBy: {
        teachersName,
        teachersId,
        teachersDesignation,
        teachersTakingClass,
      },
      marksOfSubject: {
        bangla: {
          banglaMCQ,
          banglaWritten,
        },
        english: {
          englishMCQ,
          englishWritten,
        },
        maths: {
          mathsMCQ,
          mathsWritten,
        },
      },
    };

    axios
      .post("http://localhost:3000/make-result", JSON.stringify(formData), {
        headers: {
          "content-type": "application/json",
        },
      })
      .then((res) => {
        if (res.data.acknowledged) {
          Swal.fire("Result Maked", "", "success");
        }
      })
      .catch((err) => {
        Swal.fire("Something Went Wrong!", "Try Again!", "error");
        console.log(err);
      });
  };

  return (
    <div>
      <div className="mt-14 flex items-center justify-center">
        <div className="card w-5/12 bg-white shadow-2xl">
          <div className="card-body">
            <div className="">
              <h2 className="text-left font-semibold text-xl mb-5">
                Making Result of
              </h2>
              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                <div className="grid grid-cols-2 gap-5">
                  <div className="form-control">
                    <label className="label">
                      <span className="font-bold text-xs">Students Name *</span>
                    </label>
                    <Input
                      name="studnetsName"
                      defaultValue={studnetsName}
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
                      defaultValue={examName}
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
                      defaultValue={studentsRollNumber}
                      disabled
                      readOnly
                      size="lg"
                    />
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="font-bold text-xs">
                        Students Registration Number *
                      </span>
                    </label>
                    <Input
                      name="studentsRegistrationNumber"
                      defaultValue={studentsRegistrationNumber}
                      disabled
                      readOnly
                      size="lg"
                    />
                  </div>
                </div>
                <div className="form-control ">
                  <label className="label">
                    <span className="font-bold text-xs">Marks Of Bangla *</span>
                  </label>
                  <div className="grid grid-cols-2 gap-5">
                    <Input
                      name="banglaMCQ"
                      required
                      size="lg"
                      label="MCQ Parts Marks"
                    />
                    <Input
                      name="banglaWritten"
                      required
                      size="lg"
                      label="Written Parts Marks"
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
                      name="englishMCQ"
                      required
                      size="lg"
                      label="MCQ Parts Marks"
                    />
                    <Input
                      name="englishWritten"
                      required
                      size="lg"
                      label="Written Parts Marks"
                    />
                  </div>
                </div>
                <div className="form-control ">
                  <label className="label">
                    <span className="font-bold text-xs">Marks Of Maths *</span>
                  </label>
                  <div className="grid grid-cols-2 gap-5">
                    <Input
                      name="mathsMCQ"
                      required
                      size="lg"
                      label="MCQ Parts Marks"
                    />
                    <Input
                      name="mathsWritten"
                      required
                      size="lg"
                      label="Written Parts Marks"
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
  );
};

export default MakingResultFor;
