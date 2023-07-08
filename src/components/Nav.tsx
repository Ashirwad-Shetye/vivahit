import { useState } from "react";
import Logo from "../assets/logo/logo.png";
import { RxDashboard } from "react-icons/rx";
import { IoSettingsOutline } from "react-icons/io5";
import { SlLocationPin } from "react-icons/sl";
import { Button, buttonVariants } from "./ui/Button";
import { PiPresentationChart } from "react-icons/pi";
import { BsCalendarDate } from "react-icons/bs";
import { LiaDoorOpenSolid } from "react-icons/lia";

function Nav() {
  const [isFocused, setIsFocused] = useState(true);
  const handleButtonFocus = () => {
    setIsFocused(isFocused);
  };
  return (
    <div className="w-32 relative h-screen">
      <img
        src={Logo}
        alt="weather logo"
        className="w-12 mx-auto py-10 rounded-full"
      />
      <div className="mx-auto mt-4 h-80 w-fit flex flex-col justify-between">
        <Button
          className={buttonVariants({ variant: "navFocus" })}
          onClick={handleButtonFocus}
        >
          <RxDashboard />
        </Button>
        <Button>
          <PiPresentationChart />
        </Button>
        <Button>
          <SlLocationPin />
        </Button>
        <Button>
          <BsCalendarDate />
        </Button>
        <Button>
          <IoSettingsOutline />
        </Button>
      </div>
      <div className="absolute bottom-16 w-full flex justify-center">
        <Button>
          <LiaDoorOpenSolid className="text-2xl" />
        </Button>
      </div>
    </div>
  );
}

export default Nav;
