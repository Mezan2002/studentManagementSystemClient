import { Input } from "@material-tailwind/react";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const Result = () => {
  const user = useSelector((state) => state.loggedInUser.loggedInUser);
  const studentId = user._id;
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get(
        `https://super-ray-shrug.cyclic.cloud/get-single-result/${studentId}`
      )
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [studentId]);

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
              <h2 className="text-5xl font-bold">See Result</h2>
              <img
                draggable="false"
                loading="lazy"
                src="https://i.ibb.co/gmgtqjm/setting.png"
                alt=""
                className="w-10"
              />
            </div>
          </div>
          <div className="w-full flex items-center justify-center">
            <div>
              <div className="mt-5 flex w-full items-center justify-center">
                <div className="card bg-white shadow-2xl">
                  <div className="card-body">
                    <div className="">
                      <h2 className="text-left font-semibold text-xl mb-5">
                        Result of {}
                      </h2>
                      <div className="flex flex-col gap-5">
                        <div className="grid grid-cols-2 gap-5">
                          <div className="form-control">
                            <label className="label">
                              <span className="font-bold text-xs">
                                Students Name *
                              </span>
                            </label>
                            <Input
                              name="studnetsName"
                              defaultValue={data?.studnetsName}
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
                              defaultValue={data?.examName}
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
                              defaultValue={data?.studentsRollNumber}
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
                              defaultValue={data?.studentsRegistrationNumber}
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
                                Student of Class *
                              </span>
                            </label>
                            <Input
                              defaultValue={data?.studentOfClass}
                              disabled
                              readOnly
                              size="lg"
                            />
                          </div>
                          <div className="form-control">
                            <label className="label">
                              <span className="font-bold text-xs">
                                Students of Section *
                              </span>
                            </label>
                            <Input
                              defaultValue={data?.section}
                              disabled
                              readOnly
                              size="lg"
                            />
                          </div>
                        </div>
                        <div className="form-control ">
                          <label className="label">
                            <span className="font-bold text-xs">
                              Marks Of Bangla *
                            </span>
                          </label>
                          <div className="grid grid-cols-2 gap-5">
                            <Input
                              name="banglaMCQ"
                              defaultValue={
                                data?.marksOfSubject?.bangla?.banglaMCQ
                              }
                              disabled
                              readOnly
                              size="lg"
                              label="MCQ Parts Marks"
                            />
                            <Input
                              name="banglaWritten"
                              defaultValue={
                                data?.marksOfSubject?.bangla?.banglaWritten
                              }
                              disabled
                              readOnly
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
                              defaultValue={
                                data?.marksOfSubject?.english?.englishMCQ
                              }
                              disabled
                              readOnly
                              size="lg"
                              label="MCQ Parts Marks"
                            />
                            <Input
                              name="englishWritten"
                              defaultValue={
                                data?.marksOfSubject?.english?.englishWritten
                              }
                              disabled
                              readOnly
                              size="lg"
                              label="Written Parts Marks"
                            />
                          </div>
                        </div>
                        <div className="form-control ">
                          <label className="label">
                            <span className="font-bold text-xs">
                              Marks Of Maths *
                            </span>
                          </label>
                          <div className="grid grid-cols-2 gap-5">
                            <Input
                              name="mathsMCQ"
                              defaultValue={
                                data?.marksOfSubject?.maths?.mathsMCQ
                              }
                              disabled
                              readOnly
                              size="lg"
                              label="MCQ Parts Marks"
                            />
                            <Input
                              name="mathsWritten"
                              defaultValue={
                                data?.marksOfSubject?.maths?.mathsWritten
                              }
                              disabled
                              readOnly
                              size="lg"
                              label="Written Parts Marks"
                            />
                          </div>
                        </div>
                        <input
                          value="Download Result"
                          className="btn btn-block bg-black text-white hover:bg-black"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Result;
