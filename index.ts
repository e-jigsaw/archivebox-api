import { Database } from "bun:sqlite";
import { Hono } from "hono";

const db = new Database(Bun.env.DB_PATH, {
  readonly: true,
});

const app = new Hono();
app.get("/", (c) => c.text("It works!"));
app.get("/snapshots", (c) => {
  const { page } = c.req.query();
  const parsedPage = page ? parseInt(page, 10) * 20 : 0;
  const query = db.query(
    `select id, title, url from core_snapshot order by added desc limit 20 offset ${parsedPage}`
  );
  return c.json(query.all());
});

export default app;
