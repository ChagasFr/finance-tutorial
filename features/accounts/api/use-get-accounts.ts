const app = new Hono().get("/", async (c) => {
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
