import { useGetLocalSpeakers } from "../../hooks/useGetLocalSpeakers";
import { LocalSpeakerItem } from "../LocalSpeakerItem/LocalSpeakerItem";

import "./LocalSpeakersList.css";

export const LocalSpeakersList = () => {
  const { speakers } = useGetLocalSpeakers();

  return (
    <ul className="localSpeakersList">
      {speakers.map((speaker) => (
        <LocalSpeakerItem
          key={speaker.id}
          id={speaker.id!}
          name={speaker.speaker_name}
        />
      ))}
    </ul>
  );
};
