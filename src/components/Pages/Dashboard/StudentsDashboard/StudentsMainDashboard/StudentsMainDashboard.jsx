import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const StudentsMainDashboard = () => {
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
  const studentsPhoneNumber = user?.studentsInfo?.studentsMobileNumber;
  const studentsEmail = user?.studentsInfo?.studentsEmail;
  const studentsBloodGroup = user?.studentsInfo?.bloodGroup;
  const studentsGender = user?.studentsInfo?.gender;
  const studentsDateOfBirth = user?.studentsInfo?.studentsDateOfBirth;

  console.log(studentsAddress);
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
          </div>
          <div className="mt-16">
            <div className="grid grid-cols-3 gap-10">
              <div className="card bg-white relative">
                <img
                  src="https://i.pinimg.com/originals/20/1f/be/201fbec525e6bf75a8dac7f67a404107.jpg"
                  alt=""
                  className="rounded-t-2xl"
                />
                <div className="card-body">
                  <div className="flex flex-col items-center justify-center">
                    <div className="avatar">
                      <div className="w-28 absolute top-[-100px] left-[-60px] rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                        <img src={studentsImage} className="object-cover" />
                      </div>
                    </div>
                    <h2 className="font-semibold text-3xl mt-5">
                      {studentsName}
                    </h2>
                    <p>
                      {user?.userType} / Class : {studentsClass}
                    </p>
                  </div>
                  <div className="mt-10">
                    <h2 className="text-2xl font-bold mb-5">Students Info</h2>
                    <p className="text-base font-medium flex items-center justify-between">
                      Name : <span>{studentsName}</span>
                    </p>
                    <p className="text-base font-medium flex items-center justify-between">
                      Date of Birth : <span>{studentsDateOfBirth}</span>
                    </p>

                    <p className="text-base font-medium flex items-center justify-between">
                      Class : <span>{studentsClass}</span>
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
              <div className="col-span-2">
                <div className="card bg-white">
                  <div className="card-body">
                    <h1 className="text-2xl font-semibold">Class Routine</h1>
                    <div>
                      <div className="overflow-x-auto">
                        <table className="table table-zebra text-[18px]">
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
                              <td>English 1st</td>
                              <td>Bangla 1st</td>
                              <td>Religion</td>
                              <td>Science</td>
                            </tr>
                            <tr>
                              <th>Sun</th>
                              <td>ICT</td>
                              <td>Math</td>
                              <td>Religion</td>
                              <td>English 1st</td>
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
                              <td>English 1st</td>
                              <td>Bangla 2nd</td>
                            </tr>
                            <tr>
                              <th>Tue</th>
                              <td>Religion</td>
                              <td>Bangla 2nd</td>
                              <td>Science</td>
                              <td>ICT</td>
                              <td>Math</td>
                              <td>English 1st</td>
                              <td>Bangla 1st</td>
                            </tr>
                            <tr>
                              <th>Wed</th>
                              <td>Science</td>
                              <td>English 1st</td>
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
                              <td>English 1st</td>
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
    </section>
  );
};

export default StudentsMainDashboard;
