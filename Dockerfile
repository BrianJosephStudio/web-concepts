FROM oven/bun:1

WORKDIR /server

COPY package*.json ./

RUN  bun install

COPY . .

EXPOSE 5001:5001

ENTRYPOINT [ "bun", "run", "deploy" ]