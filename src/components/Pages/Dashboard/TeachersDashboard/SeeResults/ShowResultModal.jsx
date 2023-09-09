import { Input } from "@material-tailwind/react";
import React from "react";

const ShowResultModal = () => {
  return (
    <div>
      <dialog className="modal">
        <div className="modal-box">
          <form method="dialog">
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
          </form>
          <h3 className="font-bold text-lg">Making Result of</h3>
          <div className="mt-5 flex items-center justify-center">
            <div className="">
              <div className="">
                <div className="">
                  <form className="flex flex-col gap-5">
                    <div className="grid grid-cols-2 gap-5">
                      <div className="form-control">
                        <label className="label">
                          <span className="font-bold text-xs">
                            Students Name *
                          </span>
                        </label>
                        <Input
                          name="studnetsName"
                          defaultValue={
                            selectedStudentsData?.studentsInfo
                              ?.studentNameInEnglish
                          }
                          disabled
                          readOnly
                          size="lg"
                        />
                      </div>
                      <div className="form-control">
                        <label className="label">
                          <span className="font-bold text-xs">Exam *</span>
                        </label>
                        <Input
                          name="examName"
                          defaultValue="Test Exam"
                          disabled
                          readOnly
                          size="lg"
                        />
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-5">
                      <div className="form-control">
                        <label className="label">
                          <span className="font-bold text-xs">
                            Students Roll Number *
                          </span>
                        </label>
                        <Input
                          name="studentsRollNumber"
                          defaultValue={
                            selectedStudentsData?.studentsInfo
                              ?.studentRollNumber
                          }
                          disabled
                          readOnly
                          size="lg"
                        />
                      </div>
                      <div className="form-control">
                        <label className="label">
                          <span className="font-bold text-xs">
                            Students Session *
                          </span>
                        </label>
                        <Input
                          name="studentsRegistrationNumber"
                          defaultValue={
                            selectedStudentsData?.studentsInfo?.session
                          }
                          disabled
                          readOnly
                          size="lg"
                        />
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-5">
                      <div className="form-control">
                        <label className="label">
                          <span className="font-bold text-xs">
                            Student of Department *
                          </span>
                        </label>
                        <Input
                          defaultValue={
                            selectedStudentsData?.studentsInfo?.class
                          }
                          disabled
                          readOnly
                          size="lg"
                        />
                      </div>
                      <div className="form-control">
                        <label className="label">
                          <span className="font-bold text-xs">
                            Students of Semister *
                          </span>
                        </label>
                        <Input
                          defaultValue={
                            selectedStudentsData?.studentsInfo?.section
                          }
                          disabled
                          readOnly
                          size="lg"
                        />
                      </div>
                    </div>
                    <div className="form-control ">
                      <label className="label">
                        <span className="font-bold text-xs">
                          Marks Of Structured Programming Language *
                        </span>
                      </label>
                      <div className="grid grid-cols-2 gap-5">
                        <Input
                          name="structuredProgrammingLanguageTotalMarks"
                          required
                          size="lg"
                          label="Total Marks Here"
                        />
                        <Input
                          name="structuredProgrammingLanguageCGPA"
                          required
                          size="lg"
                          label="CGPA Here Out of 4.00"
                        />
                      </div>
                    </div>
                    <div className="form-control ">
                      <label className="label">
                        <span className="font-bold text-xs">
                          Marks Of Structured Programming Language Lab *
                        </span>
                      </label>
                      <div className="grid grid-cols-2 gap-5">
                        <Input
                          name="marksOfStructuredProgrammingLanguageLab"
                          required
                          size="lg"
                          label="Total Marks Here"
                        />
                        <Input
                          name="CGPAOfStructuredProgrammingLanguageLab"
                          required
                          size="lg"
                          label="CGPA Here Out of 4.00"
                        />
                      </div>
                    </div>
                    <div className="form-control ">
                      <label className="label">
                        <span className="font-bold text-xs">
                          Marks Of Electrical and Electronic Circuit *
                        </span>
                      </label>
                      <div className="grid grid-cols-2 gap-5">
                        <Input
                          name="marksOfElectricalAndElectronicCircuit"
                          required
                          size="lg"
                          label="Total Marks Here"
                        />
                        <Input
                          name="CGPAOfElectricalAndElectronicCircuit"
                          required
                          size="lg"
                          label="CGPA Here Out of 4.00"
                        />
                      </div>
                    </div>
                    <div className="form-control ">
                      <label className="label">
                        <span className="font-bold text-xs">
                          Marks Of Electrical and Electronic Circuit Lab *
                        </span>
                      </label>
                      <div className="grid grid-cols-2 gap-5">
                        <Input
                          name="marksOfElectricalAndElectronicCircuitLab"
                          required
                          size="lg"
                          label="Total Marks Here"
                        />
                        <Input
                          name="CGPAOfElectricalAndElectronicCircuitLab"
                          required
                          size="lg"
                          label="CGPA Here Out of 4.00"
                        />
                      </div>
                    </div>
                    <div className="form-control ">
                      <label className="label">
                        <span className="font-bold text-xs">
                          Marks Of Calculus *
                        </span>
                      </label>
                      <div className="grid grid-cols-2 gap-5">
                        <Input
                          name="marksOfCalculus"
                          required
                          size="lg"
                          label="Total Marks Here"
                        />
                        <Input
                          name="CGPAOfCalculus"
                          required
                          size="lg"
                          label="CGPA Here Out of 4.00"
                        />
                      </div>
                    </div>
                    <div className="form-control ">
                      <label className="label">
                        <span className="font-bold text-xs">
                          Marks Of English *
                        </span>
                      </label>
                      <div className="grid grid-cols-2 gap-5">
                        <Input
                          name="marksOfEnglish"
                          required
                          size="lg"
                          label="Total Marks Here"
                        />
                        <Input
                          name="CGPAOfEnglish"
                          required
                          size="lg"
                          label="CGPA Here Out of 4.00"
                        />
                      </div>
                    </div>

                    <div className="form-control ">
                      <label className="label">
                        <span className="font-bold text-xs">
                          Marks Of Physics *
                        </span>
                      </label>
                      <div className="grid grid-cols-2 gap-5">
                        <Input
                          name="marksOfPhysics"
                          required
                          size="lg"
                          label="Total Marks Here"
                        />
                        <Input
                          name="CGPAOfPhysics"
                          required
                          size="lg"
                          label="CGPA Here Out of 4.00"
                        />
                      </div>
                    </div>

                    <input
                      type="submit"
                      value="Make Result"
                      className="btn btn-block bg-black text-white hover:bg-black"
                    />
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default ShowResultModal;
