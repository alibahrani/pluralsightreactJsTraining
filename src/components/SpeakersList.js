import Speaker from "./Speaker";

export default function SpeakersList({ data, showSessions }) {
  return (
    <div className="container speaker-list">
      <div className="row">
        {data.map(function (speaker) {
          return (
            <Speaker
              id={speaker.id}
              speaker={speaker}
              showSessions={showSessions}
            />
          );
        })}
      </div>
    </div>
  );
}
