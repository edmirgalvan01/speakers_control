/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { FieldInput, FieldSelect } from "../../components/Fields/Fields";
import { useGetSpechesOptions } from "../../hooks/useGetSpechesOptions";
import { BackButton } from "../../components/BackButton/BackButton";
import { PrimaryButton } from "../../components/Buttons/Buttons";
import { useParams } from "react-router-dom";
import { useInsertOutput } from "../../hooks/useInsertOutput";
import "./RegisterOutputPage.css";

export const RegisterOutputPage = () => {
  const { speakerId } = useParams();

  const { output, handleChange, handleSubmit } = useInsertOutput(
    parseInt(speakerId!)
  );
  const { speeches } = useGetSpechesOptions(parseInt(speakerId!));

  return (
    <section className="registerOutputPage container-page flex-center-column">
      <BackButton />
      <h1 className="title">Nueva salida</h1>
      <form
        className="registerOutputPage--form flex-center-column"
        onSubmit={handleSubmit}
      >
        <FieldSelect
          onChange={(e) => handleChange("speech_id", e.target.value)}
          label="Discurso"
          defaultText="Discurso"
          options={speeches}
        />
        <FieldInput
          onChange={(e) => handleChange("congregation", e.target.value)}
          label="Congregación"
          value={output.congregation}
        />
        <FieldInput
          onChange={(e) => handleChange("output_date", e.target.value)}
          label="Fecha"
          value={output.output_date}
          type="date"
        />
        <PrimaryButton width="full">Guardar</PrimaryButton>
      </form>
    </section>
  );
};
