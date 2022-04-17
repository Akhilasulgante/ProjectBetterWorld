import React from "react";
import "../Styling/Home.css";
import { useNavigate } from "react-router-dom";

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
      <button>
        <img
          className="image"
          id="1"
          src="https://themefisher.com/wp-content/uploads/edd/2019/09/wishfund-charity-theme.jpg"
          alt="not loading?"
          onClick={() => {
            setBtnId("0");
            navigate("/CauseSelect");
          }}
        />
      </button>
      <button>
        <img
          className="image"
          id="2"
          src="https://pro2-bar-s3-cdn-cf4.myportfolio.com/568595379bdecc1abb8de646418f0f2a/f17398f1224e98482e5b6bfd_rw_1920.jpg?h=c58f5076359ffc9433be9b401a2829ca"
          alt="not loading?"
          onClick={() => {
            setBtnId("1");
            navigate("/CauseSelect");
          }}
        />
      </button>
      <button>
        <img
          className="image"
          id="3"
          src="https://pro2-bar-s3-cdn-cf4.myportfolio.com/568595379bdecc1abb8de646418f0f2a/f17398f1224e98482e5b6bfd_rw_1920.jpg?h=c58f5076359ffc9433be9b401a2829ca"
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
