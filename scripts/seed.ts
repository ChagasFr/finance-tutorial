import { neon } from "@neondatabase/serverless";
import { config } from "dotenv";
import { drizzle } from "drizzle-orm/neon-http";

config({ path: ".env.local" });

const sql = neon(process.env.DATABASE_URL!);
const db = drizzle(sql);

const SEED_USER_ID = "user_2f8QV8QVvqc3YBwmB9MAyBSvsDW";
const SEED_CATEGORIES = [
  { id: "category_1", name: "Food", userId: SEED_USER_ID, plaidId: null },
  { id: "category_2", name: "Rent", userId: SEED_USER_ID, plaidId: null },
  { id: "category_3", name: "Utilities", userId: SEED_USER_ID, plaidId: null },
  { id: "category_7", name: "Clothing", userId: SEED_USER_ID, plaidId: null },
];

const SEED_ACCOUNTS = [
  { id: "category_1", name: "Checking", userId: SEED_USER_ID, plaidId: null },
  { id: "category_2", name: "Saving", userId: SEED_USER_ID, plaidId: null },
];

const defaultTo = new Date();
const defaultfrom = subDays(defaultTo, 90);
