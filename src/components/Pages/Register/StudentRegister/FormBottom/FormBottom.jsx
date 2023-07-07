import { Checkbox, Typography, Button } from "@material-tailwind/react";
import { Link } from "react-router-dom";

const FormBottom = () => {
  return (
    <section>
      <div className="flex items-center justify-between">
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
      <Button className="mt-6" fullWidth>
        Register
      </Button>
    </section>
  );
};

export default FormBottom;
