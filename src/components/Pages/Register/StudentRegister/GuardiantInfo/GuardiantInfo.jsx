import { Button, Input, Menu, MenuHandler } from "@material-tailwind/react";
import { DesktopDatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";

const GuardiantInfo = ({
  errors,
  register,
  fathersDateOfBirth,
  handleFathersDateOfBirth,
  mothersDateOfBirth,
  handleMothersDateOfBirth,
  handleIsLocalGuardian,
  isLocalGuardian,
  isFathersDateOfBirthError,
  isMothersDateOfBirthError,
}) => {
  return (
    <section>
      <div className="border-b border-gray-500 pb-8 border-dashed">
        <p className="text-xl font-bold mt-5">Guardian's Info</p>
        <p className="text-sm text-gray-600 font-semibold mb-5">
          All information here will be guardian's information
        </p>
        <div className="grid grid-cols-2 gap-5 mb-5 ">
          <div className="flex flex-col w-full gap-5 ">
            <p className="text-base text-gray-600 font-semibold">
              Father's Info
            </p>
            {errors.fathersFullNameInEnglish ? (
              <>
                <Input
                  size="md"
                  label="Full Name in English *"
                  {...register("fathersFullNameInEnglish", { required: true })}
                  error
                />
              </>
            ) : (
              <Input
                size="md"
                label="Full Name in English *"
                {...register("fathersFullNameInEnglish", { required: true })}
              />
            )}
            {errors.fathersNIDNumber ? (
              <>
                <Input
                  size="md"
                  label="Father's NID Number *"
                  {...register("fathersNIDNumber", { required: true })}
                  error
                />
              </>
            ) : (
              <Input
                size="md"
                label="Father's NID Number *"
                {...register("fathersNIDNumber", { required: true })}
              />
            )}
            <div className="flex flex-col gap-1">
              {isFathersDateOfBirthError ? (
                <LocalizationProvider dateAdapter={AdapterDateFns}>
                  <DesktopDatePicker
                    slotProps={{ textField: { size: "small" } }}
                    label="Date of Birth"
                    className="bg-red-300 rounded-sm"
                    inputFormat="MM/dd/yyyy"
                    value={fathersDateOfBirth}
                    onChange={(selectedDate) => {
                      handleFathersDateOfBirth(selectedDate);
                    }}
                  />
                </LocalizationProvider>
              ) : (
                <LocalizationProvider dateAdapter={AdapterDateFns}>
                  <DesktopDatePicker
                    slotProps={{ textField: { size: "small" } }}
                    label="Date of Birth"
                    inputFormat="MM/dd/yyyy"
                    value={fathersDateOfBirth}
                    onChange={(selectedDate) => {
                      handleFathersDateOfBirth(selectedDate);
                    }}
                  />
                </LocalizationProvider>
              )}
              <label className="cursor-pointer flex items-center">
                <input
                  {...register("ifFatherDied")}
                  type="checkbox"
                  className="checkbox checkbox-xs"
                />
                <span className="label-text ml-2">If Father Died</span>
              </label>
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
                {errors.fathersMobileNumber ? (
                  <Input
                    error
                    {...register("fathersMobileNumber", {
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
                    placeholder="Father's Mobile Number *"
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
                    {...register("fathersMobileNumber", {
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
                    placeholder="Father's Mobile Number *"
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
                {errors.fathersMobileNumber && (
                  <p>{errors.fathersMobileNumber.message}</p>
                )}
              </p>
            </div>
            {errors.fathersOccupation ? (
              <>
                <Input
                  size="md"
                  label="Father's Occupation *"
                  {...register("fathersOccupation", { required: true })}
                  error
                />
              </>
            ) : (
              <Input
                size="md"
                label="Father's Occupation *"
                {...register("fathersOccupation", { required: true })}
              />
            )}
          </div>
          <div className="flex flex-col gap-5">
            <p className="text-base text-gray-600 font-semibold">
              Mother's Info
            </p>
            {errors.mothersFullNameInEnglish ? (
              <>
                <Input
                  size="md"
                  label="Full Name in English *"
                  {...register("mothersFullNameInEnglish", { required: true })}
                  error
                />
              </>
            ) : (
              <Input
                size="md"
                label="Full Name in English *"
                {...register("mothersFullNameInEnglish", { required: true })}
              />
            )}
            {errors.mothersNIDNumber ? (
              <>
                <Input
                  size="md"
                  label="Mother's NID Number *"
                  {...register("mothersNIDNumber", { required: true })}
                  error
                />
              </>
            ) : (
              <Input
                size="md"
                label="Mother's NID Number *"
                {...register("mothersNIDNumber", { required: true })}
              />
            )}
            <div className="flex flex-col gap-1">
              {isMothersDateOfBirthError ? (
                <LocalizationProvider dateAdapter={AdapterDateFns}>
                  <DesktopDatePicker
                    slotProps={{ textField: { size: "small" } }}
                    label="Date of Birth"
                    className="bg-red-300 rounded-sm"
                    inputFormat="MM/dd/yyyy"
                    value={mothersDateOfBirth}
                    onChange={(selectedDate) => {
                      handleMothersDateOfBirth(selectedDate);
                    }}
                  />
                </LocalizationProvider>
              ) : (
                <LocalizationProvider dateAdapter={AdapterDateFns}>
                  <DesktopDatePicker
                    slotProps={{ textField: { size: "small" } }}
                    label="Date of Birth"
                    inputFormat="MM/dd/yyyy"
                    value={mothersDateOfBirth}
                    onChange={(selectedDate) => {
                      handleMothersDateOfBirth(selectedDate);
                    }}
                  />
                </LocalizationProvider>
              )}
              <label className="cursor-pointer flex items-center">
                <input
                  {...register("ifMotherDied")}
                  type="checkbox"
                  className="checkbox checkbox-xs"
                />
                <span className="label-text  ml-2">If Mother Died</span>
              </label>
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
                {errors.mothersMobileNumber ? (
                  <Input
                    error
                    {...register("mothersMobileNumber", {
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
                    placeholder="Mother's Mobile Number *"
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
                    {...register("mothersMobileNumber", {
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
                    placeholder="Mother's Mobile Number *"
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
                {errors.mothersMobileNumber && (
                  <p>{errors.mothersMobileNumber.message}</p>
                )}
              </p>
            </div>

            {errors.mothersOccupation ? (
              <>
                <Input
                  size="md"
                  label="Mother's Occupation *"
                  {...register("mothersOccupation", { required: true })}
                  error
                />
              </>
            ) : (
              <Input
                size="md"
                label="Mother's Occupation *"
                {...register("mothersOccupation", { required: true })}
              />
            )}
          </div>
        </div>
        {/* local guardian's info form input start */}

        <label
          className="cursor-pointer flex items-center"
          onClick={() => handleIsLocalGuardian(event.target.checked)}
        >
          <input type="checkbox" className="checkbox checkbox-xs" />
          <span className="label-text font-medium ml-2">
            If student is with his local guardian (like elder brother or sister,
            grandfather etc)
          </span>
        </label>

        {isLocalGuardian ? (
          <div className="">
            <p className="text-xl font-bold my-5">Local Guardian's Info</p>
            <div className="grid grid-cols-2 gap-5">
              {errors.localGuardiansFullNameInBangla ? (
                <>
                  <Input
                    size="md"
                    label="Full Name in Bangla *"
                    {...register("localGuardiansFullNameInBangla", {
                      required: true,
                    })}
                    error
                  />
                </>
              ) : (
                <Input
                  size="md"
                  label="Full Name in Bangla *"
                  {...register("localGuardiansFullNameInBangla", {
                    required: true,
                  })}
                />
              )}
              {errors.localGuardiansFullNameInEnglish ? (
                <>
                  <Input
                    size="md"
                    label="Full Name in English *"
                    {...register("localGuardiansFullNameInEnglish", {
                      required: true,
                    })}
                    error
                  />
                </>
              ) : (
                <Input
                  size="md"
                  label="Full Name in English *"
                  {...register("localGuardiansFullNameInEnglish", {
                    required: true,
                  })}
                />
              )}
              {errors.relationWithLocalGuardian ? (
                <>
                  <Input
                    size="md"
                    label="What is the relation with the local guardian? *"
                    {...register("relationWithLocalGuardian", {
                      required: true,
                    })}
                    error
                  />
                </>
              ) : (
                <Input
                  size="md"
                  label="What is the relation with the local guardian? *"
                  {...register("relationWithLocalGuardian", {
                    required: true,
                  })}
                />
              )}
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
                {errors.localGuardiansMobileNumber ? (
                  <Input
                    error
                    {...register("localGuardiansMobileNumber", {
                      required: true,
                    })}
                    type="tel"
                    size="md"
                    placeholder="Local Guardian's Mobile Number *"
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
                    {...register("localGuardiansMobileNumber", {
                      required: true,
                    })}
                    type="tel"
                    size="md"
                    placeholder="Local Guardian's Mobile Number *"
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
            </div>
          </div>
        ) : null}

        {/* local guardian's info form input end */}
      </div>
    </section>
  );
};

export default GuardiantInfo;
