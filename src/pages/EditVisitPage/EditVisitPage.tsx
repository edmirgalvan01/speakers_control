import { BackButton } from "../../components/BackButton/BackButton";
import { PrimaryButton } from "../../components/Buttons/Buttons";
import { FieldInput } from "../../components/Fields/Fields";

export const EditVisitPage = () => {
  // TODO: getVisitById

  const handleChange = (property: string, value: string) => {};

  const handleSubmit = () => {};

  return (
    <div className="container-page flex-center-column registerVisitPage">
      <BackButton />
      <h1 className="title">Nueva visita</h1>
      <form
        className="registerVisitPage--form flex-center-column"
        onSubmit={handleSubmit}
      >
        <FieldInput
          onChange={(e) => handleChange("date", e.target.value)}
          label="Fecha de visita"
          value=""
          type="date"
        />
        <FieldInput
          onChange={(e) => handleChange("speaker", e.target.value)}
          label="Nombre del visitante"
          value=""
        />
        <FieldInput
          onChange={(e) => handleChange("congregation", e.target.value)}
          label="Congregación"
          value=""
        />
        <FieldInput
          onChange={(e) => handleChange("speech", e.target.value)}
          label="Titulo del discurso"
          value=""
        />
        <FieldInput
          onChange={(e) => handleChange("song", e.target.value)}
          label="Cántico"
          value=""
        />
        <PrimaryButton width="full">Guardar</PrimaryButton>
      </form>
    </div>
  );
};
