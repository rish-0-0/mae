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
      async (request, reply) => await createObjective(fastify, request, reply),
  );
  fastify.get('/', {},
      async (request, reply) => await getObjectives(fastify, request, reply),
  );
  fastify.patch('/:id', {},
      async (request, reply) => await updateObjective(fastify, request, reply),
  );
  fastify.delete('/', {},
      async (request, reply) => await deleteObjectives(fastify, request, reply),
  );
}

module.exports = objectivesRoutes;
