import { Input, Option, Select } from "@material-tailwind/react";
import axios from "axios";
import React, { useState } from "react";

const MakeResultOf = ({
  /* register,
  handleSubmit,
  errors,
  onSubmit, */
  setExamName,
  setStudentToMakeResult,
  setStudentsRollNumber,
  setStudentsRegistrationNumber,
}) => {
  const [isClassError, setIsClassError] = useState(false);
  const [selectedClass, setSelectedClass] = useState(null);
  const [selectedStudent, setSelectedStudent] = useState("");
  const handleGetResult = async (event) => {
    event.preventDefault();
    const form = event.target;
    const section = form.section.value;
    const rollNumber = form.rollNumber.value;
    const registrationNumber = form.registrationNumber.value;

    const sectionUpperCase = section.toUpperCase();

    const formData = {
      selectedClass,
      sectionUpperCase,
      rollNumber,
      registrationNumber,
    };
    console.log(formData);
    try {
      const urlWithRollAndReg = `http://localhost:3000/get-students-for-making-result?studentRollNumber=${rollNumber}&studentRegistrationNumber=${registrationNumber}`;
      setStudentsRollNumber(rollNumber);
      setStudentsRegistrationNumber(registrationNumber);
      const firstApiResponse = await axios.get(urlWithRollAndReg);
      const userId = firstApiResponse.data.userId;

      setExamName(firstApiResponse.data.paymentFor);

      setSelectedStudent(userId);

      const urlWithUserId = `http://localhost:3000/get-student-by-userId/${userId}`;
      const secondApiResponse = await axios.get(urlWithUserId);
      const studentData = secondApiResponse.data;

      setStudentToMakeResult(studentData);

      if (isClassError === true) {
        setIsClassError(true);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleButtonClicked = () => {
    if (selectedClass === null) {
      setIsClassError(true);
    } else {
      setIsClassError(false);
    }
  };

  const handleChangeSelectedClass = (selectedClass) => {
    setSelectedClass(selectedClass);
  };
  return (
    <div>
      <div className="mt-32 flex items-center justify-center">
        <div className="card w-4/12 bg-white shadow-2xl">
          <div className="card-body">
            <div className="">
              <h2 className="text-left font-semibold text-xl mb-5">
                Making Result of
              </h2>
              <form onSubmit={handleGetResult} className="flex flex-col gap-5">
                {isClassError ? (
                  <Select
                    error
                    onChange={(selectedValue) => {
                      handleChangeSelectedClass(selectedValue);
                    }}
                    label="Select Your Class"
                    animate={{
                      mount: { y: 0 },
                      unmount: { y: 25 },
                    }}
                  >
                    <Option className="mb-2 text-xs" value="6">
                      6
                    </Option>
                    <Option className="mb-2 text-xs" value="7">
                      7
                    </Option>
                    <Option className="mb-2 text-xs" value="8">
                      8
                    </Option>
                    <Option className="mb-2 text-xs" value="9">
                      9
                    </Option>
                    <Option className="mb-2 text-xs" value="10">
                      10
                    </Option>
                  </Select>
                ) : (
                  <Select
                    onChange={(selectedValue) => {
                      handleChangeSelectedClass(selectedValue);
                    }}
                    label="Select Your Class"
                    animate={{
                      mount: { y: 0 },
                      unmount: { y: 25 },
                    }}
                  >
                    <Option className="mb-2 text-xs" value="6">
                      6
                    </Option>
                    <Option className="mb-2 text-xs" value="7">
                      7
                    </Option>
                    <Option className="mb-2 text-xs" value="8">
                      8
                    </Option>
                    <Option className="mb-2 text-xs" value="9">
                      9
                    </Option>
                    <Option className="mb-2 text-xs" value="10">
                      10
                    </Option>
                  </Select>
                )}
                <>
                  <Input required name="section" size="lg" label="Section" />
                </>

                <>
                  <Input
                    required
                    name="rollNumber"
                    size="lg"
                    label="Exam's Roll Number"
                  />
                </>

                <>
                  <Input
                    required
                    name="registrationNumber"
                    size="lg"
                    label="Exam's Registration Number"
                  />
                </>
                <input
                  onClick={handleButtonClicked}
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

export default MakeResultOf;
