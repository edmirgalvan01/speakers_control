import { BackButton } from "../../components/BackButton/BackButton";
import { PrimaryButton } from "../../components/Buttons/Buttons";
import { FieldInput } from "../../components/Fields/Fields";
import "./RegisterOutputPage.css";

export const RegisterOutputPage = () => {
  return (
    <section className="registerOutputPage container-page flex-center-column">
      <BackButton />
      <h1 className="title">Nueva salida</h1>
      <form className="registerOutputPage--form flex-center-column">
        <FieldInput label="Discurso" value="" />
        <FieldInput label="Congregación" value="" />
        <FieldInput label="Fecha" value="" type="date" />
        <PrimaryButton>Guardar</PrimaryButton>
      </form>
    </section>
  );
};
