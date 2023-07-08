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
import { useState } from "react";

const EducationalQualification = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen((cur) => !cur);

  const TABLE_HEAD = [
    "Degree Name",
    "University / College",
    "Passing Year",
    "Grade / Division",
    "Action",
  ];

  const TABLE_ROWS = [
    {
      degreeName: "BBA",
      universityOrCollege: "Dhaka University",
      passingYear: "2006",
      gradeOrDivision: "1st Division",
    },
  ];
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
                    <div className="flex flex-col gap-5">
                      <Input label="Degree Name" />
                      <Input label="University / College" />
                      <Input label="Passing Year" />
                      <Input label="Grade / Division" />
                      <Button>Add Educational Qualification</Button>
                    </div>
                  </DialogBody>
                </Dialog>
              </div>
            </div>
            {/* <Card className="overflow-auto h-full w-full">
              <table className="w-full min-w-max table-auto text-left">
                <thead>
                  <tr>
                    {TABLE_HEAD.map((head) => (
                      <th
                        key={head}
                        className="border-b border-blue-gray-100 bg-blue-gray-50 p-4 text-center"
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
                  {TABLE_ROWS.map(
                    (
                      {
                        degreeName,
                        universityOrCollege,
                        passingYear,
                        gradeOrDivision,
                      },
                      index
                    ) => (
                      <tr
                        key={name}
                        className="even:bg-blue-gray-50/50 text-center"
                      >
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
                        <td className="p-4 ">
                          <ButtonGroup size="sm" className="ml-12">
                            <Button>Edit</Button>
                            <Button color="red">Delete</Button>
                          </ButtonGroup>
                        </td>
                      </tr>
                    )
                  )}
                </tbody>
              </table>
            </Card> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationalQualification;
