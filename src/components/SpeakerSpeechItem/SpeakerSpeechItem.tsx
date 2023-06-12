import "./SpeakerSpeechItem.css";

interface Props {
  id?: number;
  title: string;
}

export const SpeakerSpeechItem = ({ id, title }: Props) => {
  return (
    <li className="SpeakerSpeechItem" key={id}>
      <p>{title}</p>
    </li>
  );
};
