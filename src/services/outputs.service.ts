import { supabase } from "../supabase/client";
import { OutputType } from "../types/outputs";

export const insertNewOutput = async (output: OutputType) => {
  const { error } = await supabase.from("outputs").insert(output);
  return { error };
};

export const getOutputsBySpeakerId = async (speakerId: number) => {
  const { data, error } = await supabase
    .from("outputs")
    .select()
    .eq("speaker_id", speakerId);

  return { data, error };
};
