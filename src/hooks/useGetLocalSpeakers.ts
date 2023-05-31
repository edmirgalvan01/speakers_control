import { useState, useEffect } from "react";
import { getLocalSpeakers } from "../services/speakers.service";
import { SpeakerType } from "../types/speakers";

export const useGetLocalSpeakers = () => {
  const [speakers, setSpeakers] = useState<Array<SpeakerType>>([]);

  useEffect(() => {
    getLocalSpeakers().then(({ data }) => {
      setSpeakers(data as Array<SpeakerType>);
    });
  }, []);

  return { speakers };
};
