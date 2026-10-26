# Sakhi'ksasa Holdings — Website Dockerfile
# Render assigns the listen port via the PORT env var. We MUST NOT hardcode it.

FROM oven/bun:1 AS deps
WORKDIR /app

COPY package.json ./
COPY bun.lock* ./
RUN bun install --no-frozen-lockfile

FROM oven/bun:1 AS builder
WORKDIR /app

COPY --from=deps /app/node_modules ./node_modules
COPY . .

ENV NEXT_TELEMETRY_DISABLED=1
ENV NODE_ENV=production

RUN bun run build

FROM oven/bun:1 AS runner
WORKDIR /app

ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1
ENV HOSTNAME=0.0.0.0

COPY --from=builder /app/.next ./.next
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/public ./public
COPY --from=builder /app/package.json ./package.json
COPY --from=builder /app/next.config.ts ./next.config.ts

# Render injects PORT automatically. We expose a default only for local runs.
EXPOSE 3001

CMD ["bun", "run", "start"]
