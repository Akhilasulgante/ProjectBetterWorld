import React, { useState, useEffect } from "react";
import "../Styling/Stories.css";
import StoryForm from "./StoryForm";
import Storydisplay from "./Storydisplay";
import PropTypes from "prop-types";

/**
 * This component displays the story that user inputs
 * @param   {Object}  story  [MiniMongo instance]
 *
 */
const Stories = ({ story }) => {
  const [ustory, setustory] = useState([]);

  async function reloadStory() {
    let dbStories = await story.getStory({});
    setustory([...dbStories]);
  }
  useEffect(() => {
    reloadStory();
    return;
  }, []);

  async function onCreateStory(newStory) {
    console.log("Created stories", newStory);
    await story.CreateStories(newStory);
    console.log("After await", newStory);
    await reloadStory();
    console.log("After reloading");
  }

  return (
    <div>
      <div>
        <StoryForm story={ustory} onCreateStory={onCreateStory}></StoryForm>
      </div>
      <div>
        <Storydisplay story={ustory}></Storydisplay>
      </div>
    </div>
  );
};

Stories.propTypes = {
  story: PropTypes.object.isRequired,
};

export default Stories;
