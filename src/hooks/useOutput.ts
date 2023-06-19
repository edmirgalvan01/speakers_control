import { deleteOutput } from "../services/outputs.service";

export const useOutput = () => {
  const removeOutput = async (id: number) => {
    const response = await deleteOutput(id);

    if (!response.error) {
      return { success: true, error: null };
    } else {
      return { success: false, error: response.error };
    }
  };

  return { removeOutput };
};
