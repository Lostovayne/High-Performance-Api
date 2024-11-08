import { Redis } from '@upstash/redis';
import { Hono } from 'hono';
import { env } from 'hono/adapter';
import { handle } from 'hono/vercel';

// Vercel
export const runtime = 'edge';

export const app = new Hono().basePath('/api');

type EnvConfig = {
	UPSTASH_REDIS_REST_TOKEN: string;
	UPSTASH_REDIS_REST_URL: string;
};

app.get('/search', async (c) => {
	try {
		// tomar variables de entorno de Cloudflare
		const { UPSTASH_REDIS_REST_TOKEN, UPSTASH_REDIS_REST_URL } = env<EnvConfig>(c);
		const start = performance.now();
		//-----------------

		const redis = new Redis({
			url: UPSTASH_REDIS_REST_URL,
			token: UPSTASH_REDIS_REST_TOKEN,
		});

		const query = c.req.query('q')?.toUpperCase();

		if (!query) {
			return c.json({ message: 'Invalid search query' }, { status: 400 });
		}

		// Buscara la estrella mas cercana
		const res = [];
		const rank = await redis.zrank('terms', query);
		if (rank !== null && rank !== undefined) {
			const temp = await redis.zrange<string[]>('terms', rank, 200); // nombre de la lista, posición inicial, maxima posición
			console.log(temp);
			for (const el of temp) {
				if (!el.startsWith(query)) {
					break;
				}
				if (el.endsWith('*')) {
					res.push(el.substring(0, el.length - 1));
				}
			}
		}

		//-----------------
		const end = performance.now();

		return c.json({
			results: res,
			duration: end - start,
		});
	} catch (error) {
		console.error(error);
		return c.json({ results: [], message: 'Internal server error' }, { status: 500 });
	}
});

export const GET = handle(app);
// Cloudflare
export default app as never;
