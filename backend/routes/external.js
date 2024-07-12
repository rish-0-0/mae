/**
 * external routes for the backend
 * @param {*} fastify fastify instance
 */
async function externalRoutes(fastify) {
  // external routes
  fastify.register(require('./objectives/route'), {prefix: '/objectives'});
}

module.exports = externalRoutes;
