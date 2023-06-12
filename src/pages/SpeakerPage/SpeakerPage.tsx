/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { SpeakerSpeechesList } from "../../components/SpeakerSpeechesList/SpeakerSpeechesList";
import { BackButton } from "../../components/BackButton/BackButton";
import {
  PrimaryButton,
  SecondaryButton,
} from "../../components/Buttons/Buttons";
import "./SpeakerPage.css";
import { useNavigate, useParams } from "react-router-dom";
import { useGetSpeakerById } from "../../hooks/useGetSpeakerById";
import { SpeakerOutputsList } from "../../components/SpeakerOutputsList/SpeakerOutputsList";

export const SpeakerPage = () => {
  const navigate = useNavigate();

  const { id } = useParams();
  const parsedId = parseInt(id!);

  const { speaker } = useGetSpeakerById(parsedId);

  return (
    <section className="container-page flex-center-column speakerPage">
      <BackButton />
      <h1 className="title">{speaker?.speaker_name}</h1>
      <div className="speakerPage--buttons">
        <PrimaryButton onClick={() => navigate(`/register-output/${parsedId}`)}>
          Nueva salida
        </PrimaryButton>
        <SecondaryButton
          onClick={() => navigate(`/register-speech/${parsedId}`)}
        >
          Nuevo discurso
        </SecondaryButton>
      </div>
      <SpeakerOutputsList speakerId={parsedId} />
      <SpeakerSpeechesList speakerId={parsedId} />
    </section>
  );
};
