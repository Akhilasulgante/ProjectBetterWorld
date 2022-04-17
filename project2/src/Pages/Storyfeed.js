import React from "react";
import PropTypes from "prop-types";
import "../Styling/Stories.css";

/**
 * This component displays stories that been input from the user
 *
 * @param   {object}  story  [Minimongo instance]
 *
 */
const storyfeed = ({ story }) => {
  return (
    <div>
      <ul>
        {story.map((story, i) => (
          <li key={"story" + i}>
            <label className="name" name="Fname">
              Angel Name:{story.name}{" "}
            </label>
            <label>Helping story:</label>
            {story.stor}
            {""}
          </li>
        ))}
      </ul>
    </div>
  );
};

storyfeed.propTypes = {
  story: PropTypes.array.isRequired,
};

export default storyfeed;
