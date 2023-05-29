import { BackButton } from "../../components/BackButton/BackButton";
import { PrimaryButton } from "../../components/Buttons/Buttons";
import { FieldInput } from "../../components/Fields/Fields";
import "./RegisterSpeakerPage.css";

export const RegisterSpeakerPage = () => {
  return (
    <section className="container-page flex-center-column registerSpeakersPage">
      <BackButton />
      <h1 className="title">Nuevo orador</h1>
      <form className="registerSpeakersPage--form">
        <FieldInput label="Nombre completo" value="" />
        <PrimaryButton type="submit">Guardar</PrimaryButton>
      </form>
    </section>
  );
};
