import React, { useState } from "react";
import causeData from "../Data/causeData";

// causeData[btnId].donationAm

/**
 * This component displays the total amount that has been donated to a particular cause
 *
 * @return  {[type]}  [return description]
 */
function Amtdonated({ amount, btnId }) {
  return (
    <div>
      <div className="amtdonated">
        <label>Amount donated</label>
        <label>{amount}</label>
      </div>
    </div>
  );
}

export default Amtdonated;
