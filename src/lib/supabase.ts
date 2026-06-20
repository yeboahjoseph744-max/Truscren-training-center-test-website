"use client";

import { createClient } from "@supabase/supabase-js";

const url = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const anonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

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
