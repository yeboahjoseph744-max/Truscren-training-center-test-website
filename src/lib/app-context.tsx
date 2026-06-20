"use client";

import { createContext, useContext, useState, useEffect, useCallback, ReactNode } from "react";
import { sb, Profile } from "@/lib/supabase";
import type { User } from "@supabase/supabase-js";

type AppState = {
  user: User | null;
  profile: Profile | null;
  // modal controls
  signinOpen: boolean;
  dashOpen: boolean;
  courseIndex: number | null;
  openSignin: () => void;
  closeSignin: () => void;
  openDash: () => void;
  closeDash: () => void;
  openCourse: (i: number) => void;
  closeCourse: () => void;
  signOut: () => Promise<void>;
};

const Ctx = createContext<AppState | null>(null);

export function useApp() {
  const c = useContext(Ctx);
  if (!c) throw new Error("useApp must be used within AppProvider");
  return c;
}

export function AppProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [profile, setProfile] = useState<Profile | null>(null);
  const [signinOpen, setSigninOpen] = useState(false);
  const [dashOpen, setDashOpen] = useState(false);
  const [courseIndex, setCourseIndex] = useState<number | null>(null);

  const loadProfile = useCallback(async (u: User) => {
    const { data } = await sb.from("profiles").select("*").eq("id", u.id).single();
    return data as Profile | null;
  }, []);

  useEffect(() => {
    sb.auth.getSession().then(async ({ data: { session } }) => {
      if (session) {
        setUser(session.user);
        setProfile(await loadProfile(session.user));
      }
    });
    const { data: sub } = sb.auth.onAuthStateChange(async (_e, session) => {
      if (session) {
        setUser(session.user);
        setProfile(await loadProfile(session.user));
      } else {
        setUser(null);
        setProfile(null);
      }
    });
    return () => sub.subscription.unsubscribe();
  }, [loadProfile]);

  // lock body scroll when any modal is open
  useEffect(() => {
    const anyOpen = signinOpen || dashOpen || courseIndex !== null;
    document.body.style.overflow = anyOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [signinOpen, dashOpen, courseIndex]);

  const signOut = useCallback(async () => {
    await sb.auth.signOut();
    setDashOpen(false);
  }, []);

  const value: AppState = {
    user, profile,
    signinOpen, dashOpen, courseIndex,
    openSignin: () => setSigninOpen(true),
    closeSignin: () => setSigninOpen(false),
    openDash: () => setDashOpen(true),
    closeDash: () => setDashOpen(false),
    openCourse: (i) => setCourseIndex(i),
    closeCourse: () => setCourseIndex(null),
    signOut,
  };

  return <Ctx.Provider value={value}>{children}</Ctx.Provider>;
}
