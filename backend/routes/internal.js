/**
 * internal routes for the backend
 * @param {*} fastify fastify instance
 */
async function internalRoutes(fastify) {
  // internal routes
  fastify.register(require('./objectives/route'), {prefix: '/objectives'});
}

module.exports = internalRoutes;
