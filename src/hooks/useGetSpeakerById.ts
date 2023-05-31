import { useState, useEffect } from "react";
import { SpeakerType } from "../types/speakers";
import { getSpeakerById } from "../services/speakers.service";

export const useGetSpeakerById = (speakerId: number) => {
  const [speaker, setSpeaker] = useState<SpeakerType>();

  useEffect(() => {
    getSpeakerById(speakerId).then(({ data }) => {
      setSpeaker(data![0] as SpeakerType);
    });
  }, [speakerId]);

  return { speaker };
};
