import { BackButton } from "../../components/BackButton/BackButton";
import { PrimaryButton } from "../../components/Buttons/Buttons";
import { FieldInput } from "../../components/Fields/Fields";
import { Toaster, toast } from "sonner";
import { useVisit } from "../../hooks/useVisit";
import "./RegisterVisitPage.css";

export const RegisterVisitPage = () => {
  const { visit, handleChange, insertNewVisit } = useVisit();

  const handleSubmit = async (e: React.SyntheticEvent) => {
    e.preventDefault();

    const response = await insertNewVisit();

    if (response.success) {
      toast.success("La visita fue guardada correctamente.");
    } else {
      toast.error(
        `Ocurrió el error: ${response.error?.message}. Vuelva a intentarlo más tarde.`
      );
    }
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
          value={visit.date}
          type="date"
        />
        <FieldInput
          onChange={(e) => handleChange("speaker", e.target.value)}
          label="Nombre del visitante"
          value={visit.speaker}
        />
        <FieldInput
          onChange={(e) => handleChange("congregation", e.target.value)}
          label="Congregación"
          value={visit.congregation}
        />
        <FieldInput
          onChange={(e) => handleChange("speech", e.target.value)}
          label="Titulo del discurso"
          value={visit.speech}
        />
        <FieldInput
          onChange={(e) => handleChange("song", e.target.value)}
          label="Cántico"
          value={visit.song}
        />
        <PrimaryButton width="full">Guardar</PrimaryButton>
      </form>
      <Toaster richColors position="top-center" />
    </div>
  );
};
