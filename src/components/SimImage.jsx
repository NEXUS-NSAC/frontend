import CountUp from "react-countup";

import People from "../assets/svg/People";
import BiosphereSvg from "../assets/svg/Biosphere";
import AgriSvg from "../assets/svg/Agri";
import SeaLifeSvg from "../assets/svg/SeaLife";
import QuestionSvg from "../assets/svg/Question";

const SimImage = (props) => {
  const affected = props.affected;

  return (
    <>
      {affected === "Human Life" && (
        <>
          <People className="w-20 h-20" style={{ color: props.color, width: "100%", height: "90%", fill: props.color }} />
          <CountUp className="text-7xl" start={props.humanImpact / 2} end={props.humanImpact} duration={Math.random() * 10} suffix={props.suffix} style={{ color: props.color }} />
        </>
      )}
      {affected === "Animal Life" && (
        <>
          <BiosphereSvg className="w-20 h-20" style={{ color: props.color, width: "100%", height: "90%", fill: props.color }} />
          <CountUp className="text-7xl" start={props.animalImpact / 2} end={props.animalImpact} duration={Math.random() * 10} suffix={props.suffix} style={{ color: props.color }} />
        </>
      )}
      {affected === "Agriculture" && (
        <>
          <AgriSvg className="w-20 h-20" style={{ color: props.color, width: "100%", height: "90%", fill: props.color }} />
          <CountUp className="text-7xl" start={props.treeImpact / 2} end={props.treeImpact} duration={Math.random() * 10} suffix={props.suffix} style={{ color: props.color }} />
        </>
      )}
      {affected === "Aquatic Life" && (
        <>
          <SeaLifeSvg className="w-20 h-20" style={{ color: props.color, width: "100%", height: "90%", fill: props.color }} />
          <CountUp className="text-7xl" start={props.aquaticImpact / 2} end={props.aquaticImpact} duration={Math.random() * 10} suffix={props.suffix} style={{ color: props.color }} />
        </>
      )}
      {!["Human Life", "Animal Life", "Agriculture", "Aquatic Life"].includes(affected) && (
        <>
          <div className="mt-10">
            <QuestionSvg className="w-20 h-20 m-auto my-16" style={{ color: "white", width: "200%", height: "200%", fill: "white" }} />
            <h1 className="text-4xl font-bold mb-7">_ _</h1>
          </div>
        </>
      )}
    </>
  );
};

export default SimImage;
