import { useState, useEffect } from "react";
import { getSpeechBySpeakerId } from "../services/speeches.service";
import { SpeechType } from "../types/speeches";

export const useGetSpeechBySpeakerId = (speakerId: number) => {
  const [speeches, setSpeeches] = useState<Array<SpeechType>>([]);

  useEffect(() => {
    getSpeechBySpeakerId(speakerId).then(({ data }) => {
      setSpeeches(data as Array<SpeechType>);
    });
  }, [speakerId]);

  return { speeches };
};
