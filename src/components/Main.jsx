import react from "react";
import DisplayItems from "./DisplayItems";
import ShowSelectedItem from "./ShowSelectedItem";
import LeftDiv from "./LeftDiv";
import RightDiv from "./RightDiv";


const Main = () => {

  return (
    <div className="main">

    <div className="left">
      <LeftDiv />
    </div>

    <div className="right">
    <RightDiv/>
    </div>

     
    </div>
  );
};

export default Main;
