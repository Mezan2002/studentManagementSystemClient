// import axios from "axios";
import { useState } from "react";
import { useForm } from "react-hook-form";
import FormTop from "../FormTop/FormTop";
import StudentsInfo from "./StudentsInfo/StudentsInfo";
import GuardiantInfo from "./GuardiantInfo/GuardiantInfo";
import AddressData from "../AddressData/AddressData";
import LogInInfo from "../LogInInfo/LogInInfo";
import FormBottom from "../FormBottom/FormBottom";

const StudentRegister = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [value, setValue] = useState(null);
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
    handleSubmit,
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

  const isStudent = {
    isStudent: true,
  };

  const onSubmit = (data) => {
    console.log(data);
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
          <FormTop
            isStudent={isStudent}
            selectedImage={selectedImage}
            register={register}
            errors={errors}
            handleImageChange={handleImageChange}
          />
          {/* form top end */}

          {/* student's info form input start */}
          <form onSubmit={handleSubmit(onSubmit)}>
            <StudentsInfo
              value={value}
              handleChange={handleChange}
              errors={errors}
              register={register}
            />
            {/* student's info form input end */}

            {/* guardian's info form input start */}
            <GuardiantInfo
              isLocalGuardian={isLocalGuardian}
              handleIsLocalGuardian={handleIsLocalGuardian}
              handleChange={handleChange}
              value={value}
            />
            {/* guardian's info form input end */}

            {/* address info form input start */}
            <AddressData
              isSameAddress={isSameAddress}
              handleIsSameAddress={handleIsSameAddress}
            />
            {/* address info form input end */}

            {/* login info form input start */}
            <LogInInfo />
            {/* login info form input end */}

            {/* form bottom start */}
            <FormBottom />
            {/* form bottom end */}
          </form>
        </div>
      </div>
    </section>
  );
};

export default StudentRegister;
