import React from "react";

const FormTop = ({ selectedImage, register, handleImageChange }) => {
  return (
    <div>
      <div className="flex items-center justify-between">
        <div className="mb-10 flex items-start w-10/12">
          <img
            src="https://i.ibb.co/NLx196P/download-removebg-preview.png"
            alt="deuty high school and college logo"
            className="w-32 mb-3"
          />
          <div className="ml-3">
            <h2 className="text-3xl font-bold">
              Deuty High School and College
            </h2>
            <h2 className="text-lg font-medium">
              Phone Number : +8801234567891 | EIIN Number : 127777
            </h2>
            <h2 className="text-lg font-medium">
              Website : www.deuty-high-school-and-college.com
            </h2>
            <h2 className="text-lg font-medium">
              Location : Rangpur to Pirgachha Road, Deuty Bazar
            </h2>
          </div>
        </div>
        <div className="w-[20%] -mt-7 border border-gray-300 h-40 mx-auto my-3 overflow-hidden rounded-xl">
          {selectedImage === null ? (
            <>
              {" "}
              <label
                htmlFor="selectProfilePicture"
                className="flex items-center justify-center h-full flex-col-reverse cursor-pointer"
              >
                <h2 className="text-center mt-4 text-sm capitalize">
                  Student's Photo
                </h2>
                <figure>
                  <img
                    loading="lazy"
                    draggable={false}
                    src="https://i.ibb.co/txqTdTx/image.png"
                    alt=""
                    className="w-7"
                  />
                </figure>
              </label>
              <input
                {...register("selectedImage", { required: true })}
                onChange={handleImageChange}
                type="file"
                id="selectProfilePicture"
                className="hidden invisible"
              />
            </>
          ) : (
            <img
              loading="lazy"
              draggable={false}
              src={selectedImage}
              alt=""
              className="imageDiv h-full w-full object-cover"
            />
          )}
        </div>
      </div>
      <h2 className="text-xl font-semibold py-2 px-4 rounded-xl uppercase bg-[#2196F3] text-white text-center w-1/2 mx-auto">
        {" "}
        Students Registeration Form
      </h2>
    </div>
  );
};

export default FormTop;
