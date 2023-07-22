import { Input, Textarea } from "@material-tailwind/react";
import axios from "axios";
import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import Swal from "sweetalert2";

const Complain = () => {
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const user = useSelector((state) => state.loggedInUser.loggedInUser);
  const studentsName = user?.studentsInfo?.studentNameInEnglish;
  const studentsClass = user?.studentsInfo?.class;
  const studentsSection = user?.studentsInfo?.section;
  const studentsId = user?._id;
  const onSubmit = (data) => {
    console.log(data);
    const complainsData = {
      studentsName,
      studentsClass,
      studentsSection,
      studentsId,
      subjectOfComplainment: data.subjectOfComplain,
      complain: data.complain,
    };

    axios
      .post("http://localhost:3000/complain", JSON.stringify(complainsData), {
        headers: {
          "content-type": "application/json",
        },
      })
      .then((res) => {
        if (res.data.acknowledged) {
          reset();
          Swal.fire(
            "Complain Submitted!",
            " We will fix the problem as soon as possible",
            "success"
          );
        }
      })
      .catch((error) => {
        Swal.fire("Complain Not Submitted!", "Try Again!", "error");
      });
  };

  return (
    <section
      style={{
        backgroundImage: "url(https://i.ibb.co/vsv28Xt/bg-banner.png)",
      }}
      className="col-span-10 min-h-screen"
    >
      <div className="p-20">
        <div className="">
          <div>
            <div className="flex items-start justify-between">
              <h2 className="text-5xl font-bold">Make a Complain</h2>
              <img
                draggable="false"
                loading="lazy"
                src="https://i.ibb.co/gmgtqjm/setting.png"
                alt=""
                className="w-10"
              />
            </div>
          </div>
          <div className="mt-16 flex flex-col items-start justify-start">
            <h2 className="text-xl font-semibold mb-5">Put Your Complain</h2>
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="w-full flex items-center flex-col gap-6"
            >
              {errors.subjectOfComplain ? (
                <>
                  <Input
                    size="md"
                    label="Subject of Your complain *"
                    {...register("subjectOfComplain", { required: true })}
                    error
                  />
                </>
              ) : (
                <Input
                  size="md"
                  label="Subject of Your complain *"
                  {...register("subjectOfComplain", { required: true })}
                />
              )}
              {errors.complain ? (
                <Textarea
                  error
                  {...register("complain", { required: true })}
                  label="Put your complain here"
                  rows={20}
                />
              ) : (
                <Textarea
                  {...register("complain", { required: true })}
                  label="Put your complain here"
                  rows={20}
                />
              )}
              <input
                type="submit"
                value="Submit you Compain"
                className="btn btn-block bg-black text-white hover:bg-black"
              />
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Complain;
