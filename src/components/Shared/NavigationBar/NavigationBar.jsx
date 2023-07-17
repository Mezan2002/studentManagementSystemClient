import {
  Avatar,
  Button,
  Collapse,
  IconButton,
  Menu,
  MenuHandler,
  MenuItem,
  MenuList,
  Navbar,
  Typography,
} from "@material-tailwind/react";
import React, { useEffect, useState } from "react";

import {
  ChevronDownIcon,
  Cog6ToothIcon,
  LifebuoyIcon,
  PowerIcon,
  UserCircleIcon,
} from "@heroicons/react/24/outline";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  fetchUser,
  logoutUser,
} from "../../../features/loggedInUser/loggedInUserSlice";

export default function NavigationBar() {
  const dispatch = useDispatch();
  const [openNav, setOpenNav] = useState(false);
  const [usersName, setUsersName] = useState("");
  const [usersType, setUsersType] = useState("");
  const [usersImage, setUsersImage] = useState("");

  // * get users data start
  const user = useSelector((state) => state.loggedInUser.loggedInUser);
  useEffect(() => {
    dispatch(fetchUser());
    if (user?.userType === "teacher") {
      setUsersName(user?.teachersInfo?.teachersNameInEnglish);
      setUsersType("teacher");
      setUsersImage(user?.teachersInfo?.teachersImage);
    } else if (user?.userType === "student") {
      setUsersName(user?.studentsInfo?.studentNameInEnglish);
      setUsersType("student");
      setUsersImage(user?.studentsInfo?.studentsImage);
    }
  }, [
    dispatch,
    user?.userType,
    user?.studentsInfo?.studentsImage,
    user?.teachersInfo?.teachersImage,
    user?.teachersInfo?.teachersNameInEnglish,
    user?.studentsInfo?.studentNameInEnglish,
  ]);
  // * get users data end

  // * handle log out start
  const handleLogOut = () => {
    dispatch(logoutUser());
    localStorage.removeItem("token");
  };
  // * handle log out end

  useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  const profileMenuItems = [
    {
      label: "My Profile",
      icon: UserCircleIcon,
    },
    {
      label: "Edit Profile",
      icon: Cog6ToothIcon,
    },
    {
      label: "Help",
      icon: LifebuoyIcon,
    },
    {
      label: "Log Out",
      icon: PowerIcon,
      handler: handleLogOut,
    },
  ];

  const navList = (
    <ul className="mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <a href="#" className="flex items-center">
          Home
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <a href="#" className="flex items-center">
          About Us
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <a href="#" className="flex items-center">
          Our Teachers
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <a href="#" className="flex items-center">
          Blogs
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <a href="#" className="flex items-center">
          Events
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <a href="#" className="flex items-center">
          Contact Us
        </a>
      </Typography>
      {!user.message && (
        <Typography
          as="li"
          variant="small"
          color="blue-gray"
          className="p-1 font-normal"
        >
          <Link to="/dashboard" className="flex items-center">
            Dashboard
          </Link>
        </Typography>
      )}
    </ul>
  );

  function ProfileMenu() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const closeMenu = () => setIsMenuOpen(false);

    return (
      <Menu open={isMenuOpen} handler={setIsMenuOpen} placement="bottom-end">
        <MenuHandler>
          <Button
            variant="text"
            color="blue-gray"
            className="flex items-center gap-1 rounded-full py-0.5 pr-2 pl-0.5 lg:ml-auto"
          >
            <Avatar
              variant="circular"
              size="sm"
              alt="candice wu"
              className="border border-blue-500 p-0.5"
              src={usersImage}
            />
            <ChevronDownIcon
              strokeWidth={2.5}
              className={`h-3 w-3 transition-transform ${
                isMenuOpen ? "rotate-180" : ""
              }`}
            />
          </Button>
        </MenuHandler>
        <MenuList className="p-1">
          {profileMenuItems.map(({ label, icon, handler }, key) => {
            const isLastItem = key === profileMenuItems.length - 1;
            return (
              <MenuItem
                key={label}
                onClick={closeMenu}
                className={`flex items-center gap-2 rounded ${
                  isLastItem
                    ? "hover:bg-red-500/10 focus:bg-red-500/10 active:bg-red-500/10"
                    : ""
                }`}
              >
                {React.createElement(icon, {
                  className: `h-4 w-4 ${isLastItem ? "text-red-500" : ""}`,
                  strokeWidth: 2,
                })}
                <Typography
                  as="span"
                  variant="small"
                  className="font-normal"
                  onClick={handler}
                  color={isLastItem ? "red" : "inherit"}
                >
                  {label}
                </Typography>
              </MenuItem>
            );
          })}
        </MenuList>
      </Menu>
    );
  }
  return (
    <>
      <Navbar className="sticky bg-transparent top-0 z-40 h-max max-w-full rounded-none py-2 px-4 lg:px-8 lg:py-4 border-0">
        <div className="flex items-center justify-between text-blue-gray-900">
          <a href="" className="w-12">
            <img
              src="https://i.ibb.co/NLx196P/download-removebg-preview.png"
              alt="deuty high school and college logo"
            />
          </a>
          <div className="flex items-center gap-4">
            <div className="mr-4 hidden lg:block">{navList}</div>
            {user.message ? (
              <>
                {" "}
                <Link to="/login">
                  <Button
                    variant="gradient"
                    size="sm"
                    className="hidden lg:inline-block"
                  >
                    <span>Log In</span>
                  </Button>
                </Link>
                <Link to="register">
                  <Button
                    variant="gradient"
                    size="sm"
                    className="hidden lg:inline-block"
                  >
                    <span>Register</span>
                  </Button>
                </Link>{" "}
              </>
            ) : (
              <ProfileMenu />
            )}
            <IconButton
              variant="text"
              className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
              ripple={false}
              onClick={() => setOpenNav(!openNav)}
            >
              {openNav ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  className="h-6 w-6"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </IconButton>
          </div>
        </div>
        <Collapse open={openNav}>
          {navList}
          {user.message ? (
            <>
              {" "}
              <Link to="/login">
                <Button variant="gradient" size="sm" fullWidth className="mb-2">
                  <span>Log In</span>
                </Button>
              </Link>
              <Link to="/register">
                <Button variant="gradient" size="sm" fullWidth className="mb-2">
                  <span>Register</span>
                </Button>
              </Link>{" "}
            </>
          ) : null}
        </Collapse>
      </Navbar>
    </>
  );
}
