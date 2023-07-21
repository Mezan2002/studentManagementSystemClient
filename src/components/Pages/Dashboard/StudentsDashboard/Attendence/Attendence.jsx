import { addDays, format, isSameMonth, startOfWeek } from "date-fns";
import React, { useState } from "react";
import { customDateOnly } from "../../../../../utils/takingDateOnly";
import "./Attendence.css";

const Attendence = () => {
  const [isHideCalendar, setIsHideCalendar] = useState(false);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const handleDateChange = (date) => {
    setSelectedDate(date);
    setIsHideCalendar(true);
    console.log(customDateOnly(date));
  };
  const weekStart = startOfWeek(startOfWeek(selectedDate, { weekStartsOn: 1 }));
  const days = Array.from({ length: 42 }, (_, i) => addDays(weekStart, i));

  const studentsArray = [
    {
      name: "Abul",
      image:
        "https://img.freepik.com/premium-photo/cartoon-character-with-blue-jacket-hat-that-says-i-m-boy_618582-2660.jpg?w=826",
      isPresent: true,
    },
    {
      name: "Babul",
      image:
        "https://dezartinspire.com/wp-content/uploads/2021/10/13-3d-character-design-squid-game-character-sae%E2%80%91byeok-by-geosyrup.jpg",
      isPresent: true,
    },
    {
      name: "Cabul",
      image:
        "https://fiverr-res.cloudinary.com/image/upload/t_gig_pdf_page_2,f_jpg/20230404/Portfolio_qemap8.jpg",
      isPresent: true,
    },
    {
      name: "Sabul",
      image:
        "https://img.freepik.com/premium-photo/toy-figure-with-red-shirt-that-says-happy-birthday-it_888616-6.jpg?w=826",
      isPresent: true,
    },
    {
      name: "Habul",
      image:
        "https://img.freepik.com/premium-photo/3d-cartoon-little-boy-carrying-backpack-school-ai-technology-generated-image_1112-12414.jpg?w=1380",
      isPresent: true,
    },
    {
      name: "Mokbul",
      image:
        "https://img.freepik.com/free-psd/3d-rendering-mike-pointing_23-2149312580.jpg?w=1380&t=st=1689980184~exp=1689980784~hmac=9c820fbe7b761421c2afff0b069355a7471deb5988ccc866e2f0db91bc7f0731",
      isPresent: false,
    },
    {
      name: "Raju",
      image:
        "https://img.freepik.com/premium-photo/cartoon-character-with-blue-background-generated-by-ai_911330-239.jpg?w=826",
      isPresent: true,
    },
    {
      name: "Rana",
      image:
        "https://img.freepik.com/premium-psd/male-character-3d-illustration_235528-1367.jpg",
      isPresent: false,
    },
    {
      name: "Miraz",
      image:
        "https://img.freepik.com/premium-psd/3d-male-cartoon-character_235528-796.jpg?w=360",
      isPresent: true,
    },
    {
      name: "Sakib",
      image:
        "https://i.pinimg.com/originals/59/f7/65/59f765b0a393796825640958d148a8a8.png",
      isPresent: true,
    },
    {
      name: "Mashrafi",
      image:
        "https://media.sketchfab.com/models/2a19347e0698413abef02dc63ed82947/thumbnails/5c6ce5b58ac242919b1c23c2cc683e29/65dbbadf05de45b389d1619d1d67ad07.jpeg",
      isPresent: true,
    },
    {
      name: "Mina",
      image:
        "https://img.freepik.com/free-psd/3d-female-character-pointing-up_23-2148938899.jpg?w=2000",
      isPresent: true,
    },
  ];

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
              <div className="grid grid-cols-5 gap-5">
                {studentsArray.map((student) => (
                  <>
                    {" "}
                    <div
                      className={`card h-56 ${
                        student.isPresent ? "bg-green-100" : "bg-red-100"
                      } shadow-xl`}
                    >
                      <div className="card-body">
                        <div className="avatar flex items-center justify-center">
                          <div className="w-32 mask mask-squircle">
                            <img src={student.image} />
                          </div>
                        </div>
                        <div className="">
                          <h2 className="text-xl font-medium">
                            {student.name} {student.isPresent ? "✅" : "❌"}
                          </h2>
                        </div>
                      </div>
                    </div>
                  </>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Attendence;
