import { BackButton } from "../../components/BackButton/BackButton";
import { PrimaryButton } from "../../components/Buttons/Buttons";
import { FieldInput } from "../../components/Fields/Fields";
import { useInsertSpeaker } from "../../hooks/useInsertSpeaker";
import "./RegisterSpeakerPage.css";

export const RegisterSpeakerPage = () => {
  const { speaker, handleChange, handleSubmit } = useInsertSpeaker();

  return (
    <section className="container-page flex-center-column registerSpeakersPage">
      <BackButton />
      <h1 className="title">Nuevo orador</h1>
      <form onSubmit={handleSubmit} className="registerSpeakersPage--form">
        <FieldInput
          onChange={(e) => handleChange("speaker_name", e.target.value)}
          label="Nombre completo"
          value={speaker.speaker_name}
        />
        <PrimaryButton type="submit" width="full">
          Guardar
        </PrimaryButton>
      </form>
    </section>
  );
};
