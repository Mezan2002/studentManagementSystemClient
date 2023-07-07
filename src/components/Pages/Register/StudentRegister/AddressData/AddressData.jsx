import { Input } from "@material-tailwind/react";

const AddressData = ({ isSameAddress, handleIsSameAddress }) => {
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
              <Input size="md" label="Division" />
              <Input size="md" label="District" />
              <Input label="Upazila" />
              <Input label="City Corporation / Municipality" />
              <Input label="Union" />
              <Input label="Ward No" />
              <Input label="Post Office" />
              <Input label="Post Code / Zip Code" />
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
              <Input size="md" label="Division" />
              <Input size="md" label="District" />
              <Input label="Upazila" />
              <Input label="City Corporation / Municipality" />
              <Input label="Union" />
              <Input label="Ward No" />
              <Input label="Post Office" />
              <Input label="Post Code / Zip Code" />
            </div>
            <div className="flex flex-col gap-5">
              <p className="text-base text-gray-600 font-semibold">
                Permanent Address
              </p>
              <Input size="md" label="Division" />
              <Input size="md" label="District" />
              <Input label="Upazila" />
              <Input label="City Corporation / Municipality" />
              <Input label="Union" />
              <Input label="Ward No" />
              <Input label="Post Office" />
              <Input label="Post Code / Zip Code" />
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default AddressData;
