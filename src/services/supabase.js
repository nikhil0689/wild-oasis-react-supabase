import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://ekkmpqjjrcgraimyxahv.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVra21wcWpqcmNncmFpbXl4YWh2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTE4NjEzNTEsImV4cCI6MjAyNzQzNzM1MX0.ZJbOufpPmPgQLpgQGCplWQ0C0rsJednbWxcISikoMiE";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
