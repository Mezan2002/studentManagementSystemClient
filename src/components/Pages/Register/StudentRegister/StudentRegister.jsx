import {
  Checkbox,
  Button,
  Typography,
  Input,
  Menu,
  MenuHandler,
  Radio,
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
import { CheckCircleIcon } from "@heroicons/react/24/solid";

const StudentRegister = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [value, setValue] = useState(new Date());

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
      }}
    >
      <div className="min-h-screen flex items-center justify-center">
        <div className="w-6/12 border border-black rounded-lg p-10 mx-auto my-5">
          {/* form top start */}
          <div className="flex items-start justify-between">
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
                <h2 className="text-xl font-medium">EIIN Number : 127777</h2>
              </div>
            </div>
            <div className="w-[20%] border border-gray-300 h-40 mx-auto my-3 overflow-hidden rounded-xl">
              {selectedImage === null ? (
                <>
                  {" "}
                  <label
                    htmlFor="selectProfilePicture"
                    className="flex items-center justify-center h-full flex-col-reverse cursor-pointer"
                  >
                    <h2 className="text-center mt-4 text-sm capitalize">
                      Select your profile picture
                    </h2>
                    <figure>
                      <img
                        loading="lazy"
                        draggable={false}
                        src="https://i.ibb.co/zxPs4Tq/gallery.png"
                        alt=""
                        className="w-7"
                        title="Photo or Video"
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
          {/* form top end */}

          <h2 className="text-xl font-semibold py-2 px-4 rounded-xl mt-5 uppercase bg-[#2196F3] text-white">
            {" "}
            Student Registeration Form
          </h2>

          {/* student's info form input start */}
          <p className="text-xl font-bold mb-5">Students Info</p>
          <form>
            <div className="flex items-start gap-5">
              <div className="grid grid-cols-2 gap-5 w-[80%]">
                <Input size="md" label="First Name" />
                <Input size="md" label="Last Name" />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-5 w-[78%]">
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
              <div className="form-control w-full -mt-4">
                <label className="label">
                  <span className="label-text">Select Your Gender</span>
                </label>
                <div className="flex items-center -mt-2">
                  <Radio
                    id="premium"
                    name="type"
                    ripple={false}
                    icon={
                      <CheckCircleIcon className="w-full h-full scale-105" />
                    }
                    className="hover:before:opacity-0 bg-blue-500/25 border-blue-500/50 transition-all p-0"
                    label={
                      <Typography color="blue-gray" className="font-normal">
                        Male
                      </Typography>
                    }
                  />
                  <Radio
                    id="premium"
                    name="type"
                    ripple={false}
                    icon={
                      <CheckCircleIcon className="w-full h-full scale-105" />
                    }
                    className="hover:before:opacity-0 bg-blue-500/25 border-blue-500/50 transition-all p-0"
                    label={
                      <Typography color="blue-gray" className="font-normal">
                        Female
                      </Typography>
                    }
                  />
                </div>
              </div>
              <Input label="Nationality" />
              <Input label="Religion" />
            </div>
            {/* student's info form input end */}
          </form>

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
        </div>
      </div>
    </section>
  );
};

export default StudentRegister;
