import { CardInfoItem } from "../../components/CardInfoItem/CardInfoItem";
import { BackButton } from "../../components/BackButton/BackButton";
import {
  PrimaryButton,
  SecondaryButton,
} from "../../components/Buttons/Buttons";
import "./SpeakerPage.css";
import { useNavigate } from "react-router-dom";

export const SpeakerPage = () => {
  const navigate = useNavigate();

  return (
    <section className="container-page flex-center-column speakerPage">
      <BackButton />
      <h1 className="title">Edmir Galvan</h1>
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
          <li className="SpeakerSpeechItem">
            <CardInfoItem type="speech" data="Hazte amigo de Jehova" />
            <CardInfoItem type="song" data="Una oracion ferviente" />
          </li>
          <li className="SpeakerSpeechItem">
            <CardInfoItem type="speech" data="Hazte amigo de Jehova" />
            <CardInfoItem type="song" data="Una oracion ferviente" />
          </li>
        </ul>
      </div>
    </section>
  );
};
