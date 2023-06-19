/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { BiTrash } from "react-icons/bi";
import { useSpeech } from "../../hooks/useSpeech";
import "./SpeakerSpeechItem.css";

interface Props {
  id?: number;
  title: string;
}

export const SpeakerSpeechItem = ({ id, title }: Props) => {
  const { removeSpeech } = useSpeech();

  const handleClickDelete = async () => {
    const response = await removeSpeech(id!);
    if (response.success) document.location.reload();
  };

  return (
    <li className="SpeakerSpeechItem">
      <p>{title}</p>
      <BiTrash size="20" color="F24C3D" onClick={handleClickDelete} />
    </li>
  );
};
