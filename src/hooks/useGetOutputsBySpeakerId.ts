import { useState, useEffect } from "react";
import { OutputType } from "../types/outputs";
import { getOutputsBySpeakerId } from "../services/outputs.service";
import { getSpeechById } from "../services/speeches.service";
import { SpeechType } from "../types/speeches";

export const useGetOutputsBySpeakerId = (speakerId: number) => {
  const [outputs, setOutputs] = useState<Array<OutputType>>([]);

  useEffect(() => {
    getOutputsBySpeakerId(speakerId).then(({ data }) => {
      setOutputs(data as Array<OutputType>);
    });
  }, [speakerId]);

  useEffect(() => {
    outputs.map(async (output) => {
      const { data, error } = await getSpeechById(output.speech_id);
    });
  }, [outputs]);

  return { outputs };
};
