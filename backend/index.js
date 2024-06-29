require('dotenv').config();
const fastify = require('fastify');
const {
  jwtSecret,
  version,
  serverPort: port,
} = require('constants/common');

const build = async () => {
  const app = fastify({logger: true});
  await app.register(require('@fastify/middie'));
  await app.register(require('@fastify/jwt'),
      {secret: process.env.SECRET || jwtSecret});
  await app.register(require('@fastify/cors'));
  console.log('PO', process.env.MONGO_CONNECTION_URI);
  await app.register(require('@fastify/mongodb'), {
    forceClose: true,
    url: process.env.MONGO_CONNECTION_URI,
  });
  await app.register(require('@fastify/swagger'), {
    swagger: {
      info: {
        title: 'MAE Documentation',
        description: 'Swagger Spec',
        version,
      },
      securityDefinitions: {
        apiKey: {
          type: 'apiKey',
          name: 'apiKey',
          in: 'header',
        },
      },
      host: `localhost:${port}`,
      schemes: ['http', 'https'],
      consumes: ['application/json'],
      produces: ['application/json'],
      tags: [],
    },
    routePrefix: '/documentation',
    exposeRoute: true,
  });
  app.get('/', (_, reply) => reply.send(app.printRoutes()));
  return app;
};

module.exports = build;
