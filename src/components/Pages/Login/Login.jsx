import { Card, Checkbox, Input, Typography } from "@material-tailwind/react";
import axios from "axios";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { fetchUser } from "../../../features/loggedInUser/loggedInUserSlice";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [passwordToggle, setPasswordToggle] = useState(true);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const handleShowPassword = () => {
    setPasswordToggle(!passwordToggle);
    if (passwordToggle) {
      const input = document.querySelector("input[type='password']");
      input.setAttribute("type", "text");
    } else {
      const input = document.querySelector("input[type='text']");
      input.setAttribute("type", "password");
    }
  };

  const onSubmit = (data) => {
    const url = `http://localhost:3000/logInUser?phoneNumber=${data.phoneNumberForLogIn}&password=${data.passwordForLogIn}`;
    axios
      .get(url, {
        headers: {
          authorization: "Bearer helloWorldIAmGoingToLoggedIn",
        },
      })
      .then((res) => {
        if (res.data.message) {
          Swal.fire("Opps!!!", `${res.data.message}`, "error");
        } else {
          localStorage.setItem("token", res.data);
          reset();
          navigate("/dashboard");
          dispatch(fetchUser());
          Swal.fire("Logged In Successfully!", "", "success");
        }
      });
  };

  return (
    <section
      style={{
        backgroundImage: "url(https://i.ibb.co/vsv28Xt/bg-banner.png)",
      }}
    >
      <div className="flex items-center justify-center min-h-screen">
        <Card
          color="transparent"
          shadow={false}
          className="border border-black p-8"
        >
          <Typography variant="h4" color="blue-gray">
            Log In
          </Typography>
          <Typography color="gray" className="mt-1 font-normal">
            Enter your Log In Details to Login
          </Typography>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96"
          >
            <div className="mb-4 flex flex-col gap-6">
              {errors.phoneNumberForLogIn ? (
                <Input
                  error
                  size="lg"
                  label="Phone Number"
                  {...register("phoneNumberForLogIn", { required: true })}
                />
              ) : (
                <Input
                  size="lg"
                  label="Phone Number"
                  {...register("phoneNumberForLogIn", { required: true })}
                />
              )}
              {errors.passwordForLogIn ? (
                <Input
                  error
                  type="password"
                  size="lg"
                  label="Password"
                  {...register("passwordForLogIn", { required: true })}
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
                />
              ) : (
                <Input
                  size="lg"
                  label="Password"
                  type="password"
                  {...register("passwordForLogIn", { required: true })}
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
                />
              )}
            </div>
            <Checkbox
              label={
                <Typography
                  variant="small"
                  color="gray"
                  className="flex items-center font-normal"
                >
                  Remember Me
                </Typography>
              }
              containerProps={{ className: "-ml-2.5" }}
            />
            <button
              type="submit"
              className="btn btn-block mt-10 bg-[#2196F3] text-white hover:bg-[#2196F3]"
            >
              Log In
            </button>
            <Typography color="gray" className="mt-4 text-center font-normal">
              Don't have an account?{" "}
              <Link
                to="/register"
                className="font-medium text-blue-500 transition-colors hover:text-blue-700"
              >
                Register
              </Link>
            </Typography>
          </form>
        </Card>
      </div>
    </section>
  );
};

export default Login;
