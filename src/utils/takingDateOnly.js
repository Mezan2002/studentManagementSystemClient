export const customDateOnly = (dateOfBirth) => {
  const customTheMainData = new Date(dateOfBirth);
  const options = {
    timeZone: "Asia/Dhaka",
    month: "long",
    day: "2-digit",
    year: "numeric",
  };

  const dateOfBirthOnly = customTheMainData.toLocaleDateString(
    "en-US",
    options
  );
  //   console.log("Formatted Date:", dateOfBirthOnly);
  return dateOfBirthOnly;
};
