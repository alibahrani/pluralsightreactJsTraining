export default function SpeakerAdd({ eventYear, insertRecord }) {
  return (
    <a href="#" className="addSes">
      <i
        onClick={(e) => {
          e.preventDefault();
          const firstLast = window.prompt("enter first and last name:", "");
          const firstLastArray = firstLast.split(" ");
          insertRecord({
            id: "99999",
            first: firstLastArray[0],
            last: firstLastArray[1],
            bio: "bio not entered yet",
            sessions: [
              {
                id: "8888",
                title: `New session for ${firstLastArray}`,
                room: {
                  name: "Main ball room",
                },
                eventYear,
              },
            ],
          });
        }}
      >
        +
      </i>
    </a>
  );
}
