import { useState } from "react";
import Logo from "../assets/logo/logo.png";
import { RxDashboard } from "react-icons/rx";
import { TbSettings2 } from "react-icons/tb";
import { SlLocationPin } from "react-icons/sl";
import { Button, buttonVariants } from "./ui/Button";

function Nav() {
  const [isFocused, setIsFocused] = useState(true);
  const handleButtonFocus = () => {
    setIsFocused(isFocused);
  };
  return (
    <div className="w-32 h-screen">
      <img
        src={Logo}
        alt="weather logo"
        className="w-12 mx-auto py-10 rounded-full"
      />
      <div className="mx-auto mt-24 w-fit flex flex-col space-y-16">
        <Button
          className={buttonVariants({ variant: "navFocus" })}
          onClick={handleButtonFocus}
        >
          <RxDashboard />
        </Button>
        <Button>
          <SlLocationPin />
        </Button>
        <Button>
          <TbSettings2 />
        </Button>
      </div>
    </div>
  );
}

export default Nav;
