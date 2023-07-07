import {
  Button,
  Input,
  Menu,
  MenuHandler,
  Option,
  Select,
} from "@material-tailwind/react";
import { DesktopDatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import TextField from "@mui/material/TextField";

const TeachersInfo = ({ value, handleChange }) => {
  return (
    <section>
      <p className="text-xl font-bold mt-5">Teacher's Info</p>
      <p className="text-sm text-gray-600 font-semibold mb-5">
        All information here will be teacher's information
      </p>
      <div className="flex flex-col gap-5 mb-5">
        <Input size="md" label="Fullname in Bangla" />
        <Input size="md" label="Fullname in English" />
        <Input size="md" label="NID Number" />
      </div>
      <div className="grid grid-cols-2 gap-5 mb-5 border-b border-gray-500 pb-8 border-dashed">
        <Input label="Birth Place" />
        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <DesktopDatePicker
            slotProps={{ textField: { size: "small" } }}
            label="Date of Birth"
            inputFormat="MM/dd/yyyy"
            value={value}
            onChange={handleChange}
            renderInput={(params) => <TextField {...params} />}
          />
        </LocalizationProvider>
        <Input label="Nationality" />
        <Input label="Religion" />
        <div>
          <Select
            label="Select Your Designation"
            animate={{
              mount: { y: 0 },
              unmount: { y: 25 },
            }}
          >
            <Option className="mb-2">Headmaster</Option>
            <Option className="mb-2">Assistant Headmaster</Option>
            <Option className="mb-2">Professor</Option>
            <Option className="mb-2">Class Teacher</Option>
            <Option className="mb-2">Assistant teacher</Option>
          </Select>
        </div>
        <div>
          <Select
            label="Gender"
            animate={{
              mount: { y: 0 },
              unmount: { y: 25 },
            }}
          >
            <Option className="mb-2">Male</Option>
            <Option className="mb-2">Female</Option>
            <Option className="mb-2">Others</Option>
          </Select>
        </div>
        <div>
          <Select
            label="Blood Group"
            animate={{
              mount: { y: 0 },
              unmount: { y: 25 },
            }}
          >
            <Option className="mb-2">A - </Option>
            <Option className="mb-2">A +</Option>
            <Option className="mb-2">B - </Option>
            <Option className="mb-2">B + </Option>
            <Option className="mb-2">AB +</Option>
            <Option className="mb-2">AB - </Option>
            <Option className="mb-2">O - </Option>
            <Option className="mb-2">O + </Option>
          </Select>
        </div>
        <div>
          <Select
            label="Marital Status"
            animate={{
              mount: { y: 0 },
              unmount: { y: 25 },
            }}
          >
            <Option className="mb-2">Married</Option>
            <Option className="mb-2">Unmarried </Option>
          </Select>
        </div>
        <div className="col-span-2">
          <Input size="md" label="Which Subjects Class Do You Take?" />
        </div>
        <div className="relative flex">
          <Menu placement="bottom-start">
            <MenuHandler>
              <Button
                ripple={false}
                variant="text"
                color="blue-gray"
                className="flex h-10 items-center gap-2 rounded-r-none border border-r-0 border-blue-gray-200 bg-blue-gray-500/10 pl-3"
              >
                +880
              </Button>
            </MenuHandler>
          </Menu>
          <Input
            type="tel"
            size="md"
            placeholder="Mobile Number"
            className="rounded-l-none !border-t-blue-gray-200 focus:!border-t-blue-500"
            labelProps={{
              className: "before:content-none after:content-none",
            }}
            containerProps={{
              className: "min-w-0",
            }}
          />
        </div>
        <Input label="Email" type="email" />
      </div>
    </section>
  );
};

export default TeachersInfo;
