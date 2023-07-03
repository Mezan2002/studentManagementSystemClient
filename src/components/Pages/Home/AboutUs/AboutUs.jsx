import { Button } from "@material-tailwind/react";
import { ArrowLongRightIcon } from "@heroicons/react/24/outline";

const AboutUs = () => {
  return (
    <section className="min-h-screen">
      <div className="grid grid-cols-2 px-10 my-10 gap-5">
        <div className="mt-40">
          <p className="text-red-500 text-xl font-medium">About Us</p>
          <h1 className="text-6xl font-bold my-5">
            Qualified And Highly Equipped Tutors
          </h1>
          <p>
            Turpis tincidunt id aliquet risus feugiat. Ac auctor augue mauris
            augue neque gravida. Velit aliquet sagittis id consectetur purus ut
            faucibus. Vitae congue eu consequat ac felis donec et odio
            pellentesque. Elit ut aliquam purus sit. Aliquet lectus proin nibh
            nisl condimentum.Risus nec feugiat in fermentum. Sit amet volutpat
            consequat mauris.
          </p>
          <Button className="flex items-center gap-3 mt-10">
            Read More <ArrowLongRightIcon strokeWidth={2} className="h-5 w-5" />
          </Button>
        </div>
        <div className="relative">
          <div className="">
            <img
              src="https://i.ibb.co/nBf1F0f/pexels-max-fischer-5212338.jpg"
              alt=""
              className="rounded-3xl absolute right-5 top-20"
            />
            <img
              src="https://i.ibb.co/zmDyxxF/pexels-fauxels-3184644-1.jpg"
              alt=""
              className="rounded-3xl w-6/12 absolute top-80 left-10 border-white border-4"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
