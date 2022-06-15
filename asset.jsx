import Image from "next/image";
import classNames from "classnames";
import thing from "/public/thing.png";
import ProgressBar from "./progressbar";

const Asset = ({ assetName, capacity }) => {
  return (
    <div className="bg-white flex h-screen items-center justify-center">
      <div className="min-h-[7rem] w-64 overflow-hidden bg-gray shadow-lg">
        <div className="flex items-center justify-start gap-1">
          <div className="mt-4 ml-5 flex h-20 w-20 object-contain pr-2">
            <Image src={thing} width="350px" height="340px" />
          </div>

          <div className="flex flex-col items-start">
            <p className="mt-2 flex pt-1 font-sans font-bold opacity-70">{assetName}</p>

            <div className="flex flex-row items-center justify-end gap-2">
              {/* <ProgressBar key={}, yellow={}, green={}, red={}, width={} /> */}
              <div class="mt-2 mr-2 font-sans text-xs opacity-80"> {capacity}%</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Asset;
