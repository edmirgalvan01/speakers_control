import { useGetOutputsBySpeakerId } from "../../hooks/useGetOutputsBySpeakerId";
import { SpeakerOutputItem } from "../SpeakerOutputItem/SpeakerOutputItem";
import "./SpeakerOutputsList.css";

interface Props {
  speakerId: number;
}

export const SpeakerOutputsList = ({ speakerId }: Props) => {
  const { outputs } = useGetOutputsBySpeakerId(speakerId);

  return (
    <div className="SpeakerOutputsList">
      <h3>Salidas</h3>
      <ul>
        <SpeakerOutputItem
          speech="Hazte amigo de Jehova"
          date="10/08/23"
          congregation="Zaragoza"
          song="Una oracion ferviente"
        />
      </ul>
    </div>
  );
};
