import { Input, Option, Select } from "@material-tailwind/react";
import axios from "axios";
import React, { useState } from "react";
import { useSelector } from "react-redux";

const MakeResultOf = ({
  selectedClass,
  setSection,
  section,
  session,
  setSession,
  setStudentOfMakingResult,
}) => {
  const user = useSelector((state) => state.loggedInUser.loggedInUser);
  const [isClassError, setIsClassError] = useState(false);
  const handleGetResult = async (event) => {
    event.preventDefault();
    try {
      if (isClassError === true) {
        setIsClassError(true);
      }
    } catch (error) {
      console.log(error);
    }
    axios
      .get(
        `http://localhost:5001/get-students-by-semister?semister=${section}&session=${session}`
      )
      .then((res) => {
        setStudentOfMakingResult(res.data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  const handleChangeSelectedClass = (selectedValue) => {
    setSection(selectedValue.toUpperCase());
  };
  const handleChangeSelectedSession = (selectedValue) => {
    setSession(selectedValue);
  };

  const handleButtonClicked = () => {
    if (selectedClass === null) {
      setIsClassError(true);
    } else {
      setIsClassError(false);
    }
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
                <>
                  <Input
                    size="lg"
                    label="Department"
                    disabled
                    defaultValue={user?.teachersInfo?.teachersTakingClass}
                  />
                </>
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
                {isClassError ? (
                  <Select
                    error
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
                ) : (
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
                )}
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
