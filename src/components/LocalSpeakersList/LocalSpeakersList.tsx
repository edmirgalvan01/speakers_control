import { LocalSpeakerItem } from "../LocalSpeakerItem/LocalSpeakerItem";
import "./LocalSpeakersList.css";

export const LocalSpeakersList = () => {
  return (
    <ul className="localSpeakersList">
      <LocalSpeakerItem name="Jhonathan Olmos" />
      <LocalSpeakerItem name="Isaac Gomez" />
      <LocalSpeakerItem name="Marcos Sanchez" />
      <LocalSpeakerItem name="Sergio Herrera" />
      <LocalSpeakerItem name="David Lopez" />
      <LocalSpeakerItem name="Sirenio Gomez" />
    </ul>
  );
};
