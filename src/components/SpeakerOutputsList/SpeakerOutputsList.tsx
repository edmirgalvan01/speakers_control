import { SpeakerOutputItem } from "../SpeakerOutputItem/SpeakerOutputItem";
import "./SpeakerOutputsList.css";

export const SpeakerOutputsList = () => {
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
