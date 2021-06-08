import { useState } from "react";
import SpeakerToolbar from "./SpeakerToolbar";
import SpeakersList from "./SpeakersList";
import { SpeakerFilterProvider } from "../context/SpeakerFilterContext";

export default function Speakers() {
  return (
    <SpeakerFilterProvider startingShowSessions={false}>
      <SpeakerToolbar />
      <SpeakersList />
    </SpeakerFilterProvider>
  );
}
