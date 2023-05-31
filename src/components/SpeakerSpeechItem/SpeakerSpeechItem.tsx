import { CardInfoItem } from "../CardInfoItem/CardInfoItem";
import "./SpeakerSpeechItem.css";

interface Props {
  id?: number;
  title: string;
  song: string;
}

export const SpeakerSpeechItem = ({ id, title, song }: Props) => {
  return (
    <li className="SpeakerSpeechItem" key={id}>
      <CardInfoItem type="speech" data={title} />
      <CardInfoItem type="song" data={song} />
    </li>
  );
};
