/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { useParams } from "react-router-dom";
import { BackButton } from "../../components/BackButton/BackButton";
import { PrimaryButton } from "../../components/Buttons/Buttons";
import { FieldInput } from "../../components/Fields/Fields";
import { useGetVisitById } from "../../hooks/useGetVisitById";

export const EditVisitPage = () => {
  const { visitId } = useParams();
  const { visit } = useGetVisitById(parseInt(visitId!));

  const handleChange = (property: string, value: string) => {
    console.log(property, value);
  };

  const handleSubmit = (e: React.SyntheticEvent) => {
    console.log(e);
  };

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
          value={visit?.visit_date}
          type="date"
        />
        <FieldInput
          onChange={(e) => handleChange("speaker", e.target.value)}
          label="Nombre del visitante"
          value={visit?.speaker_name}
        />
        <FieldInput
          onChange={(e) => handleChange("congregation", e.target.value)}
          label="Congregación"
          value={visit?.speaker_congregation}
        />
        <FieldInput
          onChange={(e) => handleChange("speech", e.target.value)}
          label="Titulo del discurso"
          value={visit?.speech_title}
        />
        <FieldInput
          onChange={(e) => handleChange("song", e.target.value)}
          label="Cántico"
          value={visit?.speech_song}
        />
        <PrimaryButton width="full">Guardar</PrimaryButton>
      </form>
    </div>
  );
};
