import { supabase } from "../supabase/client";

export const getSpeechBySpeakerId = async (speakerId: number) => {
  const { data, error } = await supabase
    .from("local_speeches")
    .select()
    .eq("speaker_id", speakerId);

  return { data, error };
};
