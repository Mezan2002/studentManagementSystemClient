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

const TeachersInfo = ({
  register,
  errors,
  handleChangeGender,
  isGenderError,
  isMaritalStatusError,
  handeleSelectedMaritalStatus,
  isBloodGroupError,
  handeleSelectedBloodGroup,
  teachersDateOfBirth,
  handleTeachersDateOfBirth,
  isDesignationError,
  handleChangeSelectedDesignation,
  isTeachersDateOfBirthError,
}) => {
  return (
    <section>
      <p className="text-xl font-bold mt-5">Teacher's Info</p>
      <p className="text-sm text-gray-600 font-semibold mb-5">
        All information here will be teacher's information
      </p>
      <div className="flex flex-col gap-5 mb-5">
        {errors.teachersFullNameInEnglish ? (
          <>
            <Input
              size="md"
              label="Fullname in English *"
              {...register("teachersFullNameInEnglish", { required: true })}
              error
            />
          </>
        ) : (
          <Input
            size="md"
            label="Fullname in English *"
            {...register("teachersFullNameInEnglish", { required: true })}
          />
        )}
        {errors.teachersNIDNumber ? (
          <>
            <Input
              size="md"
              label="NID Number *"
              {...register("teachersNIDNumber", { required: true })}
              error
            />
          </>
        ) : (
          <Input
            size="md"
            label="NID Number *"
            {...register("teachersNIDNumber", { required: true })}
          />
        )}
      </div>
      <div className="grid grid-cols-2 gap-5 mb-5 border-b border-gray-500 pb-8 border-dashed">
        {isTeachersDateOfBirthError ? (
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <DesktopDatePicker
              slotProps={{ textField: { size: "small" } }}
              label="Date of Birth"
              className="bg-red-300 rounded-sm"
              inputFormat="MM/dd/yyyy"
              value={teachersDateOfBirth}
              onChange={(selectedDate) => {
                handleTeachersDateOfBirth(selectedDate);
              }}
            />
          </LocalizationProvider>
        ) : (
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <DesktopDatePicker
              slotProps={{ textField: { size: "small" } }}
              label="Date of Birth"
              inputFormat="MM/dd/yyyy"
              value={teachersDateOfBirth}
              onChange={(selectedDate) => {
                handleTeachersDateOfBirth(selectedDate);
              }}
            />
          </LocalizationProvider>
        )}
        <div>
          {isGenderError ? (
            <Select
              error
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
          ) : (
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
          )}
        </div>
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
          {isDesignationError ? (
            <Select
              error
              onChange={(selectedValue) => {
                handleChangeSelectedDesignation(selectedValue);
              }}
              label="Select Your Designation"
              animate={{
                mount: { y: 0 },
                unmount: { y: 25 },
              }}
            >
              <Option className="mb-2" value="Headmaster">
                Headmaster
              </Option>
              <Option className="mb-2" value="Assistant Headmaster">
                Assistant Headmaster
              </Option>
              <Option className="mb-2" value="Professor">
                Professor
              </Option>
              <Option className="mb-2" value="Class Teacher">
                Class Teacher
              </Option>
              <Option className="mb-2" value="Assistant teacher">
                Assistant teacher
              </Option>
            </Select>
          ) : (
            <Select
              onChange={(selectedValue) => {
                handleChangeSelectedDesignation(selectedValue);
              }}
              label="Select Your Designation"
              animate={{
                mount: { y: 0 },
                unmount: { y: 25 },
              }}
            >
              <Option className="mb-2" value="Principal">
                Principal
              </Option>
              <Option className="mb-2" value="Assistant Principal">
                Assistant Principal
              </Option>
              <Option className="mb-2" value="Senior Lecturer">
                Senior Lecturer
              </Option>
              <Option className="mb-2" value="Lecturer">
                Lecturer
              </Option>
              <Option className="mb-2" value="Assistant Lecturer">
                Assistant Lecturer
              </Option>
              <Option className="mb-2" value="Adjunct Lecturer">
                Adjunct Lecturer
              </Option>
              <Option className="mb-2" value="Guest Lecturer">
                Guest Lecturer
              </Option>
            </Select>
          )}
        </div>

        {errors.subjectsClassTake ? (
          <>
            <Input
              size="md"
              label="Department *"
              {...register("subjectsClassTake", { required: true })}
              error
            />
          </>
        ) : (
          <Input
            size="md"
            label="Department *"
            {...register("subjectsClassTake", { required: true })}
          />
        )}
        <div>
          {isBloodGroupError ? (
            <Select
              error
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
          ) : (
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
          )}
        </div>
        <div>
          {isMaritalStatusError ? (
            <Select
              error
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
          ) : (
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
          )}
        </div>
        <div>
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
            {errors.teachersMobileNumber ? (
              <Input
                error
                {...register("teachersMobileNumber", {
                  required: true,
                  minLength: {
                    value: 11,
                    message:
                      "Mobile number must be at least 11 characters long",
                  },
                  maxLength: {
                    value: 11,
                    message: "Mobile number must not exceed 11 characters",
                  },
                })}
                type="tel"
                size="md"
                placeholder="Teachers Mobile Number *"
                className="rounded-l-none focus:!border-t-red-500 placeholder:text-red-400 !border-t-red-500"
                labelProps={{
                  className: "before:content-none after:content-none",
                }}
                containerProps={{
                  className: "min-w-0",
                }}
              />
            ) : (
              <Input
                {...register("teachersMobileNumber", {
                  required: true,
                  minLength: {
                    value: 11,
                    message:
                      "Mobile number must be at least 11 characters long",
                  },
                  maxLength: {
                    value: 11,
                    message: "Mobile number must not exceed 11 characters",
                  },
                })}
                type="tel"
                size="md"
                placeholder="Teachers Mobile Number *"
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
          <p className="text-red-400 text-sm font-semibold">
            {errors.teachersMobileNumber && (
              <p>{errors.teachersMobileNumber.message}</p>
            )}
          </p>
        </div>
        {errors.teachersEmail ? (
          <>
            <Input
              size="md"
              label="Teachers Email *"
              {...register("teachersEmail", { required: true })}
              error
            />
          </>
        ) : (
          <Input
            size="md"
            label="Teachers Email *"
            {...register("teachersEmail", { required: true })}
          />
        )}
      </div>
    </section>
  );
};

export default TeachersInfo;
