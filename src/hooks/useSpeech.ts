import { deleteSpeech } from "../services/speeches.service";

export const useSpeech = () => {
  const removeSpeech = async (id: number) => {
    const response = await deleteSpeech(id);

    if (!response.error) {
      return { success: true, error: null };
    } else {
      return { success: false, error: response.error };
    }
  };

  return { removeSpeech };
};
