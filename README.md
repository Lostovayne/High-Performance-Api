# FAST API

<div>
	<img src="https://img.shields.io/badge/-Hono_js-orange?logo=hono" alt="honojs" />
	<img src="https://img.shields.io/badge/-Bun_js-black?logo=bun" alt="bunjs" />
	<img src="https://img.shields.io/badge/-Redis-black?logo=redis" alt="redis" />
</div>

FAST API is a complete and efficient API built with modern technologies such as Cloudflare, Hono, Bun, TypeScript, Tailwind, and Redis. This project is designed to be fast, scalable, and easy to use.

## Technologies Used

- **Cloudflare**: Provides security and performance through its content delivery network (CDN).
- **Hono**: A lightweight and fast web framework for building applications in TypeScript.
- **Bun**: A JavaScript and TypeScript runtime that offers superior performance.
- **TypeScript**: A superset of JavaScript that adds static typing.
- **Tailwind CSS**: A utility-first CSS framework that allows for rapid and responsive design.
- **Redis**: An in-memory database used for caching and session management.

## Installation

Follow these steps to install and set up the project on your local machine:

1. **Clone the repository**:
   ```bash
   git clone https://github.com/yourusername/fast-api.git
   cd fast-api
   ```

2. **Install Bun** (if not already installed):
   ```bash
   curl -fsSL https://bun.sh/install | bash
   ```

3. **Install dependencies**:
   ```bash
   bun install
   ```

4. **Configure Redis**:
   - Ensure Redis is installed and running. You can install it using Docker:
     ```bash
     docker run --name redis -d -p 6379:6379 redis
     ```

5. **Set up environment variables**:
   - Create a `.env` file in the root of the project and add the following variables:
     ```env
     REDIS_URL=redis://localhost:6379
     ```

## Dependencies

Ensure the following dependencies are included in your `package.json`:

```json
{
  "dependencies": {
    "hono": "^3.0.0",
    "redis": "^4.0.0",
    "tailwindcss": "^2.0.0"
  },
  "devDependencies": {
    "typescript": "^4.0.0",
    "bun-types": "^0.1.0"
  }
}
```

## Integrations

### Cloudflare

To use Cloudflare, follow these steps:

1. Sign up at [Cloudflare](https://www.cloudflare.com/).
2. Add your domain and configure the DNS records.
3. Set up firewall rules and performance settings as needed.

### Hono

To create routes in Hono, you can use the following example:

```typescript
import { Hono } from 'hono';

const app = new Hono();

app.get('/', (c) => c.text('Hello, FAST API!'));

app.listen(3000);
```

### Redis

To interact with Redis, you can use the following code:

```typescript
import { createClient } from 'redis';

const client = createClient();

client.on('error', (err) => console.log('Redis Client Error', err));

async function connectRedis() {
  await client.connect();
}

connectRedis();
```

## Styles with Tailwind CSS

To set up Tailwind CSS, follow these steps:

1. Create a Tailwind configuration file:
   ```bash
   npx tailwindcss init
   ```

2. Configure your `tailwind.config.js` file:
   ```javascript
   module.exports = {
     content: ['./src/**/*.{html,js,ts}'],
     theme: {
       extend: {},
     },
     plugins: [],
   };
   ```

3. Import Tailwind in your CSS file:
   ```css
   @tailwind base;
   @tailwind components;
   @tailwind utilities;
   ```

## Running the API

To run the API, use the following command:

```bash
bun run start
```

## Deploy in Cloudflare

To deploy the API on Cloudflare, use the following command:

```bash
bun add -D @opennextjs/cloudflare
```

Create the `wrangler.toml` file:

```toml
compatibility_date = "2024-11-08"
name = "fastapi"

[vars]
UPSTASH_REDIS_REST_TOKEN = ".................."
UPSTASH_REDIS_REST_URL = "................"

# wrangler.toml (wrangler v3.79.0^)
[observability]
enabled = true
head_sampling_rate = 1
```

## Contributing

Contributions are welcome. If you would like to contribute, please follow these steps:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/new-feature`).
3. Make your changes and commit (`git commit -m 'Add new feature'`).
4. Push to the branch.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Contact

For more information, you can contact me at [epsa@example.com](mailto:your_email@example.com).