// import axios from "axios";
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
import GuardiantInfo from "./GuardiantInfo/GuardiantInfo";
import StudentsInfo from "./StudentsInfo/StudentsInfo";

const StudentRegister = () => {
  const [isPhoneNumberExist, setIsPhoneNumberExist] = useState(false);
  const [studentsImage, setStudentsImage] = useState("");
  const [selectedImage, setSelectedImage] = useState(null);
  const [isLocalGuardian, setIsLocalGuardian] = useState(false);
  const [isSameAddress, setIsSameAddress] = useState(false);
  const [studentsDateOfBirth, setStudentsDateOfBirth] = useState(null);
  const [fathersDateOfBirth, setFathersDateOfBirth] = useState(null);
  const [mothersDateOfBirth, setMothersDateOfBirth] = useState(null);
  const [selectedClass, setSelectedClass] = useState(null);
  const [selectedGender, setSelectedGender] = useState(null);
  const [selectedBloodGroup, setSelectedBloodGroup] = useState(null);
  const [selectedMaritalStatus, setSelectedMaritalStatus] = useState(null);
  const [, setIsRegisterClicked] = useState(false);
  const [isClassError, setIsClassError] = useState(false);
  const [isGenderError, setIsGenderError] = useState(false);
  const [isBloodGroupError, setIsBloodGroupError] = useState(false);
  const [isMaritalStatusError, setIsMaritalStatusError] = useState(false);
  const [isStudentsDateOfBirthError, setIsStudentsDateOfBirthError] =
    useState(false);
  const [isFathersDateOfBirthError, setIsFathersDateOfBirthError] =
    useState(false);
  const [isMothersDateOfBirthError, setIsMothersDateOfBirthError] =
    useState(false);
  const [isLoginPassAndReTypePassSame, setIsLoginPassAndReTypePassSame] =
    useState(true);

  const imageHostingKey = import.meta.env.VITE_IMGBB_API_KEY;
  const navigate = useNavigate();

  const handleRegisterClicked = () => {
    setIsRegisterClicked(true);
    if (
      selectedClass === null ||
      selectedGender === null ||
      selectedBloodGroup === null ||
      selectedMaritalStatus === null ||
      studentsDateOfBirth === null ||
      fathersDateOfBirth === null ||
      mothersDateOfBirth === null
    ) {
      if (selectedClass === null) {
        setIsClassError(true);
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
      if (studentsDateOfBirth === null) {
        setIsStudentsDateOfBirthError(true);
      }
      if (fathersDateOfBirth === null) {
        setIsFathersDateOfBirthError(true);
      }
      if (mothersDateOfBirth === null) {
        setIsMothersDateOfBirthError(true);
      }
    }

    // Continue with form submission logic if no errors
  };

  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // handle functions start

  const handleStudentsDateOfBirth = (newValue) => {
    setIsStudentsDateOfBirthError(false);
    setStudentsDateOfBirth(newValue);
  };
  const handleFathersDateOfBirth = (newValue) => {
    setIsFathersDateOfBirthError(false);
    setFathersDateOfBirth(newValue);
  };
  const handleMothersDateOfBirth = (newValue) => {
    setIsMothersDateOfBirthError(false);
    setMothersDateOfBirth(newValue);
  };

  const handleChangeSelectedClass = (selectedClass) => {
    setSelectedClass(selectedClass);
    setIsClassError(false);
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

  const handleIsLocalGuardian = (event) => {
    setIsLocalGuardian(event);
  };

  const handleIsSameAddress = (event) => {
    setIsSameAddress(event);
  };

  // handle functions end

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
          setStudentsImage(response.data.data.url);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  const isStudent = true;

  const onSubmit = (data) => {
    const isLogInPassAndReTypePassNotSame =
      data.logInPassword !== data.reTypeLogInPassword;

    if (data.logInPassword && data.reTypeLogInPassword) {
      if (isLogInPassAndReTypePassNotSame) {
        setIsLoginPassAndReTypePassSame(false);
      }
    }
    console.log(data);
    const localGuardian = {
      localGuardiansNameInBangla: data.localGuardiansFullNameInBangla,
      localGuardiansNameInEnglish: data.localGuardiansFullNameInEnglish,
      relationWithLocalGuardians: data.relationWithLocalGuardian,
      localGuardiansMobileNumber: data.localGuardiansMobileNumber,
    };

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

    const studentsInfo = {
      studentsImage,
      studentNameInBangla: data.studentsFullNameInBangla,
      studentNameInEnglish: data.studentsFullNameInEnglish,
      birthPlace: data.birthPlace,
      studentsDateOfBirth: customDateOnly(studentsDateOfBirth),
      nationality: data.nationality,
      religion: data.religion,
      class: selectedClass,
      section: data.section.toUpperCase(),
      gender: selectedGender,
      bloodGroup: selectedBloodGroup,
      maritalStatus: selectedMaritalStatus,
      studentsMobileNumber: data.studentsMobileNumber,
      studentsEmail: data.studentsEmail,
    };

    const guardiantInfo = {
      fathersInfo: {
        fathersNameInBangla: data.fathersFullNameInBangla,
        fathersNameInEnglish: data.fathersFullNameInEnglish,
        fathersNIDNumber: data.fathersNIDNumber,
        fathersDateOfBirth: customDateOnly(fathersDateOfBirth),
        isFatherDied: data.ifFatherDied,
        fathersMobileNumber: data.fathersMobileNumber,
        fathersOccupation: data.fathersOccupation,
      },
      mothersInfo: {
        mothersNameInBangla: data.mothersFullNameInBangla,
        mothersNameInEnglish: data.mothersFullNameInEnglish,
        mothersNIDNumber: data.mothersNIDNumber,
        mothersDateOfBirth: customDateOnly(mothersDateOfBirth),
        isMotherDied: data.ifMotherDied,
        mothersMobileNumber: data.mothersMobileNumber,
        mothersOccupation: data.mothersOccupation,
      },
      localGuardian:
        data.localGuardiansFullNameInBangla &&
        data.localGuardiansFullNameInEnglish &&
        data.relationWithLocalGuardian &&
        data.localGuardiansMobileNumber !== undefined
          ? localGuardian
          : null,
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
        `https://super-ray-shrug.cyclic.cloud/isNumberExist?phoneNumber=${logInInfo.logInMobileNumber}`
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
        } else if (isLogInPassAndReTypePassNotSame) {
          Swal.fire(
            "Opps!!!",
            "your log in password and retype password is not same please check that again!",
            "error"
          );
        } else {
          const studentRegisteredData = {
            userType: "student",
            studentsInfo,
            guardiantInfo,
            address,
            logInInfo,
          };

          const config = {
            headers: {
              "Content-Type": "application/json",
            },
          };

          axios
            .post(
              "https://super-ray-shrug.cyclic.cloud/registerUser",
              JSON.stringify(studentRegisteredData),
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
              isStudentsDateOfBirthError={isStudentsDateOfBirthError}
              isClassError={isClassError}
              isBloodGroupError={isBloodGroupError}
              isGenderError={isGenderError}
              isMaritalStatusError={isMaritalStatusError}
              handleChangeSelectedClass={handleChangeSelectedClass}
              handleChangeGender={handleChangeGender}
              handeleSelectedBloodGroup={handeleSelectedBloodGroup}
              handeleSelectedMaritalStatus={handeleSelectedMaritalStatus}
              studentsDateOfBirth={studentsDateOfBirth}
              handleStudentsDateOfBirth={handleStudentsDateOfBirth}
              selectedClass={selectedClass}
              errors={errors}
              register={register}
            />
            {/* student's info form input end */}

            {/* guardian's info form input start */}
            <GuardiantInfo
              isFathersDateOfBirthError={isFathersDateOfBirthError}
              isMothersDateOfBirthError={isMothersDateOfBirthError}
              errors={errors}
              register={register}
              isLocalGuardian={isLocalGuardian}
              handleIsLocalGuardian={handleIsLocalGuardian}
              handleFathersDateOfBirth={handleFathersDateOfBirth}
              fathersDateOfBirth={fathersDateOfBirth}
              mothersDateOfBirth={mothersDateOfBirth}
              handleMothersDateOfBirth={handleMothersDateOfBirth}
            />
            {/* guardian's info form input end */}

            {/* address info form input start */}
            <AddressData
              errors={errors}
              register={register}
              isSameAddress={isSameAddress}
              handleIsSameAddress={handleIsSameAddress}
            />
            {/* address info form input end */}

            {/* login info form input start */}
            <LogInInfo
              errors={errors}
              register={register}
              isLoginPassAndReTypePassSame={isLoginPassAndReTypePassSame}
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

export default StudentRegister;
