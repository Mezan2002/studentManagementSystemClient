import { Button, ButtonGroup } from "@material-tailwind/react";
import axios from "axios";
import React, { useEffect, useState } from "react";
import "./Notice.css";

const Notice = () => {
  const [notice, setNotice] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:3000/get-notice")
      .then((res) => {
        setNotice(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
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
              <h2 className="text-5xl font-bold">See Notices</h2>
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
            <div className="card bg-white shadow-2xl">
              <div className="card-body">
                <div className="overflow-x-auto">
                  <table className="table table-zebra">
                    <thead>
                      <tr>
                        <th>Serial No.</th>
                        <th>Notice Title</th>
                        <th></th>
                        <th></th>
                        <th></th>
                        <th></th>
                        <th></th>
                        <th></th>
                        <th></th>
                        <th>Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {notice.map((ntc, index) => (
                        <tr key={index}>
                          <th>{index + 1}</th>
                          <td>{ntc.titleOfNotice}</td>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td>
                            <ButtonGroup type size="sm">
                              <Button>See Notice</Button>
                              <Button>Download Notice</Button>
                            </ButtonGroup>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Notice;
