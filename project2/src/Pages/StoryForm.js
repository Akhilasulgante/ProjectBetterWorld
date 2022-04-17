import React, { useState } from "react";
import propTypes from "prop-types";
import "../Styling/Stories.css";

/**
 * This component consists of input textboxes for users to input data and a button to submit
 *
 * @param   {object}  story
 * @param   {function}  onCreateStory
 *
 */
const StoryForm = ({ story, onCreateStory }) => {
  const [name, setName] = useState("");
  const [stor, setStor] = useState("");

  function onCreateStoryHandler(e) {
    e.preventDefault();

    const newStory = { name: name, stor: stor };
    console.log("Before oncreate is called", newStory);
    onCreateStory(newStory);

    setName("");
    setStor("");
  }

  return (
    <section>
      <h2>Share your story</h2>

      <form onSubmit={onCreateStoryHandler}>
        <div>
          <label className="name">
            Name:{" "}
            <input
              type="text"
              name="name"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
          </label>
        </div>

        <div>
          <label>
            Your Story:{" "}
            <input
              type="text"
              name="stor"
              value={stor}
              onChange={(e) => {
                setStor(e.target.value);
              }}
            />
          </label>
        </div>

        <div>
          <button type="submit" className="btnstory" name="strybtn">
            Share
          </button>
        </div>
      </form>
    </section>
  );
};

StoryForm.propTypes = {
  story: propTypes.array.isRequired,
  onCreateStory: propTypes.func.isRequired,
};

export default StoryForm;
