import { Input, Option, Select } from "@material-tailwind/react";
import axios from "axios";
import { useState } from "react";
import { useSelector } from "react-redux";

const SeeResults = () => {
  const user = useSelector((state) => state.loggedInUser.loggedInUser);
  const [isClassError, setIsClassError] = useState(false);
  // const [selectedClass, setSelectedClass] = useState(null);
  const [data, setData] = useState([]);
  const [section, setSection] = useState("");

  const handleChangeSelectedClass = (selectedClass) => {
    setSection(selectedClass.toUpperCase());
  };

  const handleGetResult = (event) => {
    event.preventDefault();

    console.log(
      `https://atg-server-tau.vercel.app/get-results?resultOfClass=${user?.teachersInfo?.teachersTakingClass}&section=${section}`
    );
    axios
      .get(
        `https://atg-server-tau.vercel.app/get-results?resultOfClass=${user?.teachersInfo?.teachersTakingClass}&section=${section}`
      )
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
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
                            <th>Name</th>
                            <th>Roll Number</th>
                            <th>Registration Number</th>
                            <th>Grade</th>
                            <th>Point</th>
                            <th></th>
                          </tr>
                        </thead>
                        <tbody>
                          {data.map((item) => (
                            <tr key={item._id}>
                              <th></th>
                              <td>
                                <div className="flex items-center space-x-3">
                                  <div className="avatar">
                                    <div className="mask mask-squircle w-12 h-12">
                                      <img
                                        src={item.studentsImage}
                                        alt="Avatar Tailwind CSS Component"
                                      />
                                    </div>
                                  </div>
                                  <div>
                                    <div className="font-bold">
                                      {item.studnetsName}
                                    </div>
                                    <span className="bg-gray-300 p-1 text-xs rounded-lg">
                                      Department: {item.studentOfClass} /
                                      {item.section} semister
                                    </span>
                                    <div className="text-sm opacity-50"></div>
                                  </div>
                                </div>
                              </td>
                              <td>{item.studentsRollNumber}</td>
                              <td>{item.studentsRegistrationNumber}</td>
                              <td>A+</td>
                              <td>5.00</td>
                              <th>
                                <button className="btn btn-primary btn-xs">
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
                            // name="section"
                            size="lg"
                            defaultValue={
                              user?.teachersInfo?.teachersTakingClass
                            }
                            label="Section"
                          />
                        </>
                        {isClassError ? (
                          <Select
                            required
                            error
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
                        ) : (
                          <Select
                            required
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
                        )}
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
    </section>
  );
};

export default SeeResults;
