const {createObjective, getObjectives} = require('./controller');
const {objectiveBodySchema} = require('./schema');

/**
 * objectives routes
 * @param {*} fastify app instance
 */
async function objectivesRoutes(fastify) {
  fastify.post('/', {schema: {body: objectiveBodySchema}},
      async (request, reply) => createObjective(fastify, request, reply),
  );
  fastify.get('/', {},
      async (request, reply) => getObjectives(fastify, request, reply),
  );
}

module.exports = objectivesRoutes;
