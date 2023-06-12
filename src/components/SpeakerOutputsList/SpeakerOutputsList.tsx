import { useGetOutputsBySpeakerId } from "../../hooks/useGetOutputsBySpeakerId";
import { SpeakerOutputItem } from "../SpeakerOutputItem/SpeakerOutputItem";
import "./SpeakerOutputsList.css";

interface Props {
  speakerId: number;
}

export const SpeakerOutputsList = ({ speakerId }: Props) => {
  const { outputs } = useGetOutputsBySpeakerId(speakerId);
  console.log(outputs);

  return (
    <div className="SpeakerOutputsList">
      <h3>Salidas</h3>
      <ul>
        {outputs.map((output) => (
          <SpeakerOutputItem
            date={output.output_date}
            congregation={output.congregation}
          />
        ))}
      </ul>
    </div>
  );
};
