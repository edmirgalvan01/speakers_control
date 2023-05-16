import { useId } from "react";

import { BackButton } from "../../components/BackButton/BackButton";
import { PrimaryButton } from "../../components/Buttons/Buttons";

import "./RegisterVisitPage.css";

export const RegisterVisitPage = () => {
  const dateField = useId();
  const nameField = useId();
  const congregationField = useId();
  const speechField = useId();
  const songField = useId();

  return (
    <div className="container-page flex-center-column registerVisitPage">
      <BackButton />
      <h1 className="title">Nueva visita</h1>
      <form className="registerVisitPage--form">
        <div className="field">
          <label htmlFor={dateField}>Fecha de visita</label>
          <input
            type="text"
            value=""
            required={true}
            name={dateField}
            id={dateField}
          />
        </div>
        <div className="field">
          <label htmlFor={nameField}>Nombre del visitante</label>
          <input
            type="text"
            value=""
            required={true}
            name={nameField}
            id={nameField}
          />
        </div>
        <div className="field">
          <label htmlFor={congregationField}>Congregación</label>
          <input
            type="text"
            value=""
            required={true}
            name={congregationField}
            id={congregationField}
          />
        </div>
        <div className="field">
          <label htmlFor={speechField}>Titulo del discurso</label>
          <input
            type="text"
            value=""
            required={true}
            name={speechField}
            id={speechField}
          />
        </div>
        <div className="field">
          <label htmlFor={songField}>Cántico</label>
          <input
            type="text"
            value=""
            required={true}
            name={songField}
            id={songField}
          />
        </div>
        <PrimaryButton>Guardar</PrimaryButton>
      </form>
    </div>
  );
};
