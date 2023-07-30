import axios from "axios";
import { addDays, format, isSameMonth, startOfWeek } from "date-fns";
import React, { useEffect, useState } from "react";
import { customDateOnly } from "../../../../../utils/takingDateOnly";
import "./Attendence.css";

const Attendence = () => {
  const [isHideCalendar, setIsHideCalendar] = useState(false);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [data, setData] = useState([]);
  const handleDateChange = (date) => {
    setSelectedDate(date);
    setIsHideCalendar(true);
    console.log(customDateOnly(date));
  };

  const customSelectedDate = customDateOnly(selectedDate);
  const weekStart = startOfWeek(startOfWeek(selectedDate, { weekStartsOn: 1 }));
  const days = Array.from({ length: 42 }, (_, i) => addDays(weekStart, i));

  useEffect(() => {
    axios
      .get(
        `http://localhost:3000/get-attendence?dateOfAttendence=${customSelectedDate}`
      )
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [customSelectedDate]);
  console.log(data);
  return (
    <section
      style={{
        backgroundImage: "url(https://i.ibb.co/vsv28Xt/bg-banner.png)",
      }}
      className="col-span-10 min-h-screen"
    >
      <div className="p-20">
        {isHideCalendar === false ? (
          <div className="">
            <div>
              <div className="flex items-end justify-between">
                <h2 className="text-5xl font-bold">Attendence</h2>
                <h2 className="text-3xl font-bold">July 2023</h2>
              </div>
            </div>
            <div className="mt-10">
              <div className="calendar">
                <div className="weekdays">
                  <div>Sun</div>
                  <div>Mon</div>
                  <div>Tue</div>
                  <div>Wed</div>
                  <div>Thu</div>
                  <div>Fri</div>
                  <div>Sat</div>
                </div>
                <div className="dates">
                  {days.map((day) => (
                    <div
                      key={day.toDateString()}
                      className={`date-box${
                        isSameMonth(day, selectedDate) ? "" : " disabled"
                      }${
                        day.toDateString() === selectedDate.toDateString()
                          ? " selected"
                          : ""
                      }`}
                      onClick={() =>
                        isSameMonth(day, selectedDate) && handleDateChange(day)
                      }
                    >
                      <span>{format(day, "d")}</span>
                      {/* You can add event or other information for the day here */}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="">
            <div>
              <div className="flex items-end justify-between">
                <h2 className="text-5xl font-bold">Attendence of</h2>
                <h2 className="text-3xl font-bold">
                  {customDateOnly(selectedDate)}
                </h2>
              </div>
            </div>
            <div className="mt-10">
              {data._id ? (
                <div className="grid grid-cols-5 gap-5">
                  {data.students.map((student) => (
                    <>
                      {" "}
                      <div
                        className={`card cursor-pointer relative ${
                          student.isPresent ? "bg-green-100" : "bg-red-100"
                        } shadow-xl`}
                      >
                        <div className="h-10 w-10 bg-white rounded-full absolute top-2 right-2 flex items-center justify-center">
                          <p
                            className={`text-lg font-medium ${
                              student.isPresent
                                ? "text-green-500"
                                : "text-red-500"
                            }`}
                          >
                            {student.isPresent ? "P" : "A"}
                          </p>
                        </div>
                        <div className="px-5 py-8">
                          <div className="avatar flex items-center justify-center">
                            <div className="w-24 mask mask-squircle">
                              <img src={student.studentsInfo.studentsImage} />
                            </div>
                          </div>
                          <div className="">
                            <h2 className="text-xl font-semibold text-center">
                              {student.studentsInfo.studentNameInEnglish}{" "}
                            </h2>
                          </div>
                        </div>
                      </div>
                    </>
                  ))}
                </div>
              ) : (
                <div className="flex items-center justify-center min-h-[70vh]">
                  <h2 className="text-4xl font-medium text-red-300">
                    {data.message}
                  </h2>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Attendence;
