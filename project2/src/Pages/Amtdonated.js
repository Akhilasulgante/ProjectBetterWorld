import React, { useState } from "react";
import causeData from "../Data/causeData";

/**
 * This component displays the total amount that has been donated to a particular cause
 *
 * @return  {[type]}  [return description]
 */
const Amtdonated = ({ Amount, btnId }) => {
  const [buttonId, setButtonId] = useState([]);
  const [amt, setAmt] = useState([]);
  console.log(buttonId, "in Amtdonated");

  return (
    <div>
      <div className="amtdonated">
        <label>Amount donated</label>
        <label>{causeData[buttonId].donationAmt}</label>
      </div>
    </div>
  );
};

export default Amtdonated;
