/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { useEffect, useState } from "react";
import { Visit } from "../types/visits";
import { getVisitById } from "../services/visits.service";

export const useGetVisitById = (id: number) => {
  const [visit, setVisit] = useState<Visit>();

  useEffect(() => {
    getVisitById(id).then(({ data, error }) => {
      if (!error) {
        setVisit(data![0] as Visit);
      }
    });
  }, [id]);

  return { visit };
};
