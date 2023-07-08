import { Button } from "./ui/Button";
import { BsWind, BsThermometerHalf, BsUmbrella } from "react-icons/bs";

function Today() {
  return (
    <div className=" bg-slate-300 col-span-8 text-accentSecondary rounded-2xl">
      <div className="p-8">
        <div className="flex justify-between">
          <h1 className="text-2xl font-semibold">
            How's the <br /> temperature today?
          </h1>
          <div className="space-x-2">
            <Button variant={"navFocus"}>
              <BsThermometerHalf />
            </Button>
            <Button>
              <BsUmbrella />
            </Button>
            <Button>
              <BsWind />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Today;
