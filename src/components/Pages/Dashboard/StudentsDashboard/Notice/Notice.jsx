import { Button, ButtonGroup } from "@material-tailwind/react";
import React from "react";
import "./Notice.css";

const Notice = () => {
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
                    {/* head */}
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
                      {/* row 1 */}
                      <tr>
                        <th>1</th>
                        <td>
                          Lorem ipsum dolor sit amet consectetur, adipisicing
                          elit.
                        </td>
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
                      {/* row 2 */}
                      <tr>
                        <th>2</th>
                        <td>
                          Lorem ipsum dolor sit amet consectetur, adipisicing
                          elit.
                        </td>
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
                      {/* row 3 */}
                      <tr>
                        <th>3</th>
                        <td>
                          Lorem ipsum dolor sit amet consectetur, adipisicing
                          elit.
                        </td>
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
