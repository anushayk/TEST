import { assetsData } from "./mockdata.json";

const retCapacity = () => {
  return (
    <>
      <div className="data-calc">
        {assetsData.map((a, index) => {
          return <div key={index}>{a.capacity}</div>;
        })}
      </div>
    </>
  );
};

export default retCapacity;
