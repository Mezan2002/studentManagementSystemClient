import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const TeachersMainDashboard = () => {
  const [teachersAddress, setTeachersAddress] = useState({});
  const user = useSelector((state) => state.loggedInUser.loggedInUser);
  console.log(user);
  useEffect(() => {
    if (
      user?.address?.permanentAddress &&
      user?.address?.presentAddress !== null
    ) {
      setTeachersAddress(user?.address?.presentAddress);
    } else {
      setTeachersAddress(user.address.presentAndPermanentAddress);
    }
  }, [
    user.address?.permanentAddress,
    user.address?.presentAddress,
    user?.address?.presentAndPermanentAddress,
  ]);
  console.log(teachersAddress);
  const teachersName = user?.teachersInfo?.teachersNameInEnglish;
  const teachersImage = user?.teachersInfo?.teachersImage;
  const teachersDesignaion = user?.teachersInfo?.teachersDesignaion;
  const teachersTakingClass = user?.teachersInfo?.teachersTakingClass;
  const teachersPhoneNumber = user?.teachersInfo?.teachersMobileNumber;
  const teachersEmail = user?.teachersInfo?.teachersEmail;
  const teachersBloodGroup = user?.teachersInfo?.bloodGroup;
  const teachersGender = user?.teachersInfo?.gender;
  const teachersDateOfBirth = user?.teachersInfo?.teachersDateOfBirth;
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
              <h2 className="text-5xl font-bold">Dashboard</h2>
              <img
                draggable="false"
                loading="lazy"
                src="https://i.ibb.co/gmgtqjm/setting.png"
                alt=""
                className="w-10"
              />
            </div>
            <div className="mt-16">
              <div className="grid grid-cols-5 gap-10">
                <div className="card shadow-2xl bg-white relative col-span-3">
                  <img
                    src="https://i.ibb.co/DK1TNdJ/pexels-max-fischer-5212360.jpg"
                    alt=""
                    className="rounded-t-2xl"
                  />
                  <div className="card-body">
                    <div className="flex flex-col items-center justify-center">
                      <div className="avatar">
                        <div className="w-28 absolute top-[-100px] left-[-60px] rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                          <img src={teachersImage} className="object-cover" />
                        </div>
                      </div>
                      <h2 className="font-semibold text-3xl mt-5">
                        {teachersName}
                      </h2>
                      <p>{teachersDesignaion}</p>
                    </div>
                    <div className="mt-10">
                      <h2 className="text-xl font-semibold mb-5 text-left">
                        Teachers Info
                      </h2>
                      <p className="text-base font-medium flex items-center justify-between">
                        Name : <span>{teachersName}</span>
                      </p>
                      <p className="text-base font-medium flex items-center justify-between">
                        Date of Birth : <span>{teachersDateOfBirth}</span>
                      </p>

                      <p className="text-base font-medium flex items-center justify-between">
                        Designation :{" "}
                        <span>
                          {teachersDesignaion} / {teachersTakingClass}
                        </span>
                      </p>
                      <p className="text-base font-medium flex items-center justify-between">
                        Phone Number : <span>{teachersPhoneNumber}</span>
                      </p>
                      <p className="text-base font-medium flex items-center justify-between">
                        Email : <span>{teachersEmail}</span>
                      </p>
                      <p className="text-base font-medium flex items-center justify-between">
                        Gender : <span>{teachersGender}</span>
                      </p>
                      <p className="text-base font-medium flex items-center justify-between">
                        Blood Group : <span>{teachersBloodGroup}</span>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-span-2">
                  <div className="card shadow-2xl bg-green-50">
                    <div className="card-body">
                      <h1 className="text-2xl mb-4 font-semibold">Analytics</h1>
                      <div className="flex gap-6 mt-4 items-start justify-around">
                        <div>
                          <div
                            className="radial-progress"
                            style={{
                              "--value": "80",
                              "--size": "10rem",
                              "--thickness": "1rem",
                            }}
                          >
                            80%
                          </div>
                          <div>
                            <h3 className="text-center mt-5 text-xl font-medium">
                              Performence
                            </h3>
                          </div>
                        </div>
                        <div>
                          <div
                            className="radial-progress"
                            style={{
                              "--value": "80",
                              "--size": "10rem",
                              "--thickness": "1rem",
                            }}
                          >
                            80%
                          </div>
                          <div>
                            <h3 className="text-center mt-5 text-xl font-medium">
                              Attendence
                            </h3>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-col items-center justify-center mt-2 mb-4">
                        <div
                          className="radial-progress"
                          style={{
                            "--value": "80",
                            "--size": "10rem",
                            "--thickness": "1rem",
                          }}
                        >
                          80%
                        </div>
                        <div>
                          <h3 className="text-center mt-5 text-xl font-medium">
                            Expertise
                          </h3>
                        </div>
                      </div>
                      <div className="">
                        <h2 className="text-3xl font-semibold flex items-center justify-between w-full">
                          Average <span>80%</span>{" "}
                        </h2>
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

export default TeachersMainDashboard;
