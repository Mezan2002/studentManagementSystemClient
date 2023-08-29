import { Button } from "@material-tailwind/react";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <section
      style={{
        backgroundImage:
          "url(https://i.ibb.co/KKGg463/pexels-jess-bailey-designs-743986.jpg)",
      }}
      className="min-h-screen flex items-center justify-center flex-col"
    >
      <div className="">
        <div className="z-10 text-center">
          <h3 className="font-semibold">Welcome to</h3>
          <h1 className="text-6xl font-bold mt-5">
            AHSANULLAH INSTITUTE OF INFORMATION & COMMUNICATION TECHNOLOGY
          </h1>

          <Link to="/login">
            <Button className="mt-7 mr-2">Login</Button>
          </Link>
          <Link to="/register">
            <Button className="mt-7">Register Now</Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Banner;
