import React, { useState } from "react";

export default function SpeakerFavorite({ favorite, onFavoriteToggle }) {
  const [inTransition, setInTransition] = useState(false);
  function doneCallback() {
    setInTransition(false);
    console.log(
      `In SpekaerFavorite: doneCallback ${new Date().getMilliseconds()}`
    );
  }
  return (
    <div className="action padb1">
      <span
        onClick={function () {
          setInTransition(true);
          return onFavoriteToggle(doneCallback);
        }}
      >
        <i
          className={
            favorite === true ? "fa fa-star orange" : "fa fa-star-o orange"
          }
        />{" "}
        Favorite{" "}
        {inTransition ? (
          <span className="fas fa-circle-notch fa-spin"></span>
        ) : null}
      </span>
    </div>
  );
}
