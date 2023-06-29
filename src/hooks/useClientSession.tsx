import type { Session } from "@supabase/auth-helpers-nextjs";
import { useEffect, useState } from "react";
import supabase from "~/lib/supabaseBrowser";

export const useClientSession = () => {
  const [session, setSession] = useState<Session | null>(null);

  useEffect(() => {
    async function getData() {
      const { data } = await supabase.auth.getSession();
      setSession(data.session);
      // ...
    }
    void getData();
  }, []);

  return { session };
};
