import { Redis } from "@upstash/redis/cloudflare";
import { Context, Hono } from "hono";
import { env } from "hono/adapter";
import { cors } from "hono/cors";
import { handle } from "hono/vercel";

export const runtime = "edge";

const app = new Hono().basePath("/api");

app.use(cors());

type EnvConfig = {
  UPSTASH_REDIS_REST_URL: string;
  UPSTASH_REDIS_REST_TOKEN: string;
};

app.get("/search", async (c: Context) => {
  // select environment variables
  const { UPSTASH_REDIS_REST_URL, UPSTASH_REDIS_REST_TOKEN } =
    env<EnvConfig>(c);

  // performance testing with 10,000 terms
  const start = performance.now();

  try {
    // Create istance of Redis
    const redis = new Redis({
      url: UPSTASH_REDIS_REST_URL,
      token: UPSTASH_REDIS_REST_TOKEN,
    });

    const query = c.req.query("q");

    if (!query) {
      return c.json({
        message: "Please provide a query",
        status: 400,
      });
    }

    // search in redis
    const res = [];
    const rank = await redis.zrank("terms", query);

    if (rank !== null && rank !== undefined) {
      const temp = await redis.zrange<string[]>("terms", rank, rank + 700);

      for (const el of temp) {
        if (!el.startsWith(query)) {
          break;
        }
        if (el.endsWith("*")) {
          res.push(el.substring(0, el.length - 1));
        }
      }
    }

    // Performance
    const end = performance.now();

    return c.json({
      duration: end - start,
      results: res,
    });
  } catch (error) {
    console.log(error);
    return c.json({
      result: [],
      message: "Something went wrong",
      status: 500,
    });
  }
});

export const GET = handle(app);
export const POST = handle(app);

export default app;
