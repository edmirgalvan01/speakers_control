import { CardInfoItem } from "../CardInfoItem/CardInfoItem";
import "./SpeakerOutputsList.css";

interface Props {
  date: string;
  congregation: string;
}

export const SpeakerOutputItem = ({ date, congregation }: Props) => {
  return (
    <li className="SpeakerOutputItem">
      <CardInfoItem type="date" data={date} />
      <CardInfoItem type="congregation" data={congregation} />
    </li>
  );
};
