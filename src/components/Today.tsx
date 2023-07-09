import { Button } from "./ui/Button";
import { BsWind, BsThermometerHalf, BsUmbrella } from "react-icons/bs";

function Today() {
  return (
    <div className="md:col-span-8 min-h-[4rem] h-72 max-h-[20rem] text-accentSecondary rounded-2xl">
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
