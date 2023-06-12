import { useState, useEffect } from "react";
import { OutputType } from "../types/outputs";
import { getOutputsBySpeakerId } from "../services/outputs.service";

export const useGetOutputsBySpeakerId = (speakerId: number) => {
  const [outputs, setOutputs] = useState<Array<OutputType>>([]);

  useEffect(() => {
    getOutputsBySpeakerId(speakerId).then(({ data }) => {
      setOutputs(data as Array<OutputType>);
    });
  }, [speakerId]);

  return { outputs };
};
