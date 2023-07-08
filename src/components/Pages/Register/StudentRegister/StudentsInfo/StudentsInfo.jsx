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

const StudentsInfo = ({
  studentsDateOfBirth,
  handleStudentsDateOfBirth,
  register,
  errors,
  handleChangeSelectedClass,
  handleChangeGender,
  handeleSelectedMaritalStatus,
  handeleSelectedBloodGroup,
}) => {
  return (
    <section>
      <p className="text-xl font-bold mt-5">Student's Info</p>
      <p className="text-sm text-gray-600 font-semibold mb-5">
        All information here will be student's information
      </p>
      <div className="flex flex-col gap-5 mb-5">
        {errors.studentsFullNameInBangla ? (
          <>
            <Input
              size="md"
              label="Full Name in Bangla *"
              {...register("studentsFullNameInBangla", { required: true })}
              error
            />
          </>
        ) : (
          <Input
            size="md"
            label="Full Name in Bangla *"
            {...register("studentsFullNameInBangla", { required: true })}
          />
        )}
        {errors.studentsFullNameInEnglish ? (
          <>
            <Input
              size="md"
              label="Full Name in English *"
              {...register("studentsFullNameInEnglish", { required: true })}
              error
            />
          </>
        ) : (
          <Input
            size="md"
            label="Full Name in English *"
            {...register("studentsFullNameInEnglish", { required: true })}
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
            value={studentsDateOfBirth}
            onChange={(selectedDate) => {
              handleStudentsDateOfBirth(selectedDate);
            }}
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
        <div>
          <Select
            onChange={(selectedValue) => {
              handleChangeSelectedClass(selectedValue);
            }}
            label="Select Your Class"
            animate={{
              mount: { y: 0 },
              unmount: { y: 25 },
            }}
          >
            <Option className="mb-2" value="6">
              6
            </Option>
            <Option className="mb-2" value="7">
              7
            </Option>
            <Option className="mb-2" value="8">
              8
            </Option>
            <Option className="mb-2" value="9">
              9
            </Option>
            <Option className="mb-2" value="10">
              10
            </Option>
          </Select>
        </div>
        <div>
          <Select
            onChange={(selectedValue) => {
              handleChangeGender(selectedValue);
            }}
            size="md"
            label="Gender"
            animate={{
              mount: { y: 0 },
              unmount: { y: 25 },
            }}
          >
            <Option className="mb-2" value="Male">
              Male
            </Option>
            <Option className="mb-2" value="Female">
              Female
            </Option>
            <Option className="mb-2" value="Others">
              Others
            </Option>
          </Select>
        </div>
        <div>
          <Select
            onChange={(selectedValue) => {
              handeleSelectedBloodGroup(selectedValue);
            }}
            label="Blood Group"
            animate={{
              mount: { y: 0 },
              unmount: { y: 25 },
            }}
          >
            <Option className="mb-2" value="A +">
              A +
            </Option>
            <Option className="mb-2" value="A -">
              A -{" "}
            </Option>
            <Option className="mb-2" value="B +">
              B +{" "}
            </Option>
            <Option className="mb-2" value="B -">
              B -{" "}
            </Option>
            <Option className="mb-2" value="AB +">
              AB +
            </Option>
            <Option className="mb-2" value="AB -">
              AB -{" "}
            </Option>
            <Option className="mb-2" value="O +">
              O +{" "}
            </Option>
            <Option className="mb-2" value="O -">
              O -{" "}
            </Option>
          </Select>
        </div>
        <div>
          <Select
            onChange={(selectedValue) => {
              handeleSelectedMaritalStatus(selectedValue);
            }}
            label="Marital Status"
            animate={{
              mount: { y: 0 },
              unmount: { y: 25 },
            }}
          >
            <Option className="mb-2" value="Married">
              Married
            </Option>
            <Option className="mb-2" value="Unmarried">
              Unmarried{" "}
            </Option>
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
          {errors.studentsMobileNumber ? (
            <Input
              error
              {...register("studentsMobileNumber", { required: true })}
              type="tel"
              size="md"
              placeholder="Students Mobile Number *"
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
              {...register("studentsMobileNumber", { required: true })}
              type="tel"
              size="md"
              placeholder="Students Mobile Number *"
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
        {errors.studentsEmail ? (
          <>
            <Input
              size="md"
              label="Students Email *"
              {...register("studentsEmail", { required: true })}
              error
            />
          </>
        ) : (
          <Input
            size="md"
            label="Students Email *"
            {...register("studentsEmail", { required: true })}
          />
        )}
      </div>
    </section>
  );
};

export default StudentsInfo;
