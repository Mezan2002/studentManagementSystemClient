import axios from "axios";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { customDateOnly } from "../../../../utils/takingDateOnly";
import AddressData from "../AddressData/AddressData";
import FormBottom from "../FormBottom/FormBottom";
import FormTop from "../FormTop/FormTop";
import LogInInfo from "../LogInInfo/LogInInfo";
import EducationalQualification from "./EducationalQualification/EducationalQualification";
import TeachersInfo from "./TeachersInfo/TeachersInfo";

const TeacherRegister = () => {
  const navigate = useNavigate();
  const [isPhoneNumberExist, setIsPhoneNumberExist] = useState(false);
  const [teachersImage, setTeachersImage] = useState("");
  const [isSameAddress, setIsSameAddress] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [teachersDateOfBirth, setTeachersDateOfBirth] = useState(null);
  const [selectedGender, setSelectedGender] = useState(null);
  const [selectedBloodGroup, setSelectedBloodGroup] = useState(null);
  const [selectedMaritalStatus, setSelectedMaritalStatus] = useState(null);
  const [, setIsRegisterClicked] = useState(false);
  const [isDesignationError, setIsDesignationError] = useState(false);
  const [selectedDesignation, setSelectedDesignation] = useState(null);
  const [isGenderError, setIsGenderError] = useState(false);
  const [isBloodGroupError, setIsBloodGroupError] = useState(false);
  const [isMaritalStatusError, setIsMaritalStatusError] = useState(false);
  const [isTeachersDateOfBirthError, setIsTeachersDateOfBirthError] =
    useState(false);
  const [educationalQualification, setEducationalQualification] = useState([]);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const imageHostingKey = import.meta.env.VITE_IMGBB_API_KEY;

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
      if (selectedDesignation === null) {
        setIsDesignationError(true);
      }
      if (selectedGender === null) {
        setIsGenderError(true);
      }
      if (selectedBloodGroup === null) {
        setIsBloodGroupError(true);
      }
      if (selectedMaritalStatus === null) {
        setIsMaritalStatusError(true);
      }
      if (teachersDateOfBirth === null) {
        setIsTeachersDateOfBirthError(true);
      }
    }
  };

  const handleIsSameAddress = (event) => {
    setIsSameAddress(event);
  };

  const handleTeachersDateOfBirth = (selectedDate) => {
    setIsTeachersDateOfBirthError(false);
    setTeachersDateOfBirth(selectedDate);
  };

  const handleChangeSelectedDesignation = (SelectedDesignation) => {
    setSelectedDesignation(SelectedDesignation);
    setIsDesignationError(false);
  };

  const handleChangeGender = (selectedGender) => {
    setSelectedGender(selectedGender);
    setIsGenderError(false);
  };

  const handeleSelectedBloodGroup = (selectedBloodGroup) => {
    setSelectedBloodGroup(selectedBloodGroup);
    setIsBloodGroupError(false);
  };

  const handeleSelectedMaritalStatus = (selectedMaritalStatus) => {
    setSelectedMaritalStatus(selectedMaritalStatus);
    setIsMaritalStatusError(false);
  };

  const handleImageChange = (event) => {
    if (event.target.files && event.target.files.length > 0) {
      setSelectedImage(URL.createObjectURL(event.target.files[0]));
    }
    const image = event.target.files[0];
    const formData = new FormData();
    formData.append("image", image);

    const config = {
      headers: {
        "content-type": "multipart/form-data",
      },
    };

    if (image) {
      axios
        .post(
          `https://api.imgbb.com/1/upload?key=${imageHostingKey}`,
          formData,
          config
        )
        .then((response) => {
          setTeachersImage(response.data.data.url);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  // handle functions end

  const onSubmit = (data) => {
    const presentAddress = {
      presentDivision: data.presentDivision,
      presentDistrict: data.presentDistrict,
      presentUpazilla: data.presentUpazilla,
      presentCityCoporation: data.presentCityCoporation,
      presentUnion: data.presentUnion,
      presentWardNo: data.presentWardNo,
      presentPostOffice: data.presentPostOffice,
      presentPostCode: data.presentPostCode,
    };
    const permanentAddress = {
      permanentDivision: data.permanentDivision,
      permanentDistrict: data.permanentDistrict,
      permanentUpazilla: data.permanentUpazilla,
      permanentCityCoporation: data.permanentCityCoporation,
      permanentUnion: data.permanentUnion,
      permanentWardNo: data.permanentWardNo,
      permanentPostOffice: data.permanentPostOffice,
      permanentPostCode: data.permanentPostCode,
    };

    const presentAndPermanentAddress = {
      presentAndPermanentDivision: data.presentAndPermanentDivision,
      presentAndPermanentDistrict: data.presentAndPermanentDistrict,
      presentAndPermanentUpazilla: data.presentAndPermanentUpazilla,
      presentAndPermanentCityCoporation: data.presentAndPermanentCityCoporation,
      presentAndPermanentUnion: data.presentAndPermanentUnion,
      presentAndPermanentWardNo: data.presentAndPermanentWardNo,
      presentAndPermanentPostOffice: data.presentAndPermanentPostOffice,
      presentAndPermanentPostCode: data.presentAndPermanentPostCode,
    };

    const teachersInfo = {
      teachersImage,
      teachersNameInBangla: data.teachersFullNameInBangla,
      teachersNameInEnglish: data.teachersFullNameInEnglish,
      teachersNIDNumber: data.teachersNIDNumber,
      teachersDateOfBirth: customDateOnly(teachersDateOfBirth),
      gender: selectedGender,
      nationality: data.nationality,
      religion: data.religion,
      teachersDesignaion: selectedDesignation,
      teachersTakingClass: data.subjectsClassTake,
      bloodGroup: selectedBloodGroup,
      maritalStatus: selectedMaritalStatus,
      teachersMobileNumber: data.teachersMobileNumber,
      teachersEmail: data.teachersEmail,
    };
    const address = {
      presentAddress:
        data.presentDivision &&
        data.presentDistrict &&
        data.presentUpazilla &&
        data.presentCityCoporation &&
        data.presentUnion &&
        data.presentWardNo &&
        data.presentPostOffice &&
        data.presentPostCode !== undefined
          ? presentAddress
          : null,
      permanentAddress:
        data.permanentDivision &&
        data.permanentDistrict &&
        data.permanentUpazilla &&
        data.permanentCityCoporation &&
        data.permanentUnion &&
        data.permanentWardNo &&
        data.permanentPostOffice &&
        data.permanentPostCode !== undefined
          ? permanentAddress
          : null,
      presentAndPermanentAddress:
        data.presentAndPermanentDivision &&
        data.presentAndPermanentDistrict &&
        data.presentAndPermanentUpazilla &&
        data.presentAndPermanentCityCoporation &&
        data.presentAndPermanentUnion &&
        data.presentAndPermanentWardNo &&
        data.presentAndPermanentPostOffice &&
        data.presentAndPermanentPostCode !== undefined
          ? presentAndPermanentAddress
          : null,
    };
    const logInInfo = {
      logInMobileNumber: data.logInMobileNumber,
      logInPassword: data.logInPassword,
      reTypeLogInPassword: data.reTypeLogInPassword,
    };

    axios
      .get(
        `https://atg-server-tau.vercel.app/isNumberExist?phoneNumber=${logInInfo.logInMobileNumber}`
      )
      .then((res) => {
        if (res.data === true) {
          setIsPhoneNumberExist(true);
          Swal.fire(
            "Opps!!!",
            "you have already registered with this log in phone number, please try with another phone number and press register again!",
            "error"
          );
          return;
        } else {
          const teacherRegisteredData = {
            userType: "teacher",
            isApproved: false,
            registeredAt: new Date().toLocaleString("en-US", {
              timeZone: "Asia/Dhaka",
            }),
            teachersInfo,
            address,
            teachersEducationalQualification: educationalQualification,
            logInInfo,
          };

          console.log(teacherRegisteredData);

          const config = {
            headers: {
              "Content-Type": "application/json",
              // Authorization: "Bearer your_token",
            },
          };

          axios
            .post(
              "https://atg-server-tau.vercel.app/registerUser",
              JSON.stringify(teacherRegisteredData),
              config
            )
            .then((res) => {
              if (res.data.acknowledged) {
                Swal.fire("Registered Successfully!", "", "success");
                reset();
                navigate("/login");
              }
            })
            .catch((err) => console.log(err));
        }
      });
  };

  const isStudnet = false;

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

            <EducationalQualification
              educationalQualification={educationalQualification}
              setEducationalQualification={setEducationalQualification}
            />

            {/* educational qualification form input end */}

            {/* login info form input start */}

            <LogInInfo
              register={register}
              errors={errors}
              isPhoneNumberExist={isPhoneNumberExist}
            />

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
