import { Button } from "@material-tailwind/react";

const Banner = () => {
  return (
    <section
      style={{
        backgroundImage:
          "url(https://i.ibb.co/KKGg463/pexels-jess-bailey-designs-743986.jpg)",
      }}
      className="min-h-screen flex items-center justify-center flex-col -mt-20"
    >
      <div className="">
        <div className="z-10 text-center">
          <h3 className="font-semibold">Welcome to</h3>
          <h1 className="text-6xl font-bold mt-5">
            Deuty High School and College
          </h1>

          <Button className="mt-7">Register Now</Button>
        </div>
      </div>
    </section>
  );
};

export default Banner;
