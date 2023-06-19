import { supabase } from "../supabase/client";
import { SpeechType } from "../types/speeches";

export const insertNewSpeech = async (speech: SpeechType) => {
  const { error } = await supabase.from("local_speeches").insert(speech);
  return { error };
};

export const getSpeechBySpeakerId = async (speakerId: number) => {
  const { data, error } = await supabase
    .from("local_speeches")
    .select()
    .eq("speaker_id", speakerId);

  return { data, error };
};

export const getSpeechById = async (speechId: number) => {
  const { data, error } = await supabase
    .from("local_speeches")
    .select()
    .eq("id", speechId);

  return { data, error };
};

export const deleteSpeech = async (id: number) => {
  const { data, error } = await supabase
    .from("local_speeches")
    .delete()
    .eq("id", id);

  return { data, error };
};
