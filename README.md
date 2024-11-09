# FAST API

FAST API es una API completa y eficiente construida con tecnologías modernas como Cloudflare, Hono, Bun, TypeScript,
Tailwind y Redis. Este proyecto está diseñado para ser rápido, escalable y fácil de usar.

## Tecnologías Utilizadas

- **Cloudflare**: Proporciona seguridad y rendimiento a través de su red de entrega de contenido (CDN).
- **Hono**: Un framework web ligero y rápido para construir aplicaciones en TypeScript.
- **Bun**: Un entorno de ejecución de JavaScript y TypeScript que ofrece un rendimiento superior.
- **TypeScript**: Un superconjunto de JavaScript que añade tipado estático.
- **Tailwind CSS**: Un framework CSS de utilidad que permite un diseño rápido y responsivo.
- **Redis**: Una base de datos en memoria que se utiliza para el almacenamiento en caché y la gestión de sesiones.

## Instalación

Sigue estos pasos para instalar y configurar el proyecto en tu máquina local:

1. **Clona el repositorio**:

   ```bash
   git clone https://github.com/tu_usuario/fast-api.git
   cd fast-api
   ```

2. **Instala Bun** (si no lo tienes instalado):

   ```bash
   curl -fsSL https://bun.sh/install | bash
   ```

3. **Instala las dependencias**:

   ```bash
   bun install
   ```

4. **Configura Redis**:

   - Asegúrate de tener Redis instalado y en ejecución. Puedes instalarlo usando Docker:
     ```bash
     docker run --name redis -d -p 6379:6379 redis
     ```

5. **Configura las variables de entorno**:
   - Crea un archivo `.env` en la raíz del proyecto y añade las siguientes variables:
     ```env
     REDIS_URL=redis://localhost:6379
     ```

## Dependencias

Asegúrate de que las siguientes dependencias están incluidas en tu `package.json`:

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
```

## Integraciones

### Cloudflare

Para utilizar Cloudflare, sigue estos pasos:

1. Regístrate en [Cloudflare](https://www.cloudflare.com/).
2. Añade tu dominio y configura los registros DNS.
3. Configura las reglas de firewall y las configuraciones de rendimiento según tus necesidades.

### Hono

Para crear rutas en Hono, puedes usar el siguiente ejemplo:

```typescript
import { Hono } from 'hono';

const app = new Hono();

app.get('/', (c) => c.text('¡Hola, FAST API!'));

app.listen(3000);
```

### Redis

Para interactuar con Redis, puedes usar el siguiente código:

```typescript
import { createClient } from 'redis';

client.on('error', (err) => console.log('Redis Client Error', err));

async function connectRedis() {
	await client.connect();
}

connectRedis();
```

## Estilos con Tailwind CSS

Para configurar Tailwind CSS, sigue estos pasos:

1. Crea un archivo de configuración de Tailwind:

   ```bash
   npx tailwindcss init
   ```

2. Configura tu archivo `tailwind.config.js`:

   ```javascript
   module.exports = {
   	content: ['./src/**/*.{html,js,ts}'],
   	theme: {
   		extend: {},
   	},
   	plugins: [],
   };
   ```

3. Importa Tailwind en tu archivo CSS:
   ```css
   @tailwind base;
   @tailwind components;
   @tailwind utilities;
   ```

## Ejecución

Para ejecutar la API, utiliza el siguiente comando:

```bash
bun run start
```

## Deploy in Cloudflare

Para deployar la API en Cloudflare, utiliza el siguiente comando:

```bash
bun add -D @opennextjs/cloudflare
```

Crear archivo wrangler.toml:

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

## Contribuciones

Las contribuciones son bienvenidas. Si deseas contribuir, por favor sigue estos pasos:

1. Haz un fork del repositorio.
2. Crea una nueva rama (`git checkout -b feature/nueva-caracteristica`).
3. Realiza tus cambios y haz un commit (`git commit -m 'Añadir nueva característica'`).
4. Envía un pull request.

## Licencia

Este proyecto está bajo la Licencia MIT. Consulta el archivo [LICENSE](LICENSE) para más detalles.

## Contacto

Para más información, puedes contactarme en [epsa@example.com](mailto:tu_email@example.com).
