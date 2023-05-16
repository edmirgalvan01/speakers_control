import { BackButton } from "../../components/BackButton/BackButton";
import { PrimaryButton } from "../../components/Buttons/Buttons";
import { FieldInput } from "../../components/Fields/Fields";

import "./RegisterVisitPage.css";

export const RegisterVisitPage = () => {
  return (
    <div className="container-page flex-center-column registerVisitPage">
      <BackButton />
      <h1 className="title">Nueva visita</h1>
      <form className="registerVisitPage--form">
        <FieldInput label="Fecha de visita" value="" />
        <FieldInput label="Nombre del visitante" value="" />
        <FieldInput label="Congregación" value="" />
        <FieldInput label="Titulo del discurso" value="" />
        <FieldInput label="Cántico" value="" />
        <PrimaryButton>Guardar</PrimaryButton>
      </form>
    </div>
  );
};
