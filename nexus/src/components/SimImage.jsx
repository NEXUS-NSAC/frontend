import CountUp from "react-countup";


import People from "../assets/svg/People";
import BiosphereSvg from "../assets/svg/Biosphere";
import AgriSvg from "../assets/svg/Agri";
import SeaLifeSvg from "../assets/svg/SeaLife";

const SimImage = (props) => {

    const affected = props.affected;


  return (
    <>
      {affected === "Human Life" && (
        <>
          <People className="w-20 h-20" style={{ color: props.color, width: "100%", height: "90%", fill: props.color }} />
          <CountUp className="text-7xl" start={props.value / 2} end={props.value} duration={Math.random() * 10} suffix={props.suffix}  style={{ color: props.color }} />
        </>
      )}
      {affected === "Animal Life" && (
        <>
          <BiosphereSvg className="w-20 h-20" style={{ color: props.color, width: "100%", height: "90%", fill: props.color }} />
          <CountUp className="text-7xl" start={props.value/ 2} end={props.value} duration={Math.random() * 10} suffix={props.suffix}  style={{ color: props.color }}/>
        </>
      )}
      {affected === "Agriculture" && (
        <>
          <AgriSvg className="w-20 h-20" style={{ color: props.color, width: "100%", height: "90%", fill: props.color }} />
          <CountUp className="text-7xl" start={props.value/ 2} end={props.value} duration={Math.random() * 10} suffix={props.suffix}  style={{ color: props.color }} />
        </>
      )}
      {affected === "Aquatic Life" && (
        <>
          <SeaLifeSvg className="w-20 h-20" style={{ color: props.color, width: "100%", height: "90%", fill: props.color }} />
          <CountUp className="text-7xl" start={props.value/ 2} end={props.value} duration={Math.random() * 10} suffix={props.suffix}  style={{ color: props.color }} />
        </>
      )}
    </>
  );
}

export default SimImage;
