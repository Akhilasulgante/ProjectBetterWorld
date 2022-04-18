import React from "react";
import { useState } from "react";
import causeData from "../Data/causeData";

const DonatedAmount = ({ btnId, setAmount }) => {
  const [enteredAmt, setEnteredAmt] = useState(0);
  function addAmtToDonation(donationSoFar, addedDonation) {
    let final = donationSoFar + parseInt(addedDonation);
    setAmount(final);

    console.log(final, "final");
  }

  return (
    <div>
      <div className="donatebox">
        <label>Donate to make a change:</label>
        <input
          type="text"
          name="amt"
          value={enteredAmt}
          onChange={(e) => setEnteredAmt(e.target.value)}
        />
        <button
          type="submit"
          onClick={() =>
            addAmtToDonation(causeData[btnId].donationAmt, enteredAmt)
          }
        >
          Donate
        </button>
      </div>
    </div>
  );
};

export default DonatedAmount;
