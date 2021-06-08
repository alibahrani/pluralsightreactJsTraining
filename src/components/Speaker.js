import SpeakerFavorite from "./SpeakerFavorite";
import { SpeakerFilterContext } from "../context/SpeakerFilterContext";
import { useContext } from "react";
function Session({ title, room }) {
  return (
    <span className="session w-100">
      {title} <strong>Room: {room.name}</strong>
    </span>
  );
}

function Sessions({ sessions }) {
  const { eventYear } = useContext(SpeakerFilterContext);
  return (
    <div className="sessionBox card h-200">
      {sessions
        .filter(function (session) {
          return session.eventYear === eventYear;
        })
        .map(function (session) {
          return (
            <div>
              <Session {...session} />
            </div>
          );
        })}
    </div>
  );
}

function SpeakerImage({ id, first, last }) {
  return (
    <div className="speaker-img d-flex flex-row justifiy-content-center align-items-center h-300">
      <img
        className="contain-fit"
        src={`/images/speaker-${id}.jpg`}
        width="300"
        alt={`${first} ${last}`}
      />
    </div>
  );
}

function SpeakerInfo({
  first,
  last,
  bio,
  company,
  twitterHandle,
  favorite,
  onFavoriteToggle,
}) {
  return (
    <div className="speaker-info">
      <div className="d-flex justify-content-between mb-3">
        <h3 className="text-truncate w-200">
          {first} {last}
        </h3>
      </div>
      <SpeakerFavorite
        favorite={favorite}
        onFavoriteToggle={onFavoriteToggle}
      />
      <div>
        <p className="card-description">{bio}</p>
        <div className="social d-flex flex-row mt-4">
          <div className="company">
            <h5>Company</h5>
            <h6>{company}</h6>
          </div>
          <div className="twitter">
            <h5>Twitter</h5>
            <h6>{twitterHandle}</h6>
          </div>
        </div>
      </div>
    </div>
  );
}
function Speaker({ speaker, onFavoriteToggle }) {
  const { id, first, last, sessions } = speaker;
  const { showSessions } = useContext(SpeakerFilterContext);
  return (
    <div className="col-xs-12 col-sm-12 col-md-6 col-lg-4 col-sm-12 col-xs-12">
      <div className="card card-height p-4 mt-4">
        <SpeakerImage id={id} first={first} last={last} />
        <SpeakerInfo {...speaker} onFavoriteToggle={onFavoriteToggle} />
      </div>
      {showSessions && <Sessions sessions={sessions} />}
    </div>
  );
}

export default Speaker;
