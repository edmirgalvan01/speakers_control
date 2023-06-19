import { useFormatDate } from "../../hooks/useFormatDate";
import { CardInfoItem } from "../CardInfoItem/CardInfoItem";
import "./SpeakerOutputsList.css";

interface Props {
  date: string;
  congregation: string;
}

export const SpeakerOutputItem = ({ date, congregation }: Props) => {
  const dateToUse = useFormatDate(date);

  return (
    <li className="SpeakerOutputItem">
      <CardInfoItem type="date" data={dateToUse} />
      <CardInfoItem type="congregation" data={congregation} />
    </li>
  );
};
