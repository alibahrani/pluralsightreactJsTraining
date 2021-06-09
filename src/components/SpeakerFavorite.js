import React, { useContext, useState } from "react";
import { SpeakerContext } from "../context/SpeakerContext";

export default function SpeakerFavorite() {
  const { speaker, updateRecord } = useContext(SpeakerContext);
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
          updateRecord(
            {
              ...speaker,
              favorite: !speaker.favorite,
            },
            doneCallback
          );
        }}
      >
        <i
          className={
            speaker.favorite === true
              ? "fa fa-star orange"
              : "fa fa-star-o orange"
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
