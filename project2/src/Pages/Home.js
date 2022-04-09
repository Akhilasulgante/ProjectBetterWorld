import React from "react";
import "../Styling/Home.css";

function PeriodCause() {
  console.log("clicked");
}

export default function Home() {
  return (
    <div>
      <button>
        <img
          className="image"
          src="https://themefisher.com/wp-content/uploads/edd/2019/09/wishfund-charity-theme.jpg"
          alt="not loading?"
          onClick={PeriodCause}
        />
      </button>
      <button>
        <img
          className="image"
          src="https://pro2-bar-s3-cdn-cf4.myportfolio.com/568595379bdecc1abb8de646418f0f2a/f17398f1224e98482e5b6bfd_rw_1920.jpg?h=c58f5076359ffc9433be9b401a2829ca"
          alt="not loading?"
          onClick={PeriodCause}
        />
      </button>
      <button>
        <img
          className="image"
          src="https://pro2-bar-s3-cdn-cf4.myportfolio.com/568595379bdecc1abb8de646418f0f2a/f17398f1224e98482e5b6bfd_rw_1920.jpg?h=c58f5076359ffc9433be9b401a2829ca"
          alt="not loading?"
          onClick={PeriodCause}
        />
      </button>
    </div>
  );
}
