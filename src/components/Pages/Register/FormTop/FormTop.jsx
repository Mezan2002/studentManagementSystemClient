import React from "react";

const FormTop = ({
  selectedImage,
  register,
  handleImageChange,
  errors,
  isStudent,
}) => {
  return (
    <div>
      <div className="flex items-center justify-between">
        <div className="mb-10 flex items-start w-10/12">
          <img
            draggable="false"
            loading="lazy"
            src="https://aiict.edu.bd/wp-content/uploads/2022/09/aiict-logo-1-2.png"
            alt="AIICT's logo"
            className="w-32 mb-3"
          />
          <div className="ml-3">
            <h2 className="text-xl font-bold">
              AHSANULLAH INSTITUTE OF INFORMATION & COMMUNICATION TECHNOLOGY
            </h2>
            <h2 className="text-sm font-medium">
              Phone Number : +8801787658138
            </h2>
            <h2 className="text-sm font-medium">
              Website : https://aiict.edu.bd/
            </h2>
            <h2 className="text-xs font-medium">
              Location : House # B-91, Road # E-2. Eastern Housing, Pallabi,
              Mirpur, Dhaka-1216.
            </h2>
          </div>
        </div>
        <div
          className={`w-[20%] -mt-7 border ${
            errors.uploadedPhoto ? "border-red-300" : "border-gray-300"
          } h-40 mx-auto my-3 overflow-hidden rounded-xl`}
        >
          {selectedImage === null ? (
            <>
              {" "}
              <label
                htmlFor={`${isStudent ? "studentsPhoto" : "teachersPhoto"}`}
                className="flex items-center justify-center h-full flex-col-reverse cursor-pointer"
              >
                <h2
                  className={`text-center mt-4 text-sm ${
                    errors.uploadedPhoto ? "text-red-500 text-xs" : "text-black"
                  }`}
                >
                  {errors.uploadedPhoto
                    ? "Please Upload a Photo"
                    : isStudent
                    ? "Student's Photo"
                    : "Teacher's Photo"}
                </h2>
                <figure>
                  <img
                    draggable="false"
                    loading="lazy"
                    src={` ${
                      errors.uploadedPhoto
                        ? "https://i.ibb.co/4W5WZ2x/image-1.png"
                        : "https://i.ibb.co/txqTdTx/image.png"
                    }`}
                    alt=""
                    className="w-7"
                  />
                </figure>
              </label>
              {errors.uploadedPhoto && (
                <span className="text-red-500">
                  Profile Picture is required
                </span>
              )}
              <input
                {...register("uploadedPhoto", { required: true })}
                onChange={handleImageChange}
                type="file"
                id={`${isStudent ? "studentsPhoto" : "teachersPhoto"}`}
                className="hidden invisible"
              />
            </>
          ) : (
            <img
              draggable="false"
              loading="lazy"
              src={selectedImage}
              alt=""
              className="imageDiv h-full w-full object-cover"
            />
          )}
        </div>
      </div>
      <h2 className="text-xl font-semibold py-2 px-4 rounded-xl uppercase bg-[#2196F3] text-white text-center w-1/2 mx-auto">
        {" "}
        {isStudent
          ? "Students Registeration Form"
          : "Teachers Registeration Form"}
      </h2>
    </div>
  );
};

export default FormTop;
