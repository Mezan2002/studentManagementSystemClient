import React from "react";
import { FaArrowAltCircleUp } from "react-icons/fa";

const StudentsMainDashboard = () => {
  return (
    <section className="col-span-10 min-h-screen">
      <div className="p-20">
        <div className="grid grid-cols-2 gap-10">
          <div>
            <div className="flex items-start justify-between">
              <h2 className="text-5xl font-bold">Dashboard</h2>
              <img
                src="https://i.ibb.co/gmgtqjm/setting.png"
                alt=""
                className="w-10"
              />
            </div>
            <div className="flex items-center justify-between mt-10">
              <div className="w-40">
                <div className="flex items-center justify-between">
                  <h4 className="text-lg font-semibold">Users</h4>
                  <FaArrowAltCircleUp className="text-green-600"></FaArrowAltCircleUp>
                </div>
                <div className="divider my-0"></div>
                <p className="font-medium text-2xl">40k</p>
              </div>
              <div className="w-40">
                <div className="flex items-center justify-between">
                  <h4 className="text-lg font-semibold">Posts</h4>
                  <FaArrowAltCircleUp className="text-green-600"></FaArrowAltCircleUp>
                </div>
                <div className="divider my-0"></div>
                <p className="font-medium text-2xl">100k</p>
              </div>
              <div className="w-40">
                <div className="flex items-center justify-between">
                  <h4 className="text-lg font-semibold">Reports</h4>
                  <FaArrowAltCircleUp className="text-green-600"></FaArrowAltCircleUp>
                </div>
                <div className="divider my-0"></div>
                <p className="font-medium text-2xl">10k</p>
              </div>
            </div>
          </div>
          <div>
            <div className="card bg-primary text-primary-content">
              <div className="card-body">
                <h2 className="card-title">Card title!</h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
                <div className="card-actions justify-end">
                  <button className="btn">Buy Now</button>
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
