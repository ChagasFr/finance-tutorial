import { Hono } from "hono";
import { HTTPException } from "hono/clerk-auth";
import { clerkMiddleware, getAuth } from "@hono/clerk-auth";

import { db } from "@/db/drizzle";
import { accounts } from "@/db/schema";

const app = new Hono().get("/", clerkMiddleware(), async (c) => {
  const auth = getAuth(c);

  if (!auth?.userId) {
    return c.json({ error: "unauthorized" }, 401);
    // throw new HTTPException(401, {
    //   res: c.json({ error: "unauthorized" }, 401),
    // });
  }

  const data = await db
    .select({
      id: accounts.id,
      name: accounts.name,
    })
    .from(accounts);

  return c.json({
    data,
  });
});

export default app;
