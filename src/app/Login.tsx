"use client";

// import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { useRouter } from "next/navigation";
import { useClientSession } from "~/hooks/useClientSession";
import supabase from "~/lib/supabaseBrowser";

export const Login = () => {
  const router = useRouter();

  const { session } = useClientSession();
  console.log(session);

  const handleSignUp = async () => {
    await supabase.auth.signUp({
      email: "haleyrhyswhitman@gmail.com",
      password: "camel123",
      options: {
        emailRedirectTo: `${location.origin}/auth/callback`,
      },
    });
    router.refresh();
  };

  const handleSignIn = async () => {
    await supabase.auth.signInWithPassword({
      email: "haleyrhyswhitman@gmail.com",
      password: "camel123",
    });
    router.refresh();
  };

  const handleSignOut = async () => {
    await supabase.auth.signOut();
    router.refresh();
  };

  //   console.log(session);

  return (
    <div className="flex gap-2">
      {!session ? (
        <>
          <button onClick={handleSignUp}>Sign up</button>
          <button onClick={handleSignIn}>Sign in</button>
        </>
      ) : (
        <button onClick={handleSignOut}>Sign out</button>
      )}
    </div>
  );
};
