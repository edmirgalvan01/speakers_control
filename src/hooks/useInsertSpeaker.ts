import { useState } from "react";
import { insertNewSpeaker } from "../services/speakers.service";

export const useInsertSpeaker = () => {
  const [speaker, setSpeaker] = useState({
    speaker_name: "",
  });

  const handleChange = (property: string, value: string) => {
    setSpeaker({
      ...speaker,
      [property]: value,
    });
  };

  const handleSubmit = async (event: React.SyntheticEvent) => {
    event.preventDefault();
    const error = await insertNewSpeaker(speaker);
    console.log(error);

    return error;
  };

  return { speaker, handleChange, handleSubmit };
};
