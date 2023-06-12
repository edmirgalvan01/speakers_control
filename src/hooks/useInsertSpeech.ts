import { useState } from "react";
import { insertNewSpeech } from "../services/speeches.service";

export const useInsertSpeech = (speakerId: number) => {
  const [speech, setSpeech] = useState({
    speech_title: "",
    speech_song: "",
    speaker_id: 0,
  });

  const handleChange = (property: string, value: string) => {
    setSpeech({
      ...speech,
      [property]: value,
    });
  };

  const handleSubmit = async (event: React.SyntheticEvent) => {
    event.preventDefault();
    const error = await insertNewSpeech({
      ...speech,
      speaker_id: speakerId,
    });
    return error;
  };

  return { speech, handleChange, handleSubmit };
};
