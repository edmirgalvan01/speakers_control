import { useState } from "react";
import { insertVisit } from "../services/visits.service";
import { FetchResponseType } from "../types/response";
import { useNavigate } from "react-router-dom";

export const useVisit = () => {
  const [visit, setVisit] = useState({
    congregation: "",
    speaker: "",
    speech: "",
    date: "",
    song: "",
  });

  const handleChange = (property: string, value: string) => {
    setVisit({ ...visit, [property]: value });
  };

  const insertNewVisit = async (): Promise<FetchResponseType> => {
    const visitData = {
      speaker_congregation: visit.congregation,
      speaker_name: visit.speaker,
      speech_song: visit.song,
      speech_title: visit.speech,
      visit_date: visit.date,
    };

    const response = await insertVisit(visitData);

    if (!response.error) {
      setVisit({
        congregation: "",
        speaker: "",
        speech: "",
        date: "",
        song: "",
      });
      return { success: true, error: null };
    } else {
      return { success: false, error: response.error };
    }
  };

  return { visit, handleChange, insertNewVisit };
};
