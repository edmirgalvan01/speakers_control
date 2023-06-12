import { supabase } from "../supabase/client";

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

export const getSpeechesById = async () => {
  const { data, error } = await supabase.from("usuarios").select(
    `
        usuarios.id,
        usuarios.nombre,
        direcciones.direccion
      `
  );
  // .innerJoin("direcciones", "usuarios.id", "direcciones.usuario_id");

  return { data, error };
};
