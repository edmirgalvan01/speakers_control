import { useEffect, useState } from "react";
import { getVisits } from "../services/visits.service";
import { Visit } from "../types/visits";
import { PostgrestError } from "@supabase/supabase-js";

export const useGetVisits = () => {
  const [visits, setVisits] = useState<Array<Visit>>([]);
  const [error, setError] = useState<PostgrestError | null>();

  useEffect(() => {
    getVisits().then(({ data, error }) => {
      setVisits(data as Array<Visit>);
      setError(error);
    });
  }, []);

  return { visits, error };
};
