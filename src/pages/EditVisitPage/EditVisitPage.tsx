/* eslint-disable @typescript-eslint/no-non-null-asserted-optional-chain */
/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { BackButton } from "../../components/BackButton/BackButton";
import { PrimaryButton } from "../../components/Buttons/Buttons";
import { FieldInput } from "../../components/Fields/Fields";
import { useGetVisitById } from "../../hooks/useGetVisitById";
import { useVisit } from "../../hooks/useVisit";

export const EditVisitPage = () => {
  const { visitId } = useParams();
  const { visit } = useGetVisitById(parseInt(visitId!));
  const {
    visit: newVisit,
    handleChange,
    updateVisit,
    updateOldvisit,
  } = useVisit();

  useEffect(() => {
    updateVisit({
      congregation: visit?.speaker_congregation!,
      date: visit?.visit_date!,
      song: visit?.speech_song!,
      speaker: visit?.speaker_name!,
      speech: visit?.speech_title!,
    });
  }, [visit, updateVisit]);

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    updateOldvisit(parseInt(visitId!));
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
          value={newVisit.date}
          type="date"
        />
        <FieldInput
          onChange={(e) => handleChange("speaker", e.target.value)}
          label="Nombre del visitante"
          value={newVisit.speaker}
        />
        <FieldInput
          onChange={(e) => handleChange("congregation", e.target.value)}
          label="Congregación"
          value={newVisit.congregation}
        />
        <FieldInput
          onChange={(e) => handleChange("speech", e.target.value)}
          label="Titulo del discurso"
          value={newVisit.speech}
        />
        <FieldInput
          onChange={(e) => handleChange("song", e.target.value)}
          label="Cántico"
          value={newVisit.song}
        />
        <PrimaryButton width="full">Guardar</PrimaryButton>
      </form>
    </div>
  );
};
