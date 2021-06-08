import { useContext } from "react";
import Speaker from "./Speaker";
import ReactPlaceHolder from "react-placeholder";
import useRequestDelay, { REQUEST_STATUS } from "../hooks/useRequestDelay";
import { data } from "../../SpeakerData";
import { SpeakerFilterContext } from "../context/SpeakerFilterContext";

export default function SpeakersList() {
  const {
    data: speakersData,
    requestStatus,
    error,
    updateRecord,
  } = useRequestDelay(200, data);

  const { searchQuery, eventYear } = useContext(SpeakerFilterContext);

  if (requestStatus === REQUEST_STATUS.FAILURE) {
    return (
      <div className="text-danger">
        ERROR: <b>Loading Speaker data failed {error}</b>
      </div>
    );
  }
  return (
    <div className="container speaker-list">
      <ReactPlaceHolder
        type="media"
        className="speakerlist-placeholder"
        ready={requestStatus === REQUEST_STATUS.SUCCESS}
      >
        <div className="row">
          {speakersData
            .filter(function (speaker) {
              return (
                speaker.first.toLowerCase().includes(searchQuery) ||
                speaker.last.toLowerCase().includes(searchQuery)
              );
            })
            .filter(function (speaker) {
              return speaker.sessions.find((session) => {
                return session.eventYear === eventYear;
              });
            })
            .map(function (speaker) {
              return (
                <Speaker
                  id={speaker.id}
                  speaker={speaker}
                  onFavoriteToggle={(doneCallback) =>
                    updateRecord(
                      {
                        ...speaker,
                        favorite: !speaker.favorite,
                      },
                      doneCallback
                    )
                  }
                />
              );
            })}
        </div>
      </ReactPlaceHolder>
    </div>
  );
}
