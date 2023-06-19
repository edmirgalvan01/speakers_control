import { BiTrash } from "react-icons/bi";
import { useFormatDate } from "../../hooks/useFormatDate";
import { CardInfoItem } from "../CardInfoItem/CardInfoItem";
import "./SpeakerOutputItem.css";

interface Props {
  date: string;
  congregation: string;
}

export const SpeakerOutputItem = ({ date, congregation }: Props) => {
  const dateToUse = useFormatDate(date);

  return (
    <li className="SpeakerOutputItem">
      <div className="info">
        <CardInfoItem type="date" data={dateToUse} />
        <CardInfoItem type="congregation" data={congregation} />
      </div>
      <BiTrash size="20" color="F24C3D" />
    </li>
  );
};
