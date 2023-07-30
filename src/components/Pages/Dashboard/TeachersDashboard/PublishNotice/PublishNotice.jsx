import { Input, Option, Select, Textarea } from "@material-tailwind/react";
import axios from "axios";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import Swal from "sweetalert2";

const PublishNotice = () => {
  const user = useSelector((state) => state.loggedInUser.loggedInUser);
  console.log(user);
  const teachersName = user?.teachersInfo?.teachersNameInEnglish;
  const teachersDesignation = user?.teachersInfo?.teachersDesignaion;
  const teachersTakingClass = user?.teachersInfo?.teachersTakingClass;
  const teachersId = user?._id;
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [isClassError, setIsClassError] = useState(false);
  const [selectedClass, setSelectedClass] = useState(null);
  const handleChangeSelectedClass = (selectedClass) => {
    setSelectedClass(selectedClass);
  };
  const onSubmit = (data) => {
    const noticeData = {
      teachersName,
      teachersDesignation,
      teachersTakingClass,
      teachersId,
      noticeFor: selectedClass,
      titleOfNotice: data.titleOfNotice,
      notice: data.notice,
    };
    console.log(noticeData);

    axios
      .post(
        "https://super-ray-shrug.cyclic.cloud/make-notice",
        JSON.stringify(noticeData),
        {
          headers: {
            "content-type": "application/json",
          },
        }
      )
      .then((res) => {
        if (res.data.acknowledged) {
          Swal.fire("Notice Published", "", "success");
        }
      })
      .catch((err) => {
        Swal.fire(
          "Notice Not Published!",
          "Something went wrong , Try again!",
          "error"
        );
        console.log(err);
      });
  };

  const handlePublishNotice = () => {
    if (selectedClass === null) {
      setIsClassError(true);
    } else {
      setIsClassError(false);
    }
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
              <h2 className="text-5xl font-bold">Publish Notice</h2>
              <img
                draggable="false"
                loading="lazy"
                src="https://i.ibb.co/gmgtqjm/setting.png"
                alt=""
                className="w-10"
              />
            </div>
          </div>
          <div className="mt-9 flex flex-col items-start justify-start">
            <h2 className="text-left font-semibold text-xl mb-5">
              Publish a Notice
            </h2>
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="w-full flex items-center flex-col gap-6"
            >
              {isClassError ? (
                <Select
                  error
                  onChange={(selectedValue) => {
                    handleChangeSelectedClass(selectedValue);
                  }}
                  label="Notice For"
                  animate={{
                    mount: { y: 0 },
                    unmount: { y: 25 },
                  }}
                >
                  <Option className="mb-2 text-xs" value="All">
                    All
                  </Option>
                  <Option className="mb-2 text-xs" value="Class 6">
                    Class 6
                  </Option>
                  <Option className="mb-2 text-xs" value="Class 7">
                    Class 7
                  </Option>
                  <Option className="mb-2 text-xs" value="Class 8">
                    Class 8
                  </Option>
                  <Option className="mb-2 text-xs" value="Class 9">
                    Class 9
                  </Option>
                  <Option className="mb-2 text-xs" value="Class 10">
                    Class 10
                  </Option>
                </Select>
              ) : (
                <Select
                  onChange={(selectedValue) => {
                    handleChangeSelectedClass(selectedValue);
                  }}
                  label="Notice For"
                  animate={{
                    mount: { y: 0 },
                    unmount: { y: 25 },
                  }}
                >
                  <Option className="mb-2 text-xs" value="All">
                    All
                  </Option>
                  <Option className="mb-2 text-xs" value="Class 6">
                    Class 6
                  </Option>
                  <Option className="mb-2 text-xs" value="Class 7">
                    Class 7
                  </Option>
                  <Option className="mb-2 text-xs" value="Class 8">
                    Class 8
                  </Option>
                  <Option className="mb-2 text-xs" value="Class 9">
                    Class 9
                  </Option>
                  <Option className="mb-2 text-xs" value="Class 10">
                    Class 10
                  </Option>
                </Select>
              )}
              {errors.titleOfNotice ? (
                <>
                  <Input
                    size="md"
                    label="Title of Notice *"
                    {...register("titleOfNotice", { required: true })}
                    error
                  />
                </>
              ) : (
                <Input
                  size="md"
                  label="Title of Notice *"
                  {...register("titleOfNotice", { required: true })}
                />
              )}
              {errors.notice ? (
                <Textarea
                  error
                  {...register("notice", { required: true })}
                  label="Put your notice here"
                  rows={20}
                />
              ) : (
                <Textarea
                  {...register("notice", { required: true })}
                  label="Put your notice here"
                  rows={20}
                />
              )}
              <input
                type="submit"
                onClick={handlePublishNotice}
                value="Publish your Notice"
                className="btn btn-block bg-black text-white hover:bg-black"
              />
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PublishNotice;
