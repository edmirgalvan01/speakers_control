import { supabase } from "../supabase/client";

export const getVisits = async () => {
  const { data, error } = await supabase.from("visits").select();
  return { data, error };
};
