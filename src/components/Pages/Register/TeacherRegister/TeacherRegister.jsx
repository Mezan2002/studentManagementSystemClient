import {
  Card,
  Input,
  Checkbox,
  Button,
  Typography,
  Select,
  Option,
} from "@material-tailwind/react";
import { Link } from "react-router-dom";

const TeacherRegister = () => {
  return (
    <section
      style={{
        backgroundImage: "url(https://i.ibb.co/vsv28Xt/bg-banner.png)",
      }}
    >
      <div className="flex items-center justify-center min-h-screen w-full">
        <Card
          color="transparent"
          shadow={false}
          className="border border-black p-8"
        >
          <Typography variant="h4" color="blue-gray">
            Sign Up
          </Typography>
          <Typography color="gray" className="mt-1 font-normal">
            Enter your details to register.
          </Typography>
          <form className="mt-8 mb-2 w-96 max-w-screen-lg sm:w-96">
            <div className="mb-4 flex flex-col gap-6">
              <Input size="lg" label="Name" />
              <Input size="lg" label="Email" />
              <Input type="password" size="lg" label="Password" />
              <div className="">
                <Select
                  className="py-5"
                  label="Your Designation"
                  animate={{
                    mount: { y: 0 },
                    unmount: { y: 25 },
                  }}
                >
                  <Option className="mb-2">Headmaster</Option>
                  <Option className="mb-2">Assistent Headmaster</Option>
                  <Option className="mb-2">Professor</Option>
                </Select>
              </div>
            </div>
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
                className="font-medium text-blue-500 transition-colors hover:text-blue-700"
              >
                Log In
              </Link>
            </Typography>
          </form>
        </Card>
      </div>
    </section>
  );
};

export default TeacherRegister;
