/* eslint-disable @typescript-eslint/no-non-null-asserted-optional-chain */
/* eslint-disable @typescript-eslint/no-non-null-assertion */
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
        {outputs.length > 0 ? (
          <>
            {outputs.map((output) => (
              <SpeakerOutputItem
                key={output.id}
                id={output?.id!}
                date={output.output_date}
                congregation={output.congregation}
              />
            ))}
          </>
        ) : (
          <p>El hermano no ha tenido salidas</p>
        )}
      </ul>
    </div>
  );
};
