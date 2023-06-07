import { useState } from "react";
import { OutputType } from "../types/outputs";
import { insertNewOutput } from "../services/outputs.service";

export const useInsertOutput = (speakerId: number) => {
  const [output, setOutput] = useState<OutputType>({
    speech_id: 0,
    speaker_id: 0,
    congregation: "",
    output_date: "",
  });

  const handleChange = (property: string, value: string) => {
    setOutput({
      ...output,
      [property]: value,
    });
  };

  const handleSubmit = async (event: React.SyntheticEvent) => {
    event.preventDefault();
    const error = await insertNewOutput({
      ...output,
      speaker_id: speakerId,
    });

    return error;
  };

  return { output, handleChange, handleSubmit };
};
