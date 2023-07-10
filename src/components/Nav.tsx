import { useState } from "react";
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
    <div className="md:w-32 w-full flex md:flex-col h-24 px-10 md:px-0 relative md:h-screen justify-between items-center md:justify-normal">
      <div className="w-12 h-12 md:mx-auto md:py-10 rounded-xl">
        <img src="/logo.png" alt="weather logo" className="" />
      </div>
      <div className=" md:hidden">Toggle</div>
      <div className="hidden mx-auto mt-20 md:h-80 w-fit md:flex flex-col justify-between">
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
      <div className="hidden absolute bottom-16 md:w-full md:flex justify-center">
        <Button>
          <LiaDoorOpenSolid className="text-2xl" />
        </Button>
      </div>
    </div>
  );
}

export default Nav;
