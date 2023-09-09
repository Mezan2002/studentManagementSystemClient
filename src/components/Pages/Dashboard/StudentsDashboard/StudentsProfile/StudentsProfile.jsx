import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const StudentsProfile = () => {
  const [studentsAddress, setStudentsAddress] = useState({});
  const user = useSelector((state) => state.loggedInUser.loggedInUser);
  console.log(user);

  useEffect(() => {
    if (
      user?.address?.permanentAddress &&
      user?.address?.presentAddress !== null
    ) {
      setStudentsAddress(user?.address?.presentAddress);
    } else {
      setStudentsAddress(user.address.presentAndPermanentAddress);
    }
  }, [
    user.address?.permanentAddress,
    user.address?.presentAddress,
    user?.address?.presentAndPermanentAddress,
  ]);
  const studentsName = user?.studentsInfo?.studentNameInEnglish;
  const studentsImage = user?.studentsInfo?.studentsImage;
  const studentsClass = user?.studentsInfo?.class;
  const studentsSection = user?.studentsInfo?.section;
  const studentsPhoneNumber = user?.studentsInfo?.studentsMobileNumber;
  const studentsEmail = user?.studentsInfo?.studentsEmail;
  const studentsBloodGroup = user?.studentsInfo?.bloodGroup;
  const studentsGender = user?.studentsInfo?.gender;
  const studentsDateOfBirth = user?.studentsInfo?.studentsDateOfBirth;
  return (
    <section
      style={{
        backgroundImage: "url(https://i.ibb.co/vsv28Xt/bg-banner.png)",
      }}
      className="col-span-10 min-h-screen"
    >
      <div className="p-16">
        <div className="">
          <div>
            <div className="flex items-start justify-between">
              <h2 className="text-5xl font-bold">My Profile</h2>
              <img
                draggable="false"
                loading="lazy"
                src="https://i.ibb.co/gmgtqjm/setting.png"
                alt=""
                className="w-10"
              />
            </div>
          </div>
          <div className="mt-16">
            <div className="card shadow-2xl bg-white relative w-1/2 mx-auto">
              <img
                src="https://i.ibb.co/zmc55zF/pexels-pixabay-261909.jpg"
                alt=""
                className="rounded-t-2xl max-h-[240px] object-cover object-center"
              />
              <div className="card-body">
                <div className="">
                  <div className="avatar">
                    <div className="w-28 absolute top-[-100px] left-0 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                      <img src={studentsImage} className="object-cover" />
                    </div>
                  </div>
                  <h2 className="font-semibold text-left text-3xl mt-5">
                    {studentsName}
                  </h2>
                  <p>
                    {user?.userType} / {studentsClass}
                  </p>
                </div>
                <div className="mt-10">
                  <h2 className="text-xl font-semibold mb-5 text-left">
                    Students Info
                  </h2>
                  <p className="text-base font-medium flex items-center justify-between">
                    Name : <span>{studentsName}</span>
                  </p>
                  <p className="text-base font-medium flex items-center justify-between">
                    Date of Birth : <span>{studentsDateOfBirth}</span>
                  </p>

                  <p className="text-base font-medium flex items-center justify-between">
                    Class :{" "}
                    <span>
                      {studentsClass} / {studentsSection}
                    </span>
                  </p>
                  <p className="text-base font-medium flex items-center justify-between">
                    Phone Number : <span>{studentsPhoneNumber}</span>
                  </p>
                  <p className="text-base font-medium flex items-center justify-between">
                    Email : <span>{studentsEmail}</span>
                  </p>
                  <p className="text-base font-medium flex items-center justify-between">
                    Gender : <span>{studentsGender}</span>
                  </p>
                  <p className="text-base font-medium flex items-center justify-between">
                    Blood Group : <span>{studentsBloodGroup}</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StudentsProfile;
