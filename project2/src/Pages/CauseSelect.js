import React, { useEffect, useState } from "react";
import "../Styling/CauseSelect.css";
import causeData from "../Data/causeData";
import Amtdonated from "./Amtdonated";
import DonatedAmount from "./DonatedAmount";

/**
 * This compenent will display content based on the button that was clicked in Home page
 *
 * @param   {object}  props
 *
 */
function CauseSelect(props) {
  const { btnId } = props;
  const [Amount, setAmount] = useState(0);
  console.log("btnId", btnId);
  console.log(causeData[btnId].title);

  useEffect(() => {
    setAmount(causeData[btnId].donationAmt);
  }, []);

  return (
    <div>
      <div>
        <h3 className="title"> {causeData[btnId].title}</h3>
      </div>
      <div className="desc">
        <p>
          {causeData[btnId].Desc1} <br /> {causeData[btnId].Desc2}
        </p>
        <Amtdonated amount={Amount} btnId={btnId}></Amtdonated>
      </div>
      <DonatedAmount btnId={btnId} setAmount={setAmount}></DonatedAmount>
      <div>
        <img src={causeData[btnId].img} alt="Not loading" />
      </div>
    </div>
  );
}

export default CauseSelect;
