import { useState } from "react";
import { useForm } from "react-hook-form";
import FormBottom from "./FormBottom/FormBottom";
import LogInInfo from "./LogInInfo/LogInInfo";
import AddressData from "./AddressData/AddressData";
import FormTop from "./FormTop/FormTop";
import TeachersInfo from "./TeachersInfo/TeachersInfo";
import EducationalQualification from "./EducationalQualification/EducationalQualification";

const TeacherRegister = () => {
  const [isSameAddress, setIsSameAddress] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [value, setValue] = useState(new Date());
  const handleIsSameAddress = (event) => {
    setIsSameAddress(event);
  };
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
  const {
    register,
    formState: { errors },
  } = useForm();
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
            selectedImage={selectedImage}
            register={register}
            errors={errors}
            handleImageChange={handleImageChange}
          />
          {/* form top end */}

          {/* teacher's info form input start */}
          <form>
            <TeachersInfo value={value} handleChange={handleChange} />
            {/* teacher's info form input end */}
            {/* address info form input start */}
            <AddressData
              isSameAddress={isSameAddress}
              handleIsSameAddress={handleIsSameAddress}
            />
            {/* address info form input end */}

            {/* educational qualification form input start */}
            <EducationalQualification />
            {/* educational qualification form input end */}

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

export default TeacherRegister;
