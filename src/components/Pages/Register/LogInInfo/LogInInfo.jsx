import { Button, Input, Menu, MenuHandler } from "@material-tailwind/react";
import { useState } from "react";

const LogInInfo = ({
  register,
  errors,
  isPhoneNumberExist,
  isLoginPassAndReTypePassSame,
}) => {
  // const [showPassword, setShowPassword] = useState(true);
  const [passwordToggle, setPasswordToggle] = useState(true);
  const [reTypePasswordToggle, setReTypePasswordToggle] = useState(true);

  const handleShowPassword = () => {
    setPasswordToggle(!passwordToggle);
    if (passwordToggle) {
      const input = document.getElementById("password");
      input.setAttribute("type", "text");
      console.log(input.type);
    } else {
      const input = document.getElementById("password");
      input.setAttribute("type", "password");
      console.log(input.type);
    }
  };
  const handleReTypePassword = () => {
    setReTypePasswordToggle(!reTypePasswordToggle);
    if (reTypePasswordToggle) {
      const input = document.getElementById("reTypePassword");
      input.setAttribute("type", "text");
    } else {
      const input = document.getElementById("reTypePassword");
      input.setAttribute("type", "password");
    }
  };

  return (
    <section>
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
              {errors.logInMobileNumber || isPhoneNumberExist ? (
                <Input
                  error
                  {...register("logInMobileNumber", {
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
                  placeholder="Log In Mobile Number *"
                  className="rounded-l-none  focus:!border-t-red-500 placeholder:text-red-400 border !border-t-red-500"
                  labelProps={{
                    className: "before:content-none after:content-none",
                  }}
                  containerProps={{
                    className: "min-w-0",
                  }}
                />
              ) : (
                <Input
                  {...register(
                    "logInMobileNumber",

                    {
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
                    }
                  )}
                  type="tel"
                  size="md"
                  placeholder="Log In Mobile Number *"
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
            <p className="-mt-3 text-red-400 text-sm font-semibold">
              {errors.logInMobileNumber && (
                <p>{errors.logInMobileNumber.message}</p>
              )}
            </p>
            <div className="grid grid-cols-2 gap-5">
              {errors.logInPassword ||
              isLoginPassAndReTypePassSame === false ? (
                <>
                  <Input
                    id="password"
                    size="md"
                    type="password"
                    label="Set Log In Password *"
                    icon={
                      <img
                        onClick={handleShowPassword}
                        src={
                          passwordToggle
                            ? "https://i.ibb.co/bRFKd1D/eye.png"
                            : "https://i.ibb.co/nLfF2nW/hide.png"
                        }
                      />
                    }
                    {...register("logInPassword", { required: true })}
                    error
                  />
                </>
              ) : (
                <Input
                  id="password"
                  size="md"
                  icon={
                    <img
                      onClick={handleShowPassword}
                      src={
                        passwordToggle
                          ? "https://i.ibb.co/bRFKd1D/eye.png"
                          : "https://i.ibb.co/nLfF2nW/hide.png"
                      }
                    />
                  }
                  type="password"
                  label="Set Log In Password *"
                  {...register("logInPassword", { required: true })}
                />
              )}
              {errors.reTypeLogInPassword ||
              isLoginPassAndReTypePassSame === false ? (
                <>
                  <Input
                    id="reTypePassword"
                    size="md"
                    type="password"
                    label="Re-type Log In Password *"
                    icon={
                      <img
                        onClick={handleReTypePassword}
                        src={
                          showPassword
                            ? "https://i.ibb.co/bRFKd1D/eye.png"
                            : "https://i.ibb.co/nLfF2nW/hide.png"
                        }
                      />
                    }
                    {...register("reTypeLogInPassword", { required: true })}
                    error
                  />
                </>
              ) : (
                <Input
                  id="reTypePassword"
                  size="md"
                  type="password"
                  label="Re-type Log In Password *"
                  icon={
                    <img
                      onClick={handleReTypePassword}
                      src={
                        reTypePasswordToggle
                          ? "https://i.ibb.co/bRFKd1D/eye.png"
                          : "https://i.ibb.co/nLfF2nW/hide.png"
                      }
                    />
                  }
                  {...register("reTypeLogInPassword", { required: true })}
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LogInInfo;
