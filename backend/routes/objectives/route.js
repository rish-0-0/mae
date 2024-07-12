const {
  createObjective,
  getObjectives,
  updateObjective,
  deleteObjectives,
} = require('./controller');
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
  fastify.patch('/:id', {},
      async (request, reply) => updateObjective(fastify, request, reply),
  );
  fastify.delete('/', {},
      async (request, reply) => deleteObjectives(fastify, request, reply),
  );
}

module.exports = objectivesRoutes;
