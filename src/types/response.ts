import { PostgrestError } from "@supabase/supabase-js";

export type FetchResponseType =
  | {
      success: boolean;
      error: null;
    }
  | {
      success: boolean;
      error: PostgrestError;
    };
