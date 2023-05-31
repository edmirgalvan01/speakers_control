import { supabase } from "../supabase/client";

export const getOutputsBySpeakerId = async (speakerId: number) => {
  const { data, error } = await supabase
    .from("outputs")
    .select()
    .eq("speaker_id", speakerId);

  return { data, error };
};
