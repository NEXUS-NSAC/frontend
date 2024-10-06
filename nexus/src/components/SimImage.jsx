import CountUp from "react-countup";


import People from "../assets/svg/People";
import BiosphereSvg from "../assets/svg/Biosphere";
import AgriSvg from "../assets/svg/Agri";
import SeaLifeSvg from "../assets/svg/SeaLife";

const SimImage = (props) => {

    const affected = props.affected;


  return (
    <>
      {affected === "People" && (
        <>
          <People className="w-20 h-20" style={{ color: props.color, width: "100%", height: "90%", fill: props.color }} />
          <CountUp className="text-7xl" start={props.value / 2} end={props.value} duration={Math.random() * 10} suffix={props.suffix} />
        </>
      )}
      {affected === "Biosphere" && (
        <>
          <BiosphereSvg className="w-20 h-20" style={{ color: props.color, width: "100%", height: "90%", fill: props.color }} />
          <CountUp className="text-7xl" start={props.value/ 2} end={props.value} duration={Math.random() * 10} suffix={props.suffix} />
        </>
      )}
      {affected === "Agriculture" && (
        <>
          <AgriSvg className="w-20 h-20" style={{ color: props.color, width: "100%", height: "90%", fill: props.color }} />
          <CountUp className="text-7xl" start={props.value/ 2} end={props.value} duration={Math.random() * 10} suffix={props.suffix} />
        </>
      )}
      {affected === "Sea Life" && (
        <>
          <SeaLifeSvg className="w-20 h-20" style={{ color: props.color, width: "100%", height: "90%", fill: props.color }} />
          <CountUp className="text-7xl" start={props.value/ 2} end={props.value} duration={Math.random() * 10} suffix={props.suffix} />
        </>
      )}
    </>
  );
}

export default SimImage;
