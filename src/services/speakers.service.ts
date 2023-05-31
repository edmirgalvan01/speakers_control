import { supabase } from "../supabase/client";

export const getLocalSpeakers = async () => {
  const { data, error } = await supabase.from("local_speakers").select();
  return { data, error };
};

export const getSpeakerById = async (speakerId: number) => {
  const { data, error } = await supabase
    .from("local_speakers")
    .select()
    .eq("id", speakerId);

  return { data, error };
};
