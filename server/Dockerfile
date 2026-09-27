# ---------- Build stage ---------- // This is the First stage for building the application needed to compile TypeScript and generate Prisma client
FROM node:22-bookworm-slim AS build

WORKDIR /app

RUN apt-get update \
    && apt-get install -y --no-install-recommends openssl ca-certificates \
    && rm -rf /var/lib/apt/lists/*

COPY package.json package-lock.json ./

RUN npm ci

COPY prisma ./prisma
COPY prisma.config.ts ./
COPY tsconfig.json ./
COPY check-js.js ./
COPY src ./src

RUN DATABASE_URL="postgresql://user:password@localhost:5432/studyflow" \
    npx prisma generate

RUN npm run build

RUN npm prune --omit=dev


FROM node:22-bookworm-slim

WORKDIR /app

ENV NODE_ENV=production

RUN apt-get update \
    && apt-get install -y --no-install-recommends openssl ca-certificates \
    && rm -rf /var/lib/apt/lists/*

COPY --from=build /app/node_modules ./node_modules
COPY --from=build /app/dist ./dist
COPY --from=build /app/prisma ./prisma

COPY package.json package-lock.json ./

EXPOSE 5000

CMD ["node", "dist/index.js"]

# //The build stage contains TypeScript source files and is used to compile the application and generate the Prisma client.
# //The production stage contains only the compiled JavaScript files and necessary dependencies to run the application in production.
# //This multi-stage build approach ensures that the final Docker image is as small as possible and only contains the files needed for production.
# //It also helps to keep the build environment separate from the production environment, reducing the risk of including unnecessary development dependencies in the final image.
# //Overall, this Dockerfile is designed to create a secure and efficient production environment for the application while minimizing the size of the final Docker image.
# //It leverages multi-stage builds to separate the build and production environments, ensuring that only necessary files are included in the final image.
# // This concludes the Dockerfile for the application, summarizing the multi-stage build process and its benefits for creating a production-ready Docker image.