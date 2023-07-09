import { useState } from "react";
import { useForm } from "react-hook-form";
import TeachersInfo from "./TeachersInfo/TeachersInfo";
import EducationalQualification from "./EducationalQualification/EducationalQualification";
import FormTop from "../FormTop/FormTop";
import AddressData from "../AddressData/AddressData";
import LogInInfo from "../LogInInfo/LogInInfo";
import FormBottom from "../FormBottom/FormBottom";

const TeacherRegister = () => {
  const [isSameAddress, setIsSameAddress] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [teachersDateOfBirth, setTeachersDateOfBirth] = useState(null);
  const [selectedGender, setSelectedGender] = useState(null);
  const [selectedBloodGroup, setSelectedBloodGroup] = useState(null);
  const [selectedMaritalStatus, setSelectedMaritalStatus] = useState(null);
  const [isRegisterClicked, setIsRegisterClicked] = useState(false);
  const [isDesignationError, setIsDesignationError] = useState(false);
  const [selectedDesignation, setSelectedDesignation] = useState(null);
  const [isGenderError, setIsGenderError] = useState(false);
  const [isBloodGroupError, setIsBloodGroupError] = useState(false);
  const [isMaritalStatusError, setIsMaritalStatusError] = useState(false);
  const [isTeachersDateOfBirthError, setIsTeachersDateOfBirthError] =
    useState(false);

  // handle functions start

  const handleRegisterClicked = () => {
    setIsRegisterClicked(true);
    if (
      selectedDesignation === null ||
      selectedGender === null ||
      selectedBloodGroup === null ||
      selectedMaritalStatus === null ||
      teachersDateOfBirth === null
    ) {
      setIsDesignationError(true);
      setIsGenderError(true);
      setIsBloodGroupError(true);
      setIsMaritalStatusError(true);
      setIsTeachersDateOfBirthError(true);
      return;
    }

    // Continue with form submission logic if no errors
  };

  const handleIsSameAddress = (event) => {
    setIsSameAddress(event);
  };

  const handleTeachersDateOfBirth = (selectedDate) => {
    setIsTeachersDateOfBirthError(false);
    setTeachersDateOfBirth(selectedDate);
  };

  console.log("Teachers Date Of Birth: ", teachersDateOfBirth);

  const handleChangeSelectedDesignation = (SelectedDesignation) => {
    setSelectedDesignation(SelectedDesignation);
    setIsDesignationError(false);
  };

  const handleChangeGender = (selectedGender) => {
    setSelectedGender(selectedGender);
    setIsGenderError(false);
  };
  console.log(selectedGender);

  const handeleSelectedBloodGroup = (selectedBloodGroup) => {
    setSelectedBloodGroup(selectedBloodGroup);
    setIsBloodGroupError(false);
  };
  console.log(selectedBloodGroup);

  const handeleSelectedMaritalStatus = (selectedMaritalStatus) => {
    setSelectedMaritalStatus(selectedMaritalStatus);
    setIsMaritalStatusError(false);
  };
  console.log(selectedMaritalStatus);

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

  // handle functions end

  const onSubmit = (data) => {
    console.log(data);
  };

  const isStudnet = false;

  const {
    register,
    handleSubmit,
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
            isStudnet={isStudnet}
            selectedImage={selectedImage}
            register={register}
            errors={errors}
            handleImageChange={handleImageChange}
          />

          {/* form top end */}

          {/* teacher's info form input start */}

          <form onSubmit={handleSubmit(onSubmit)}>
            <TeachersInfo
              isTeachersDateOfBirthError={isTeachersDateOfBirthError}
              isDesignationError={isDesignationError}
              isBloodGroupError={isBloodGroupError}
              isGenderError={isGenderError}
              isMaritalStatusError={isMaritalStatusError}
              handleChangeSelectedDesignation={handleChangeSelectedDesignation}
              handleChangeGender={handleChangeGender}
              handeleSelectedBloodGroup={handeleSelectedBloodGroup}
              handeleSelectedMaritalStatus={handeleSelectedMaritalStatus}
              teachersDateOfBirth={teachersDateOfBirth}
              handleTeachersDateOfBirth={handleTeachersDateOfBirth}
              errors={errors}
              register={register}
            />

            {/* teacher's info form input end */}

            {/* address info form input start */}

            <AddressData
              errors={errors}
              register={register}
              isSameAddress={isSameAddress}
              handleIsSameAddress={handleIsSameAddress}
            />

            {/* address info form input end */}

            {/* educational qualification form input start */}

            <EducationalQualification />

            {/* educational qualification form input end */}

            {/* login info form input start */}

            <LogInInfo register={register} errors={errors} />

            {/* login info form input end */}

            {/* form bottom start */}

            <FormBottom handleRegisterClicked={handleRegisterClicked} />

            {/* form bottom end */}
          </form>
        </div>
      </div>
    </section>
  );
};

export default TeacherRegister;
