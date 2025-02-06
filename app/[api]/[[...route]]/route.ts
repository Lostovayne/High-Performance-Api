import { Hono } from "hono";
import { handle } from "hono/vercel";

export const runtime = "edge";

const app = new Hono();

app.get("/search", (c) => {
  return c.json({
    results: ["hello", "world"],
  });
});

export const GET = handle(app);
export const POST = handle(app);
