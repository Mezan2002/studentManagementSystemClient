import { Input, Option, Select } from "@material-tailwind/react";
import axios from "axios";
import { useState } from "react";

const SeeResults = () => {
  const [isClassError, setIsClassError] = useState(false);
  const [selectedClass, setSelectedClass] = useState(null);
  const [data, setData] = useState([]);
  const [section, setSection] = useState("");

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

  const handleGetResult = (event) => {
    event.preventDefault();
    const form = event.target;
    const section = form.section.value;
    const sectionUpperCase = section.toUpperCase();
    setSection(sectionUpperCase);
    axios
      .get(
        `https://super-ray-shrug.cyclic.cloud/get-results?resultOfClass=${selectedClass}&section=${sectionUpperCase}`
      )
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  console.log(data);

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
                  Result of Class {selectedClass} {section}
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
                                      Class: {item.studentOfClass}{" "}
                                      {item.section}
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
                        {isClassError ? (
                          <Select
                            required
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
                            required
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
                          <Input
                            required
                            name="section"
                            size="lg"
                            label="Section"
                          />
                        </>
                        <input
                          onClick={handleButtonClicked}
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
