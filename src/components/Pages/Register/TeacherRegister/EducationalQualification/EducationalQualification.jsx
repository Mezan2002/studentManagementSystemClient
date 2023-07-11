import {
  Button,
  ButtonGroup,
  Card,
  Dialog,
  DialogBody,
  DialogHeader,
  IconButton,
  Input,
  Typography,
} from "@material-tailwind/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { useEffect, useState } from "react";

const EducationalQualification = ({ setEducationalQualification }) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen((cur) => !cur);
  const [tableRows, setTableRows] = useState([]);
  const [degreeName, setDegreeName] = useState("");
  const [universityOrCollege, setUniversityOrCollege] = useState("");
  const [passingYear, setPassingYear] = useState("");
  const [gradeOrDivision, setGradeOrDivision] = useState("");
  const [isDegreeNameError, setIsDegreeNameError] = useState(false);
  const [isUniversityOrCollegeError, setIsUniversityOrCollegeError] =
    useState(false);
  const [isPassingYearError, setIsPassingYearError] = useState(false);
  const [isGradeOrDivisionError, setIsGradeOrDivisionError] = useState(false);

  const TableHead = [
    "Degree Name",
    "University / College",
    "Passing Year",
    "Grade / Division",
    "Action",
  ];

  const handleAdd = (event) => {
    event.preventDefault();
    const form = event.target;
    const degreeName = form.degreeName.value;
    setDegreeName(degreeName);
    const universityOrCollege = form.universityOrCollege.value;
    setUniversityOrCollege(universityOrCollege);
    const passingYear = form.passingYear.value;
    setPassingYear(passingYear);
    const gradeOrDivision = form.gradeOrDivision.value;
    setGradeOrDivision(gradeOrDivision);

    if (
      degreeName ||
      universityOrCollege ||
      passingYear ||
      gradeOrDivision === ""
    ) {
      if (degreeName === "") {
        setIsDegreeNameError(true);
      } else {
        setIsDegreeNameError(false);
      }
      if (universityOrCollege === "") {
        setIsUniversityOrCollegeError(true);
      } else {
        setIsUniversityOrCollegeError(false);
      }
      if (passingYear === "") {
        setIsPassingYearError(true);
      } else {
        setIsPassingYearError(false);
      }
      if (gradeOrDivision === "") {
        setIsGradeOrDivisionError(true);
      } else {
        setIsGradeOrDivisionError(false);
      }
    }

    form.reset();
    setOpen(false);
  };
  useEffect(() => {
    if (
      degreeName !== "" &&
      universityOrCollege !== "" &&
      passingYear !== "" &&
      gradeOrDivision !== ""
    ) {
      const dynamicTableRow = {
        degreeName: degreeName,
        universityOrCollege: universityOrCollege,
        passingYear: passingYear,
        gradeOrDivision: gradeOrDivision,
      };
      setTableRows((prevTableRows) => [...prevTableRows, dynamicTableRow]);
    }
  }, [degreeName, universityOrCollege, passingYear, gradeOrDivision]);
  setEducationalQualification(tableRows);

  return (
    <section>
      <p className="text-xl font-bold mt-5">Educational Qualification</p>
      <div className="border-b border-gray-500 pb-4 border-dashed mb-5">
        <div className="gap-5 mb-5">
          <div className="flex flex-col w-full gap-5 ">
            <div className="flex items-center justify-between">
              <p className="text-sm text-gray-600 font-semibold">
                Add your all educational qualification in this table
              </p>
              <div className="-mt-5">
                <Button onClick={handleOpen} className="rounded-full">
                  Add Educational Qualification
                </Button>
                {open && (
                  <Dialog size="xs" open={open} handler={handleOpen}>
                    <DialogHeader className="justify-between">
                      <Typography variant="h5" color="blue-gray">
                        Add Educational Qualification
                      </Typography>
                      <IconButton
                        color="blue-gray"
                        size="sm"
                        variant="text"
                        onClick={handleOpen}
                      >
                        <XMarkIcon strokeWidth={2} className="h-5 w-5" />
                      </IconButton>
                    </DialogHeader>
                    <DialogBody className="overflow-auto p-5">
                      <form
                        onSubmit={handleAdd}
                        className="flex flex-col gap-5"
                      >
                        {isDegreeNameError ? (
                          <Input
                            error
                            label="Degree Name *"
                            name="degreeName"
                          />
                        ) : (
                          <Input label="Degree Name *" name="degreeName" />
                        )}
                        {isUniversityOrCollegeError ? (
                          <Input
                            error
                            label="University / College *"
                            name="universityOrCollege"
                          />
                        ) : (
                          <Input
                            label="University / College *"
                            name="universityOrCollege"
                          />
                        )}
                        {isPassingYearError ? (
                          <Input
                            error
                            label="Passing Year *"
                            name="passingYear"
                          />
                        ) : (
                          <Input label="Passing Year *" name="passingYear" />
                        )}
                        {isGradeOrDivisionError ? (
                          <Input
                            error
                            label="Grade / Division *"
                            name="gradeOrDivision"
                          />
                        ) : (
                          <Input
                            label="Grade / Division *"
                            name="gradeOrDivision"
                          />
                        )}

                        {isDegreeNameError ||
                        isUniversityOrCollegeError ||
                        isPassingYearError ||
                        isGradeOrDivisionError ? (
                          <p className="text-sm text-red-400 font-semibold">
                            Please give all informations and then press the
                            button
                          </p>
                        ) : null}

                        <button
                          type="submit"
                          className="btn btn-block  bg-[#2196F3] text-white hover:bg-[#2196F3]"
                        >
                          Add Educational Qualification
                        </button>
                      </form>
                    </DialogBody>
                  </Dialog>
                )}
              </div>
            </div>
            {tableRows.length > 0 && (
              <Card className="overflow-auto h-full w-full">
                <table className="w-full min-w-max table-auto text-left">
                  <thead>
                    <tr>
                      {TableHead.map((head) => (
                        <th
                          key={head}
                          className="border-b border-blue-gray-100 bg-blue-gray-50 p-4"
                        >
                          <Typography
                            variant="small"
                            color="blue-gray"
                            className="font-normal leading-none opacity-70"
                          >
                            {head}
                          </Typography>
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    <>
                      {" "}
                      {tableRows.map(
                        (
                          {
                            degreeName,
                            universityOrCollege,
                            passingYear,
                            gradeOrDivision,
                          },
                          index
                        ) => (
                          <tr key={index} className="even:bg-blue-gray-50/50">
                            <td className="p-4">
                              <Typography
                                variant="small"
                                color="blue-gray"
                                className="font-normal"
                              >
                                {degreeName}
                              </Typography>
                            </td>
                            <td className="p-4">
                              <Typography
                                variant="small"
                                color="blue-gray"
                                className="font-normal"
                              >
                                {universityOrCollege}
                              </Typography>
                            </td>
                            <td className="p-4">
                              <Typography
                                variant="small"
                                color="blue-gray"
                                className="font-normal"
                              >
                                {passingYear}
                              </Typography>
                            </td>
                            <td className="p-4">
                              <Typography
                                variant="small"
                                color="blue-gray"
                                className="font-normal"
                              >
                                {gradeOrDivision}
                              </Typography>
                            </td>
                            <td className="p-4">
                              <ButtonGroup size="sm" className="">
                                <Button>Edit</Button>
                                <Button color="red">Delete</Button>
                              </ButtonGroup>
                            </td>
                          </tr>
                        )
                      )}
                    </>
                  </tbody>
                </table>
              </Card>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationalQualification;
