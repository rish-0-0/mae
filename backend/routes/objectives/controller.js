
/**
 * create an objective document in the objectives collection
 * @param {*} fastify fastify instance
 * @param {*} request fastify request object
 * @param {*} reply fastify reply object
 */
async function createObjective(fastify, request, reply) {
  const objectivesCollection = fastify.mongo.db.collection('objectives');
  await objectivesCollection.insertMany([request.body]);

  return reply
      .code(200)
      .send({
        hasCreated: true,
      });
}

/**
 * fetch all objectives
 * @param {*} fastify fastify instance
 * @param {*} request fastify request object
 * @param {*} reply fastify reply object
 */
async function getObjectives(fastify, request, reply) {
  const objectivesCollection = fastify.mongo.db.collection('objectives');
  const objectives = await objectivesCollection.find({}).toArray();

  return reply
      .code(200)
      .send({
        objectives,
      });
}

module.exports = {createObjective, getObjectives};
