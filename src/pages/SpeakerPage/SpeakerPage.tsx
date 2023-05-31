import { CardInfoItem } from "../../components/CardInfoItem/CardInfoItem";
import { BackButton } from "../../components/BackButton/BackButton";
import {
  PrimaryButton,
  SecondaryButton,
} from "../../components/Buttons/Buttons";
import "./SpeakerPage.css";
import { useNavigate, useParams } from "react-router-dom";
import { useGetSpeakerById } from "../../hooks/useGetSpeakerById";
import { useGetSpeechBySpeakerId } from "../../hooks/useGetSpeechBySpeakerId";

export const SpeakerPage = () => {
  const { id } = useParams();
  const parsedId = parseInt(id!);

  const navigate = useNavigate();
  const { speaker } = useGetSpeakerById(parsedId);
  const { speeches } = useGetSpeechBySpeakerId(parsedId);

  return (
    <section className="container-page flex-center-column speakerPage">
      <BackButton />
      <h1 className="title">{speaker?.speaker_name}</h1>
      <div className="speakerPage--buttons">
        <PrimaryButton onClick={() => navigate("/register-output")}>
          Nueva salida
        </PrimaryButton>
        <SecondaryButton onClick={() => navigate("/register-speech")}>
          Nuevo discurso
        </SecondaryButton>
      </div>
      <div className="SpeakerOutputsList">
        <h3>Salidas</h3>
        <ul>
          <li className="SpeakerOutputItem">
            <CardInfoItem type="speech" data="Hazte amigo de Jehova" />
            <CardInfoItem type="date" data="10/08/23" />
            <CardInfoItem type="congregation" data="Zaragoza" />
            <CardInfoItem type="song" data="Una oracion ferviente" />
          </li>
          <li className="SpeakerOutputItem">
            <CardInfoItem type="speech" data="Hazte amigo de Jehova" />
            <CardInfoItem type="date" data="10/08/23" />
            <CardInfoItem type="congregation" data="Zaragoza" />
            <CardInfoItem type="song" data="Una oracion ferviente" />
          </li>
        </ul>
      </div>
      <div className="SpeakerSpeechesList">
        <h3>Discursos</h3>
        <ul className="SpeakerSpeechesList">
          {speeches.map((speech) => (
            <li className="SpeakerSpeechItem" key={speech.id}>
              <CardInfoItem type="speech" data={speech.speech_title} />
              <CardInfoItem type="song" data={speech.speech_song} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};
