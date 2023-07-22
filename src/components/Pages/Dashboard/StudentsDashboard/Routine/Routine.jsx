import React from "react";

const Routine = () => {
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
              <h2 className="text-5xl font-bold">Routine</h2>
              <img
                draggable="false"
                loading="lazy"
                src="https://i.ibb.co/gmgtqjm/setting.png"
                alt=""
                className="w-10"
              />
            </div>
          </div>
          <div className="mt-24">
            <div className="card shadow-2xl bg-white">
              <div className="card-body">
                <h1 className="text-2xl mb-4 font-semibold">Class Routine</h1>
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
                <div>
                  <button className="btn btn-block mt-10 bg-black text-white hover:bg-black">
                    Download Routine
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Routine;
