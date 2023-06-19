/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { BiTrash } from "react-icons/bi";
import { useOutput } from "../../hooks/useOutput";
import { useFormatDate } from "../../hooks/useFormatDate";
import { CardInfoItem } from "../CardInfoItem/CardInfoItem";
import "./SpeakerOutputItem.css";

interface Props {
  date: string;
  congregation: string;
  id: number;
}

export const SpeakerOutputItem = ({ date, congregation, id }: Props) => {
  const { removeOutput } = useOutput();
  const dateToUse = useFormatDate(date);

  const handleClickDelete = async () => {
    const response = await removeOutput(id);
    if (response.success) document.location.reload();
  };

  return (
    <li className="SpeakerOutputItem">
      <div className="info">
        <CardInfoItem type="date" data={dateToUse} />
        <CardInfoItem type="congregation" data={congregation} />
      </div>
      <BiTrash size="20" color="F24C3D" onClick={handleClickDelete} />
    </li>
  );
};
