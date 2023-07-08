import { Button, Input, Menu, MenuHandler } from "@material-tailwind/react";

const LogInInfo = () => {
  return (
    <section>
      <p className="text-xl font-bold mt-5">Login Info</p>
      <div className="border-b border-gray-500 pb-4 border-dashed mb-5">
        <div className="gap-5 mb-5">
          <div className="flex flex-col w-full gap-5 ">
            <p className="text-sm text-gray-600 font-semibold">
              Set a phone number and password for next time login
            </p>
            <div className="relative flex">
              <Menu placement="bottom-start">
                <MenuHandler>
                  <Button
                    ripple={false}
                    variant="text"
                    color="blue-gray"
                    className="flex h-10 items-center gap-2 rounded-r-none border border-r-0 border-blue-gray-200 bg-blue-gray-500/10 pl-3"
                  >
                    +880
                  </Button>
                </MenuHandler>
              </Menu>
              <Input
                type="tel"
                size="md"
                placeholder="Mobile Number"
                className="rounded-l-none !border-t-blue-gray-200 focus:!border-t-blue-500"
                labelProps={{
                  className: "before:content-none after:content-none",
                }}
                containerProps={{
                  className: "min-w-0",
                }}
              />
            </div>
            <div className="grid grid-cols-2 gap-5">
              <Input
                label="Password"
                type="password"
                icon={<img src="https://i.ibb.co/bRFKd1D/eye.png" />}
              />
              <Input
                type="password"
                label="Re-type Password"
                icon={<img src="https://i.ibb.co/nLfF2nW/hide.png" />}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LogInInfo;
