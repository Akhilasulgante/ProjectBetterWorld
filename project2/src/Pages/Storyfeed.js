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
      <div>
        {story.map((story, i) => (
          <div key={"story" + i}>
            <label className="Fname" name="Fname">
              Angel Name:{story.name}{" "}
            </label>
            <div>
              <label>
                Helping story:
                {story.stor}
                {""}
              </label>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

storyfeed.propTypes = {
  story: PropTypes.array.isRequired,
};

export default storyfeed;
