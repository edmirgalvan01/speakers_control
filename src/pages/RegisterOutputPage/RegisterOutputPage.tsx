/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { useState, useEffect } from "react";
import { FieldInput, FieldSelect } from "../../components/Fields/Fields";
import { getSpeechBySpeakerId } from "../../services/speeches.service";
import { BackButton } from "../../components/BackButton/BackButton";
import { PrimaryButton } from "../../components/Buttons/Buttons";
import { OutputType } from "../../types/outputs";
import { useParams } from "react-router-dom";
import "./RegisterOutputPage.css";
import { insertNewOutput } from "../../services/outputs.service";

export const RegisterOutputPage = () => {
  const [output, setOutput] = useState<OutputType>({
    speech_id: 0,
    speaker_id: 0,
    congregation: "",
    output_date: "",
  });

  const [speeches, setSpeeches] = useState<
    Array<{ label: string; value: string | number }>
  >([]);

  const { speakerId } = useParams();

  const handleChange = (property: string, value: string) => {
    console.log(value);

    setOutput({
      ...output,
      [property]: value,
    });
  };

  const handleSubmit = async (event: React.SyntheticEvent) => {
    event.preventDefault();
    const error = await insertNewOutput({
      ...output,
      speaker_id: parseInt(speakerId!),
    });

    console.log(error);
  };

  useEffect(() => {
    getSpeechBySpeakerId(parseInt(speakerId!)).then(({ data, error }) => {
      if (!error) {
        const parsedSpeeches = data?.map((speech) => {
          return {
            label: speech.speech_title,
            value: speech.id,
          };
        });

        setSpeeches(parsedSpeeches!);
      }
    });
  }, [speakerId]);

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
        <PrimaryButton>Guardar</PrimaryButton>
      </form>
    </section>
  );
};
