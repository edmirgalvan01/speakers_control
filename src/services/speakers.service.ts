import { supabase } from "../supabase/client";
import { SpeakerType } from "../types/speakers";

export const insertNewSpeaker = async (speaker: SpeakerType) => {
  const { error } = await supabase.from("local_speakers").insert(speaker);
  return { error };
};

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
