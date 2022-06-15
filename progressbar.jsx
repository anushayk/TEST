import classNames from "classnames";

const ProgressBar = ({ key, yellow, green, red, width }) => {
  return (
    <div className="mt-2 flex w-{width} h-4 min-w-0 rounded-full bg-gradient-to-r from-{green}/70 via-{yellow}/70 to-{red}/70 shadow-md"></div>
  );
};

export default ProgressBar;
