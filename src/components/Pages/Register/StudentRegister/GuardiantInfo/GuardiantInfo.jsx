import { Button, Input, Menu, MenuHandler } from "@material-tailwind/react";
import { DesktopDatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import TextField from "@mui/material/TextField";

const GuardiantInfo = ({
  value,
  handleChange,
  handleIsLocalGuardian,
  isLocalGuardian,
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
            <Input size="md" label="Fullname in Bangla" />
            <Input size="md" label="Fullname in English" />
            <Input label="NID Number" />
            <div className="flex flex-col gap-1">
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
              <label className="cursor-pointer flex items-center">
                <input type="checkbox" className="checkbox checkbox-xs" />
                <span className="label-text ml-2">If Father Died</span>
              </label>
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
            <Input label="Father's Occupation" />
          </div>
          <div className="flex flex-col gap-5">
            <p className="text-base text-gray-600 font-semibold">
              Mother's Info
            </p>
            <Input size="md" label="Fullname in Bangla" />
            <Input size="md" label="Fullname in English" />
            <Input label="NID Number" />
            <div className="flex flex-col gap-1">
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
              <label className="cursor-pointer flex items-center">
                <input type="checkbox" className="checkbox checkbox-xs" />
                <span className="label-text  ml-2">If Mother Died</span>
              </label>
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
            <Input label="Mother's Occupation" />
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
            <div className="flex flex-col gap-5">
              <Input size="md" label="Fullname in Bangla" />
              <Input size="md" label="Fullname in English" />
              <Input
                size="md"
                label="What is the relation with the local guardian?"
              />
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
            </div>
          </div>
        ) : null}

        {/* local guardian's info form input end */}
      </div>
    </section>
  );
};

export default GuardiantInfo;
