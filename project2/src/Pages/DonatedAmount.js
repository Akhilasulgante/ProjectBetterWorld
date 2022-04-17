import React from "react";

const DonatedAmount = () => {
  return (
    <div>
      <div className="donatebox">
        <label>Donate to make a change:</label>
        <input type="text" name="amt" />
        <button type="submit">Donate</button>
      </div>
    </div>
  );
};

export default DonatedAmount;
