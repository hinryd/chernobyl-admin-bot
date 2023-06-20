import Fastify from "fastify";

const fastify = Fastify({ logger: true });
const port = Number(process.env.PORT) || 8080;

fastify.get("/", (request, reply) => {
  reply.send("Hello from Space! 🚀");
});

fastify.listen({ port }, (err, addr) => {
  if (err) {
    fastify.log.error(err);
    process.exit(1);
  }
  fastify.log.info(`App listening on port ${port}!`);
});
