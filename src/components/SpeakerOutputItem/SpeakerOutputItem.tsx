import { CardInfoItem } from "../CardInfoItem/CardInfoItem";
import "./SpeakerOutputsList.css";

interface Props {
  speech: string;
  date: string;
  congregation: string;
  song: string;
}

export const SpeakerOutputItem = ({
  speech,
  date,
  congregation,
  song,
}: Props) => {
  return (
    <li className="SpeakerOutputItem">
      <CardInfoItem type="speech" data={speech} />
      <CardInfoItem type="date" data={date} />
      <CardInfoItem type="congregation" data={congregation} />
      <CardInfoItem type="song" data={song} />
    </li>
  );
};
