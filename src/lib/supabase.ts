"use client";

import { createClient } from "@supabase/supabase-js";

// Fallbacks keep the build from crashing if env vars aren't present at
// build time. Real values come from Vercel env vars / .env.local at runtime.
const url =
  process.env.NEXT_PUBLIC_SUPABASE_URL || "https://placeholder.supabase.co";
const anonKey =
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || "placeholder-anon-key";

export const sb = createClient(url, anonKey);

export type Profile = {
  id: string;
  full_name: string;
  phone: string;
  course: string;
  level: string;
  progress: number;
  created_at?: string;
};
