import React from "react";
import "../Styling/Home.css";
import { useNavigate } from "react-router-dom";
import Sanitation from "../Assets/Sanitation.jpg";
import Golbalwarming from "../Assets/Golbalwarming.jpg";
import Hunger from "../Assets/Hunger.jpg";

/**
 * This component displays content of the homepage, it consists images as buttons and when users click on the image, that cause is rendered
 *
 * @param   {object}  props []
 *
 */
export default function Home(props) {
  const { setBtnId } = props;
  const navigate = useNavigate();

  return (
    <div>
      <h1 className="thead">
        We make a living by what we get. We make a life by what we Give.
      </h1>
      <h4 className="thead">
        Select a cause you want to support by clicking below images
      </h4>
      <button className="HomeBtn">
        <img
          className="image"
          id="1"
          src={Hunger}
          alt="not loading?"
          onClick={() => {
            setBtnId("0");
            navigate("/CauseSelect");
          }}
        />
      </button>
      <button className="HomeBtn">
        <img
          className="image"
          id="2"
          src={Golbalwarming}
          alt="not loading?"
          onClick={() => {
            setBtnId("1");
            navigate("/CauseSelect");
          }}
        />
      </button>
      <button className="HomeBtn">
        <img
          className="image"
          id="3"
          src={Sanitation}
          alt="not loading?"
          onClick={() => {
            setBtnId("2");
            navigate("/CauseSelect");
          }}
        />
      </button>
    </div>
  );
}
