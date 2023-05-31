import { supabase } from "../supabase/client";

export const getLocalSpeakers = async () => {
  const { data, error } = await supabase.from("local_speakers").select();
  return { data, error };
};
