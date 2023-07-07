import {
  Checkbox,
  Button,
  Typography,
  Input,
  Menu,
  MenuHandler,
  Select,
  Option,
} from "@material-tailwind/react";
import { DesktopDatePicker, LocalizationProvider } from "@mui/x-date-pickers";
// import axios from "axios";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import TextField from "@mui/material/TextField";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";

const StudentRegister = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [value, setValue] = useState(new Date());
  const [isLocalGuardian, setIsLocalGuardian] = useState(false);
  const [isSameAddress, setIsSameAddress] = useState(false);

  const handleIsLocalGuardian = (event) => {
    setIsLocalGuardian(event);
  };

  const handleIsSameAddress = (event) => {
    setIsSameAddress(event);
  };

  const {
    register,
    formState: { errors },
  } = useForm();

  const handleChange = (newValue) => {
    setValue(newValue);
  };
  const handleImageChange = (event) => {
    if (event.target.files && event.target.files.length > 0) {
      setSelectedImage(URL.createObjectURL(event.target.files[0]));
    }
    /* const image = event.target.files[0];
    const forlgata = new Forlgata();
    forlgata.append("image", image);

    const config = {
      headers: {
        "content-type": "multipart/form-data",
      },
    };

    if (image) {
      axios
        .post(
          `https://api.imgbb.com/1/upload?key=${imageHostingKey}`,
          forlgata,
          config
        )
        .then((response) => {
          setProfilePic(response.data.data.url);
        })
        .catch((error) => {
          console.log(error);
        });
    } */
  };
  return (
    <section
      style={{
        backgroundImage: "url(https://i.ibb.co/vsv28Xt/bg-banner.png)",
        backgroundSize: "cover",
      }}
      className="min-h-screen"
    >
      <div className="flex items-center justify-center">
        <div className="w-6/12 border border-black rounded-lg p-10 mx-auto my-10">
          {/* form top start */}
          <div className="flex items-center justify-between">
            <div className="mb-10 flex items-start w-10/12">
              <img
                src="https://i.ibb.co/NLx196P/download-removebg-preview.png"
                alt="deuty high school and college logo"
                className="w-32 mb-3"
              />
              <div className="ml-3">
                <h2 className="text-3xl font-bold">
                  Deuty High School and College
                </h2>
                <h2 className="text-lg font-medium">
                  Phone Number : +8801234567891 | EIIN Number : 127777
                </h2>
                <h2 className="text-lg font-medium">
                  Website : www.deuty-high-school-and-college.com
                </h2>
                <h2 className="text-lg font-medium">
                  Location : Rangpur to Pirgachha Road, Deuty Bazar
                </h2>
              </div>
            </div>
            <div className="w-[20%] -mt-7 border border-gray-300 h-40 mx-auto my-3 overflow-hidden rounded-xl">
              {selectedImage === null ? (
                <>
                  {" "}
                  <label
                    htmlFor="selectProfilePicture"
                    className="flex items-center justify-center h-full flex-col-reverse cursor-pointer"
                  >
                    <h2 className="text-center mt-4 text-sm capitalize">
                      Student's Photo
                    </h2>
                    <figure>
                      <img
                        loading="lazy"
                        draggable={false}
                        src="https://i.ibb.co/txqTdTx/image.png"
                        alt=""
                        className="w-7"
                      />
                    </figure>
                  </label>
                  <input
                    {...register("selectedImage", { required: true })}
                    onChange={handleImageChange}
                    type="file"
                    id="selectProfilePicture"
                    className="hidden invisible"
                  />
                  {errors.profilePicture && (
                    <span className="text-red-500">
                      Profile Picture is required
                    </span>
                  )}
                </>
              ) : (
                <img
                  loading="lazy"
                  draggable={false}
                  src={selectedImage}
                  alt=""
                  className="imageDiv h-full w-full object-cover"
                />
              )}
            </div>
          </div>
          <h2 className="text-xl font-semibold py-2 px-4 rounded-xl uppercase bg-[#2196F3] text-white text-center w-1/2 mx-auto">
            {" "}
            Student Registeration Form
          </h2>
          {/* form top end */}

          {/* student's info form input start */}
          <p className="text-xl font-bold mt-5">Student's Info</p>
          <p className="text-sm text-gray-600 font-semibold mb-5">
            All information here will be student information
          </p>
          <form>
            <div className="flex flex-col gap-5 mb-5">
              <Input size="md" label="Fullname in Bangla" />
              <Input size="md" label="Fullname in English" />
              <Input size="md" label="Birth Certificate Number" />
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
              <div>
                <Select
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
              <Input label="Nationality" />
              <Input label="Religion" />
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
            {/* student's info form input end */}

            {/* guardian's info form input start */}
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
                  If student is with his local guardian (like elder brother or
                  sister, grandfather etc)
                </span>
              </label>

              {isLocalGuardian ? (
                <div className="">
                  <p className="text-xl font-bold my-5">
                    Local Guardian's Info
                  </p>
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
            {/* guardian's info form input end */}

            {/* address info form input start */}
            {isSameAddress ? (
              <div className="border-b border-gray-500 pb-4 border-dashed">
                <p className="text-xl font-bold mt-5">Address</p>
                <label
                  className="cursor-pointer flex items-center mb-5"
                  onClick={() => handleIsSameAddress(event.target.checked)}
                >
                  <input type="checkbox" className="checkbox checkbox-xs" />
                  <span className="label-text font-medium ml-1">
                    If present address and permanent address are same
                  </span>
                </label>
                <div className="gap-5 mb-5">
                  <div className="flex flex-col w-full gap-5 ">
                    <p className="text-base text-gray-600 font-semibold">
                      Present and Permanent Address
                    </p>
                    <Input size="md" label="Division" />
                    <Input size="md" label="District" />
                    <Input label="Upazila" />
                    <Input label="City Corporation / Municipality" />
                    <Input label="Union" />
                    <Input label="Ward No" />
                    <Input label="Post Office" />
                    <Input label="Post Code / Zip Code" />
                  </div>
                </div>
              </div>
            ) : (
              <div className="border-b border-gray-500 pb-8 border-dashed">
                <p className="text-xl font-bold mt-5">Address</p>
                <label
                  className="cursor-pointer flex items-center mb-5"
                  onClick={() => handleIsSameAddress(event.target.checked)}
                >
                  <input type="checkbox" className="checkbox checkbox-xs" />
                  <span className="label-text font-medium ml-1">
                    If present address and permanent address are same
                  </span>
                </label>
                <div className="grid grid-cols-2 gap-5 mb-5">
                  <div className="flex flex-col w-full gap-5 ">
                    <p className="text-base text-gray-600 font-semibold">
                      Present Address
                    </p>
                    <Input size="md" label="Division" />
                    <Input size="md" label="District" />
                    <Input label="Upazila" />
                    <Input label="City Corporation / Municipality" />
                    <Input label="Union" />
                    <Input label="Ward No" />
                    <Input label="Post Office" />
                    <Input label="Post Code / Zip Code" />
                  </div>
                  <div className="flex flex-col gap-5">
                    <p className="text-base text-gray-600 font-semibold">
                      Permanent Address
                    </p>
                    <Input size="md" label="Division" />
                    <Input size="md" label="District" />
                    <Input label="Upazila" />
                    <Input label="City Corporation / Municipality" />
                    <Input label="Union" />
                    <Input label="Ward No" />
                    <Input label="Post Office" />
                    <Input label="Post Code / Zip Code" />
                  </div>
                </div>
              </div>
            )}
            {/* address info form input end */}

            {/* login info form input start */}
            <p className="text-xl font-bold mt-5">Login Info</p>
            <div className="border-b border-gray-500 pb-4 border-dashed mb-5">
              <div className="gap-5 mb-5">
                <div className="flex flex-col w-full gap-5 ">
                  <p className="text-sm text-gray-600 font-semibold">
                    Set a phone number and password for next time login
                  </p>
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
                  <div className="grid grid-cols-2 gap-5">
                    <Input
                      label="Password"
                      type="password"
                      icon={<img src="https://i.ibb.co/bRFKd1D/eye.png" />}
                    />
                    <Input
                      type="password"
                      label="Re-type Password"
                      icon={<img src="https://i.ibb.co/nLfF2nW/hide.png" />}
                    />
                  </div>
                </div>
              </div>
            </div>
            {/* login info form input end */}

            {/* form bottom start */}
            <Checkbox
              label={
                <Typography
                  variant="small"
                  color="gray"
                  className="flex items-center font-normal"
                >
                  I agree the
                  <a
                    href="#"
                    className="font-medium transition-colors hover:text-blue-500"
                  >
                    &nbsp;Terms and Conditions
                  </a>
                </Typography>
              }
              containerProps={{ className: "-ml-2.5" }}
            />
            <Button className="mt-6" fullWidth>
              Register
            </Button>
            <Typography color="gray" className="mt-4 text-center font-normal">
              Already have an account?{" "}
              <Link
                to="/login"
                href="#"
                className="font-medium text-blue-500 transition-colors hover:text-blue-700"
              >
                Log In
              </Link>
            </Typography>
            {/* form bottom end */}
          </form>
        </div>
      </div>
    </section>
  );
};

export default StudentRegister;
