import { Input, Option, Select } from "@material-tailwind/react";
import axios from "axios";
import React, { useState } from "react";
import { useSelector } from "react-redux";

const MakeResultOf = ({
  section,
  selectedClass,
  setSection,
  setExamName,
  setStudentToMakeResult,
  setStudentsRollNumber,
  setStudentsRegistrationNumber,
}) => {
  const user = useSelector((state) => state.loggedInUser.loggedInUser);
  const [isClassError, setIsClassError] = useState(false);
  const [selectedStudent, setSelectedStudent] = useState("");
  const handleGetResult = async (event) => {
    event.preventDefault();
    const form = event.target;
    const rollNumber = form.rollNumber.value;
    const registrationNumber = form.registrationNumber.value;

    try {
      const urlWithRollAndReg = `https://atg-server-tau.vercel.app/get-students-for-making-result?studentRollNumber=${rollNumber}&studentRegistrationNumber=${registrationNumber}`;
      setStudentsRollNumber(rollNumber);
      setStudentsRegistrationNumber(registrationNumber);
      // setSection(sectionUpperCase);
      const firstApiResponse = await axios.get(urlWithRollAndReg);
      console.log(firstApiResponse);
      const userId = firstApiResponse.data.userId;
      setExamName(firstApiResponse.data.paymentFor);
      setSelectedStudent(userId);

      const urlWithUserId = `https://atg-server-tau.vercel.app/get-student-by-userId/${userId}`;
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

  const handleChangeSelectedClass = (selectedValue) => {
    // const sectionUpperCase = section.toUpperCase();
    setSection(selectedValue.toUpperCase());
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
                    label="Select Semister"
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
                ) : (
                  <Select
                    onChange={(selectedValue) => {
                      handleChangeSelectedClass(selectedValue);
                    }}
                    label="Select Semister"
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
                )}

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
