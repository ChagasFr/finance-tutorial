import accounts from "@/app/api/[[...route]]/accounts";
import { pgTable, text } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";

export const account = pgTable("accounts", {
  id: text("id").primaryKey(),
  plaidId: text("plaid_id"),
  name: text("name").notNull(),
  userId: text("user_is").notNull(),
});

export const insertAccountSchema = createInsertSchema(accounts);
