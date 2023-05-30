import { BackButton } from "../../components/BackButton/BackButton";
import { PrimaryButton } from "../../components/Buttons/Buttons";
import { FieldInput } from "../../components/Fields/Fields";
import "./RegisterSpeechPage.css";

export const RegisterSpeechPage = () => {
  return (
    <section className="registerSpeechPage container-page flex-center-column">
      <BackButton />
      <h1 className="title">Nuevo discurso</h1>
      <form className="registerSpeechPage flex-center-column">
        <FieldInput label="Titulo" value="" />
        <FieldInput label="Cántico" value="" />
        <PrimaryButton>Guardar</PrimaryButton>
      </form>
    </section>
  );
};
