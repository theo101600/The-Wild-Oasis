import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://srbjhefpuvnozdynwwom.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNyYmpoZWZwdXZub3pkeW53d29tIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTA1OTM0MDksImV4cCI6MjA2NjE2OTQwOX0.JVDKfsGuGIEy41fiQrFUlphLM_VI2Beb3anIKnNB8uk";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
