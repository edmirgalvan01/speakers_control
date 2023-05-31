import { useGetSpeechBySpeakerId } from "../../hooks/useGetSpeechBySpeakerId";
import { SpeakerSpeechItem } from "../SpeakerSpeechItem/SpeakerSpeechItem";
import "./SpeakerSpeechesList.css";

interface Props {
  speakerId: number;
}

export const SpeakerSpeechesList = ({ speakerId }: Props) => {
  const { speeches } = useGetSpeechBySpeakerId(speakerId);

  return (
    <div className="SpeakerSpeechesList">
      <h3>Discursos</h3>
      <ul className="SpeakerSpeechesList">
        {speeches.length > 0 ? (
          <>
            {speeches.map((speech) => (
              <SpeakerSpeechItem
                key={speech.id}
                id={speech.id}
                title={speech.speech_title}
                song={speech.speech_song}
              />
            ))}
          </>
        ) : (
          <p>El hermano no tiene discursos asignados.</p>
        )}
      </ul>
    </div>
  );
};
