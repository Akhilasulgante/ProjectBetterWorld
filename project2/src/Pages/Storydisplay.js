import React from "react";
import PropTypes from "prop-types";
import Storyfeed from "./Storyfeed";

/**
 * This component displays all the user stories stored in MiniMongo
 *
 * @param   {object}  story  [minimongo instance]
 *
 */
const Storydisplay = ({ story }) => {
  return (
    <div>
      <div>
        <lable>Displaying?</lable>
        <Storyfeed story={story}></Storyfeed>
      </div>
    </div>
  );
};

Storydisplay.propTypes = {
  story: PropTypes.array.isRequired,
};

export default Storydisplay;
