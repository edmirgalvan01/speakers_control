import { supabase } from "../supabase/client";
import { Visit } from "../types/visits";

export const getVisits = async () => {
  const { data, error } = await supabase.from("visits").select();
  return { data, error };
};

export const insertVisit = async (visit: Visit) => {
  const { error } = await supabase.from("visits").insert(visit);
  return { error };
};

export const getVisitById = async (id: number) => {
  const { data, error } = await supabase.from("visits").select().eq("id", id);
  return { data, error };
};
