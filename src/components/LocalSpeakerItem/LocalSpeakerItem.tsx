import { BiUser } from "react-icons/bi";
import "./LocalSpeakerItem.css";

interface Props {
  name: string;
}

export const LocalSpeakerItem = ({ name }: Props) => {
  return (
    <li className="localSpeakerItem">
      <BiUser size="20" color="345996" />
      <p>{name}</p>
    </li>
  );
};
