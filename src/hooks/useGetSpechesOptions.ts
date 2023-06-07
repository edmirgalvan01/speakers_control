/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { useState, useEffect } from "react";
import { getSpeechBySpeakerId } from "../services/speeches.service";

export const useGetSpechesOptions = (speakerId: number) => {
  const [speeches, setSpeeches] = useState<
    Array<{ label: string; value: string | number }>
  >([]);

  useEffect(() => {
    getSpeechBySpeakerId(speakerId).then(({ data, error }) => {
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

  return { speeches };
};
