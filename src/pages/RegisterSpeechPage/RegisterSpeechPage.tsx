/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { useParams } from "react-router-dom";
import { BackButton } from "../../components/BackButton/BackButton";
import { PrimaryButton } from "../../components/Buttons/Buttons";
import { FieldInput } from "../../components/Fields/Fields";
import { useInsertSpeech } from "../../hooks/useInsertSpeech";
import "./RegisterSpeechPage.css";

export const RegisterSpeechPage = () => {
  const { speakerId } = useParams();

  const { speech, handleChange, handleSubmit } = useInsertSpeech(
    parseInt(speakerId!)
  );

  return (
    <section className="registerSpeechPage container-page flex-center-column">
      <BackButton />
      <h1 className="title">Nuevo discurso</h1>
      <form
        className="registerSpeechPage flex-center-column"
        onSubmit={handleSubmit}
      >
        <FieldInput
          onChange={(e) => handleChange("speech_title", e.target.value)}
          label="Titulo"
          value={speech.speech_title}
        />
        <FieldInput
          onChange={(e) => handleChange("speech_song", e.target.value)}
          label="Cántico"
          value={speech.speech_song}
        />
        <PrimaryButton width="full">Guardar</PrimaryButton>
      </form>
    </section>
  );
};
