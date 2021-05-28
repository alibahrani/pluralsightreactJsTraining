import { useState } from "react";
import SpeakerToolbar from "./SpeakerToolbar";
import SpeakersList from "./SpeakersList";

export default function Speakers({ data, theme, setTheme }) {
  const [showSessions, setShowSessions] = useState(true);

  return (
    <>
      <SpeakerToolbar
        theme={theme}
        setTheme={setTheme}
        showSessions={showSessions}
        setShowSessions={setShowSessions}
      />
      <SpeakersList data={data} showSessions={showSessions} />
    </>
  );
}
