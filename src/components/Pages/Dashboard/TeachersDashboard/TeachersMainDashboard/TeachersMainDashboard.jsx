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
                <div className="card shadow-2xl bg-white relative col-span-2">
                  <img
                    src="https://i.pinimg.com/originals/20/1f/be/201fbec525e6bf75a8dac7f67a404107.jpg"
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
                <div className="col-span-3">
                  <div className="card shadow-2xl bg-white">
                    <div className="card-body">
                      <h1 className="text-2xl mb-4 font-semibold">
                        My Classes
                      </h1>
                      <div>
                        <div className="overflow-x-auto">
                          <table className="table table-zebra">
                            {/* head */}
                            <thead>
                              <tr>
                                <th>Days</th>
                                <th>1st</th>
                                <th>2nd</th>
                                <th>3rd</th>
                                <th>4th</th>
                                <th>5th</th>
                                <th>6th</th>
                                <th>7th</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <th>Sat</th>
                                <td>Bangla 2nd</td>
                                <td>ICT</td>
                                <td>Math</td>
                                <td className="bg-green-100">English 1st</td>
                                <td>Bangla 1st</td>
                                <td>Religion</td>
                                <td>Science</td>
                              </tr>
                              <tr>
                                <th>Sun</th>
                                <td>ICT</td>
                                <td>Math</td>
                                <td>Religion</td>
                                <td className="bg-green-100">English 1st</td>
                                <td>Bangla 2nd</td>
                                <td>Science</td>
                                <td>Bangla 1st</td>
                              </tr>
                              <tr>
                                <th>Mon</th>
                                <td>Religion</td>
                                <td>Bangla 1st</td>
                                <td>ICT</td>
                                <td>Science</td>
                                <td>Math</td>
                                <td className="bg-green-100">English 1st</td>
                                <td>Bangla 2nd</td>
                              </tr>
                              <tr>
                                <th>Tue</th>
                                <td>Religion</td>
                                <td>Bangla 2nd</td>
                                <td>Science</td>
                                <td>ICT</td>
                                <td>Math</td>
                                <td className="bg-green-100">English 1st</td>
                                <td>Bangla 1st</td>
                              </tr>
                              <tr>
                                <th>Wed</th>
                                <td>Science</td>
                                <td className="bg-green-100">English 1st</td>
                                <td>Math</td>
                                <td>Religion</td>
                                <td>Bangla 2nd</td>
                                <td>Bangla 1st</td>
                                <td>ICT</td>
                              </tr>
                              <tr>
                                <th>Thu</th>
                                <td>Bangla 2nd</td>
                                <td>Science</td>
                                <td>Religion</td>
                                <td className="bg-green-100">English 1st</td>
                                <td>Bangla 1st</td>
                                <td>ICT</td>
                                <td>Math</td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
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
