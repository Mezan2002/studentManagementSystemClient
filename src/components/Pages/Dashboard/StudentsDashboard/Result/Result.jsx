import { Input, Option, Select } from "@material-tailwind/react";
import React, { useState } from "react";
import { useForm } from "react-hook-form";

const Result = () => {
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [isClassError, setIsClassError] = useState(false);
  const [selectedClass, setSelectedClass] = useState(null);

  const onSubmit = (data) => {
    console.log(data);
    if (isClassError === true) {
      return setIsClassError(true);
    }
  };

  const handleGetResult = () => {
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
          <div className="mt-24 flex items-center justify-center">
            <div className="card w-4/12 bg-white shadow-2xl">
              <div className="card-body">
                <div className="">
                  <h2 className="text-left font-semibold text-xl mb-5">
                    Get Your Exam Result
                  </h2>
                  <form
                    onSubmit={handleSubmit(onSubmit)}
                    className="flex flex-col gap-5"
                  >
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
                    {errors.rollNumber ? (
                      <>
                        <Input
                          size="lg"
                          label="Exam's Roll Number *"
                          {...register("rollNumber", { required: true })}
                          error
                        />
                      </>
                    ) : (
                      <Input
                        size="lg"
                        label="Exam's Roll Number *"
                        {...register("rollNumber", { required: true })}
                      />
                    )}
                    {errors.registrationNumber ? (
                      <>
                        <Input
                          size="lg"
                          label="Exam's Registration Number *"
                          {...register("registrationNumber", {
                            required: true,
                          })}
                          error
                        />
                      </>
                    ) : (
                      <Input
                        size="lg"
                        label="Exam's Registration Number *"
                        {...register("registrationNumber", { required: true })}
                      />
                    )}
                    <input
                      onClick={handleGetResult}
                      type="submit"
                      value="Get Result"
                      className="btn btn-block bg-black text-white hover:bg-black"
                    />
                  </form>
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
