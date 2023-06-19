import { useEffect, useState } from "react";
import { getOrderVisits } from "../services/visits.service";
import { PostgrestError } from "@supabase/supabase-js";
import { Visit } from "../types/visits";

export const useGetOrderVisits = (ascending: boolean) => {
  const [visits, setVisits] = useState<Array<Visit>>([]);
  const [error, setError] = useState<PostgrestError | null>();

  useEffect(() => {
    getOrderVisits(ascending).then(({ data, error }) => {
      setVisits(data as Array<Visit>);
      setError(error);
    });
  }, [ascending]);

  return { visits, error };
};
