import { execSync } from "child_process";
import detect from "detect-port";

export const setupE2eTest = async () => {
  await startSupabase();
  reseedDb();
};

const startSupabase = async () => {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-call
  const port = (await detect(64321)) as number;
  if (port !== 64321) {
    return;
  }
  console.warn("Supabase not detected - starting it now");
  execSync("npx supabase start");
};

const reseedDb = () => {
  execSync(
    "PGPASSWORD=postgres psql -U postgres -h 127.0.0.1 -p 64322 -f supabase/clear-db-data.sql",
    { stdio: "ignore" }
  );
};
