import { BiTrash } from "react-icons/bi";
import "./SpeakerSpeechItem.css";

interface Props {
  id?: number;
  title: string;
}

export const SpeakerSpeechItem = ({ id, title }: Props) => {
  return (
    <li className="SpeakerSpeechItem" key={id}>
      <p>{title}</p>
      <BiTrash size="20" color="F24C3D" />
    </li>
  );
};
