import { Input } from "@material-tailwind/react";

const AddressData = ({
  isSameAddress,
  handleIsSameAddress,
  register,
  errors,
}) => {
  return (
    <section>
      {isSameAddress ? (
        <div className="border-b border-gray-500 pb-4 border-dashed">
          <p className="text-xl font-bold mt-5">Address</p>
          <label
            className="cursor-pointer flex items-center mb-5"
            onClick={() => handleIsSameAddress(event.target.checked)}
          >
            <input type="checkbox" className="checkbox checkbox-xs" />
            <span className="label-text font-medium ml-1">
              If present address and permanent address are same
            </span>
          </label>
          <div className="gap-5 mb-5">
            <div className="flex flex-col w-full gap-5 ">
              <p className="text-base text-gray-600 font-semibold">
                Present and Permanent Address
              </p>
              {errors.presentAndPermanentDivision ? (
                <>
                  <Input
                    size="md"
                    label="Division *"
                    {...register("presentAndPermanentDivision", {
                      required: true,
                    })}
                    error
                  />
                </>
              ) : (
                <Input
                  size="md"
                  label="Division *"
                  {...register("presentAndPermanentDivision", {
                    required: true,
                  })}
                />
              )}
              {errors.presentAndPermanentDistrict ? (
                <>
                  <Input
                    size="md"
                    label="District *"
                    {...register("presentAndPermanentDistrict", {
                      required: true,
                    })}
                    error
                  />
                </>
              ) : (
                <Input
                  size="md"
                  label="District *"
                  {...register("presentAndPermanentDistrict", {
                    required: true,
                  })}
                />
              )}
              {errors.presentAndPermanentUpazilla ? (
                <>
                  <Input
                    size="md"
                    label="Upazila *"
                    {...register("presentAndPermanentUpazilla", {
                      required: true,
                    })}
                    error
                  />
                </>
              ) : (
                <Input
                  size="md"
                  label="Upazila *"
                  {...register("presentAndPermanentUpazilla", {
                    required: true,
                  })}
                />
              )}
              {errors.presentAndPermanentCityCoporation ? (
                <>
                  <Input
                    size="md"
                    label="City Corporation / Municipality *"
                    {...register("presentAndPermanentCityCoporation", {
                      required: true,
                    })}
                    error
                  />
                </>
              ) : (
                <Input
                  size="md"
                  label="City Corporation / Municipality *"
                  {...register("presentAndPermanentCityCoporation", {
                    required: true,
                  })}
                />
              )}
              {errors.presentAndPermanentUnion ? (
                <>
                  <Input
                    size="md"
                    label="Union *"
                    {...register("presentAndPermanentUnion", {
                      required: true,
                    })}
                    error
                  />
                </>
              ) : (
                <Input
                  size="md"
                  label="Union *"
                  {...register("presentAndPermanentUnion", {
                    required: true,
                  })}
                />
              )}
              {errors.presentAndPermanentWardNo ? (
                <>
                  <Input
                    size="md"
                    label="Ward No *"
                    {...register("presentAndPermanentWardNo", {
                      required: true,
                    })}
                    error
                  />
                </>
              ) : (
                <Input
                  size="md"
                  label="Ward No *"
                  {...register("presentAndPermanentWardNo", {
                    required: true,
                  })}
                />
              )}
              {errors.presentAndPermanentPostOffice ? (
                <>
                  <Input
                    size="md"
                    label="Post Office *"
                    {...register("presentAndPermanentPostOffice", {
                      required: true,
                    })}
                    error
                  />
                </>
              ) : (
                <Input
                  size="md"
                  label="Post Office *"
                  {...register("presentAndPermanentPostOffice", {
                    required: true,
                  })}
                />
              )}
              {errors.presentAndPermanentPostCode ? (
                <>
                  <Input
                    size="md"
                    label="Post Code / Zip Code *"
                    {...register("presentAndPermanentPostCode", {
                      required: true,
                    })}
                    error
                  />
                </>
              ) : (
                <Input
                  size="md"
                  label="Post Code / Zip Code *"
                  {...register("presentAndPermanentPostCode", {
                    required: true,
                  })}
                />
              )}
            </div>
          </div>
        </div>
      ) : (
        <div className="border-b border-gray-500 pb-8 border-dashed">
          <p className="text-xl font-bold mt-5">Address</p>
          <label
            className="cursor-pointer flex items-center mb-5"
            onClick={() => handleIsSameAddress(event.target.checked)}
          >
            <input type="checkbox" className="checkbox checkbox-xs" />
            <span className="label-text font-medium ml-1">
              If present address and permanent address are same
            </span>
          </label>
          <div className="grid grid-cols-2 gap-5 mb-5">
            <div className="flex flex-col w-full gap-5 ">
              <p className="text-base text-gray-600 font-semibold">
                Present Address
              </p>
              {errors.presentDivision ? (
                <>
                  <Input
                    size="md"
                    label="Division *"
                    {...register("presentDivision", {
                      required: true,
                    })}
                    error
                  />
                </>
              ) : (
                <Input
                  size="md"
                  label="Division *"
                  {...register("presentDivision", {
                    required: true,
                  })}
                />
              )}
              {errors.presentDistrict ? (
                <>
                  <Input
                    size="md"
                    label="District *"
                    {...register("presentDistrict", {
                      required: true,
                    })}
                    error
                  />
                </>
              ) : (
                <Input
                  size="md"
                  label="District *"
                  {...register("presentDistrict", {
                    required: true,
                  })}
                />
              )}
              {errors.presentUpazilla ? (
                <>
                  <Input
                    size="md"
                    label="Upazila *"
                    {...register("presentUpazilla", {
                      required: true,
                    })}
                    error
                  />
                </>
              ) : (
                <Input
                  size="md"
                  label="Upazila *"
                  {...register("presentUpazilla", {
                    required: true,
                  })}
                />
              )}
              {errors.presentCityCoporation ? (
                <>
                  <Input
                    size="md"
                    label="City Corporation / Municipality *"
                    {...register("presentCityCoporation", {
                      required: true,
                    })}
                    error
                  />
                </>
              ) : (
                <Input
                  size="md"
                  label="City Corporation / Municipality *"
                  {...register("presentCityCoporation", {
                    required: true,
                  })}
                />
              )}
              {errors.presentUnion ? (
                <>
                  <Input
                    size="md"
                    label="Union *"
                    {...register("presentUnion", {
                      required: true,
                    })}
                    error
                  />
                </>
              ) : (
                <Input
                  size="md"
                  label="Union *"
                  {...register("presentUnion", {
                    required: true,
                  })}
                />
              )}
              {errors.presentWardNo ? (
                <>
                  <Input
                    size="md"
                    label="Ward No *"
                    {...register("presentWardNo", {
                      required: true,
                    })}
                    error
                  />
                </>
              ) : (
                <Input
                  size="md"
                  label="Ward No *"
                  {...register("presentWardNo", {
                    required: true,
                  })}
                />
              )}
              {errors.presentPostOffice ? (
                <>
                  <Input
                    size="md"
                    label="Post Office *"
                    {...register("presentPostOffice", {
                      required: true,
                    })}
                    error
                  />
                </>
              ) : (
                <Input
                  size="md"
                  label="Post Office *"
                  {...register("presentPostOffice", {
                    required: true,
                  })}
                />
              )}
              {errors.presentPostCode ? (
                <>
                  <Input
                    size="md"
                    label="Post Code / Zip Code *"
                    {...register("presentPostCode", {
                      required: true,
                    })}
                    error
                  />
                </>
              ) : (
                <Input
                  size="md"
                  label="Post Code / Zip Code *"
                  {...register("presentPostCode", {
                    required: true,
                  })}
                />
              )}
            </div>
            <div className="flex flex-col gap-5">
              <p className="text-base text-gray-600 font-semibold">
                Permanent Address
              </p>
              {errors.permanentDivision ? (
                <>
                  <Input
                    size="md"
                    label="Division *"
                    {...register("permanentDivision", {
                      required: true,
                    })}
                    error
                  />
                </>
              ) : (
                <Input
                  size="md"
                  label="Division *"
                  {...register("permanentDivision", {
                    required: true,
                  })}
                />
              )}
              {errors.permanentDistrict ? (
                <>
                  <Input
                    size="md"
                    label="District *"
                    {...register("permanentDistrict", {
                      required: true,
                    })}
                    error
                  />
                </>
              ) : (
                <Input
                  size="md"
                  label="District *"
                  {...register("permanentDistrict", {
                    required: true,
                  })}
                />
              )}
              {errors.permanentUpazilla ? (
                <>
                  <Input
                    size="md"
                    label="Upazila *"
                    {...register("permanentUpazilla", {
                      required: true,
                    })}
                    error
                  />
                </>
              ) : (
                <Input
                  size="md"
                  label="Upazila *"
                  {...register("permanentUpazilla", {
                    required: true,
                  })}
                />
              )}
              {errors.permanentCityCoporation ? (
                <>
                  <Input
                    size="md"
                    label="City Corporation / Municipality *"
                    {...register("permanentCityCoporation", {
                      required: true,
                    })}
                    error
                  />
                </>
              ) : (
                <Input
                  size="md"
                  label="City Corporation / Municipality *"
                  {...register("permanentCityCoporation", {
                    required: true,
                  })}
                />
              )}
              {errors.permanentUnion ? (
                <>
                  <Input
                    size="md"
                    label="Union *"
                    {...register("permanentUnion", {
                      required: true,
                    })}
                    error
                  />
                </>
              ) : (
                <Input
                  size="md"
                  label="Union *"
                  {...register("permanentUnion", {
                    required: true,
                  })}
                />
              )}
              {errors.permanentWardNo ? (
                <>
                  <Input
                    size="md"
                    label="Ward No *"
                    {...register("permanentWardNo", {
                      required: true,
                    })}
                    error
                  />
                </>
              ) : (
                <Input
                  size="md"
                  label="Ward No *"
                  {...register("permanentWardNo", {
                    required: true,
                  })}
                />
              )}
              {errors.permanentPostOffice ? (
                <>
                  <Input
                    size="md"
                    label="Post Office *"
                    {...register("permanentPostOffice", {
                      required: true,
                    })}
                    error
                  />
                </>
              ) : (
                <Input
                  size="md"
                  label="Post Office *"
                  {...register("permanentPostOffice", {
                    required: true,
                  })}
                />
              )}
              {errors.permanentPostCode ? (
                <>
                  <Input
                    size="md"
                    label="Post Code / Zip Code *"
                    {...register("permanentPostCode", {
                      required: true,
                    })}
                    error
                  />
                </>
              ) : (
                <Input
                  size="md"
                  label="Post Code / Zip Code *"
                  {...register("permanentPostCode", {
                    required: true,
                  })}
                />
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default AddressData;
