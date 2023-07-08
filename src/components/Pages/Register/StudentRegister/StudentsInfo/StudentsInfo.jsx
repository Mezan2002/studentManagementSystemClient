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
import { useState } from "react";

const StudentsInfo = ({ value, handleChange, register, errors }) => {
  const [formState, setFormState] = useState({
    selectYourClass: "",
  });
  const handleStateChange = (event) => {
    setFormState({
      ...formState,
      selectYourClass: event.target.value,
    });
  };
  return (
    <section>
      <p className="text-xl font-bold mt-5">Student's Info</p>
      <p className="text-sm text-gray-600 font-semibold mb-5">
        All information here will be student's information
      </p>
      <div className="flex flex-col gap-5 mb-5">
        {errors.fullNameInBangla ? (
          <>
            <Input
              size="md"
              label="Full Name in Bangla *"
              {...register("fullNameInBangla", { required: true })}
              error
            />
          </>
        ) : (
          <Input
            size="md"
            label="Full Name in Bangla *"
            {...register("fullNameInBangla", { required: true })}
          />
        )}
        {errors.fullNameInEnglish ? (
          <>
            <Input
              size="md"
              label="Full Name in English *"
              {...register("fullNameInEnglish", { required: true })}
              error
            />
          </>
        ) : (
          <Input
            size="md"
            label="Full Name in English *"
            {...register("fullNameInEnglish", { required: true })}
          />
        )}
        {errors.birthCertificateNumber ? (
          <>
            <Input
              size="md"
              label="Birth Certificate Number *"
              {...register("birthCertificateNumber", { required: true })}
              error
            />
          </>
        ) : (
          <Input
            size="md"
            label="Birth Certificate Number *"
            {...register("birthCertificateNumber", { required: true })}
          />
        )}
      </div>
      <div className="grid grid-cols-2 gap-5 mb-5 border-b border-gray-500 pb-8 border-dashed">
        {errors.birthPlace ? (
          <>
            <Input
              size="md"
              label="Birth Place *"
              {...register("birthPlace", { required: true })}
              error
            />
          </>
        ) : (
          <Input
            size="md"
            label="Birth Place *"
            {...register("birthPlace", { required: true })}
          />
        )}
        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <DesktopDatePicker
            slotProps={{ textField: { size: "small" } }}
            label="Date of Birth"
            inputFormat="MM/dd/yyyy"
            value={value}
            onChange={handleChange}
            renderInput={(params) => <TextField {...params} />}
            // {...register("dateOfBirth", { required: true })}
          />
        </LocalizationProvider>
        {errors.nationality ? (
          <>
            <Input
              size="md"
              label="Nationality *"
              {...register("nationality", { required: true })}
              error
            />
          </>
        ) : (
          <Input
            size="md"
            label="Nationality *"
            {...register("nationality", { required: true })}
          />
        )}
        {errors.religion ? (
          <>
            <Input
              size="md"
              label="Religion *"
              {...register("religion", { required: true })}
              error
            />
          </>
        ) : (
          <Input
            size="md"
            label="Religion *"
            {...register("religion", { required: true })}
          />
        )}
        {/* <select
          {...register("selectedClass", { required: true })}
          className="select border-gray-400 font-normal select-md text-gray-500 focus:outline-none w-full bg-transparent"
        >
          <option value={""}>Select Your Class</option>
          <option className="mb-2">6</option>
          <option className="mb-2">7</option>
          <option className="mb-2">8</option>
          <option className="mb-2">9</option>
          <option className="mb-2">10</option>
        </select> */}
        <div>
          <Select
            // {...register("selectedClass")}
            // name="selectedClass"
            label="Select Your Class"
            animate={{
              mount: { y: 0 },
              unmount: { y: 25 },
            }}
          >
            <Option className="mb-2">6</Option>
            <Option className="mb-2">7</Option>
            <Option className="mb-2">8</Option>
            <Option className="mb-2">9</Option>
            <Option className="mb-2">10</Option>
          </Select>
        </div>
        <div>
          <Select
            size="md"
            label="Gender"
            // {...register("")}
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
          {errors.mobileNumber ? (
            <Input
              error
              {...register("mobileNumber", { required: true })}
              type="tel"
              size="md"
              placeholder="Mobile Number *"
              className="rounded-l-none focus:!border-t-red-500 placeholder:text-red-400"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
              containerProps={{
                className: "min-w-0",
              }}
            />
          ) : (
            <Input
              {...register("mobileNumber", { required: true })}
              type="tel"
              size="md"
              placeholder="Mobile Number *"
              className="rounded-l-none !border-t-blue-gray-200 focus:!border-t-blue-500"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
              containerProps={{
                className: "min-w-0",
              }}
            />
          )}
        </div>
        {errors.email ? (
          <>
            <Input
              size="md"
              label="Email *"
              {...register("email", { required: true })}
              error
            />
          </>
        ) : (
          <Input
            size="md"
            label="Email *"
            {...register("email", { required: true })}
          />
        )}
      </div>
    </section>
  );
};

export default StudentsInfo;
