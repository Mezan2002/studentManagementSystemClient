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
  isSemisterError,
  handleChangeGender,
  handeleSelectedMaritalStatus,
  handeleSelectedBloodGroup,
  isClassError,
  isGenderError,
  isBloodGroupError,
  isMaritalStatusError,
  handleChangeSelectedSemister,
  isStudentsDateOfBirthError,
}) => {
  return (
    <section>
      <p className="text-xl font-bold mt-5">Student's Info</p>
      <p className="text-sm text-gray-600 font-semibold mb-5">
        All information here will be student's information
      </p>
      <div className="flex flex-col gap-5 mb-5">
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
        {isStudentsDateOfBirthError ? (
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <DesktopDatePicker
              slotProps={{ textField: { size: "small" } }}
              label="Date of Birth *"
              inputFormat="MM/dd/yyyy"
              className="bg-red-300 rounded-sm"
              value={studentsDateOfBirth}
              onChange={(selectedDate) => {
                handleStudentsDateOfBirth(selectedDate);
              }}
            />
          </LocalizationProvider>
        ) : (
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <DesktopDatePicker
              slotProps={{ textField: { size: "small" } }}
              label="Date of Birth *"
              inputFormat="MM/dd/yyyy"
              value={studentsDateOfBirth}
              onChange={(selectedDate) => {
                handleStudentsDateOfBirth(selectedDate);
              }}
            />
          </LocalizationProvider>
        )}
      </div>
      <div className="grid grid-cols-2 gap-5 mb-5 border-b border-gray-500 pb-8 border-dashed">
        <div>
          {isClassError ? (
            <Select
              error
              onChange={(selectedValue) => {
                handleChangeSelectedClass(selectedValue);
              }}
              label="Select Your Department"
              animate={{
                mount: { y: 0 },
                unmount: { y: 25 },
              }}
            >
              <Option className="mb-2" value="CSE">
                CSE
              </Option>
              <Option className="mb-2" value="BBA">
                BBA
              </Option>
            </Select>
          ) : (
            <Select
              onChange={(selectedValue) => {
                handleChangeSelectedClass(selectedValue);
              }}
              label="Select Your Department"
              animate={{
                mount: { y: 0 },
                unmount: { y: 25 },
              }}
            >
              <Option className="mb-2" value="CSE">
                CSE
              </Option>
              <Option className="mb-2" value="BBA">
                BBA
              </Option>
            </Select>
          )}
        </div>
        {isSemisterError ? (
          <Select
            error
            onChange={(selectedValue) => {
              handleChangeSelectedSemister(selectedValue);
            }}
            label="Select Semister"
            animate={{
              mount: { y: 0 },
              unmount: { y: 25 },
            }}
          >
            <Option className="mb-2 text-xs" value="1st">
              1st
            </Option>
            <Option className="mb-2 text-xs" value="2nd">
              2nd
            </Option>
            <Option className="mb-2 text-xs" value="3rd">
              3rd
            </Option>
            <Option className="mb-2 text-xs" value="4th">
              4th
            </Option>
            <Option className="mb-2 text-xs" value="5th">
              5th
            </Option>
            <Option className="mb-2 text-xs" value="6th">
              6th
            </Option>
            <Option className="mb-2 text-xs" value="7th">
              7th
            </Option>
            <Option className="mb-2 text-xs" value="8th">
              8th
            </Option>
          </Select>
        ) : (
          <Select
            onChange={(selectedValue) => {
              handleChangeSelectedSemister(selectedValue);
            }}
            label="Select Semister"
            animate={{
              mount: { y: 0 },
              unmount: { y: 25 },
            }}
          >
            <Option className="mb-2 text-xs" value="1st">
              1st
            </Option>
            <Option className="mb-2 text-xs" value="2nd">
              2nd
            </Option>
            <Option className="mb-2 text-xs" value="3rd">
              3rd
            </Option>
            <Option className="mb-2 text-xs" value="4th">
              4th
            </Option>
            <Option className="mb-2 text-xs" value="5th">
              5th
            </Option>
            <Option className="mb-2 text-xs" value="6th">
              6th
            </Option>
            <Option className="mb-2 text-xs" value="7th">
              7th
            </Option>
            <Option className="mb-2 text-xs" value="8th">
              8th
            </Option>
          </Select>
        )}
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
            {errors.studentsMobileNumber ? (
              <Input
                error
                {...register("studentsMobileNumber", {
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
                placeholder="Students Mobile Number *"
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
                {...register("studentsMobileNumber", {
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
          <p className="text-red-400 text-sm font-semibold">
            {errors.studentsMobileNumber && (
              <p>{errors.studentsMobileNumber.message}</p>
            )}
          </p>
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
