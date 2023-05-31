import { useGetSpeechBySpeakerId } from "../../hooks/useGetSpeechBySpeakerId";
import { CardInfoItem } from "../CardInfoItem/CardInfoItem";
import "./SpeakerSpeechesList.css";

interface Props {
  speakerId: number;
}

export const SpeakerSpeechesList = ({ speakerId }: Props) => {
  const { speeches } = useGetSpeechBySpeakerId(speakerId);

  return (
    <ul className="SpeakerSpeechesList">
      {speeches.length > 0 ? (
        <>
          {speeches.map((speech) => (
            <li className="SpeakerSpeechItem" key={speech.id}>
              <CardInfoItem type="speech" data={speech.speech_title} />
              <CardInfoItem type="song" data={speech.speech_song} />
            </li>
          ))}
        </>
      ) : (
        <p>El hermano no tiene discursos asignados.</p>
      )}
    </ul>
  );
};
