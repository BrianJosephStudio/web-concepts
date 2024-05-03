FROM oven/bun:1

WORKDIR /app

COPY package.json ./

RUN  bun install

COPY . .

ENTRYPOINT [ "bun", "run", "build" ]