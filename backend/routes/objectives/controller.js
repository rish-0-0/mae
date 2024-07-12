
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

/**
 * update one objective
 * @param {*} fastify fastify app instance
 * @param {*} request fastify request object
 * @param {*} reply fastify reply object
 */
async function updateObjective(fastify, request, reply) {
  const objectivesCollection = fastify.mongo.db.collection('objectives');
  const ObjectId = fastify.mongo.ObjectId;
  const {id: idFromParams} = request.params;
  const id = new ObjectId(idFromParams);
  const fields = request.body;

  const updated = await objectivesCollection
      .updateOne({_id: id}, {$set: fields});

  return reply
      .code(200)
      .send({
        hasUpdated: updated.acknowledged,
        matchedCount: updated.matchedCount,
        updatedCount: updated.modifiedCount,
      });
}

/**
 * delete multiple objectives using _id
 * @param {*} fastify fastify app instance
 * @param {*} request fastify request object
 * @param {*} reply fastify reply object
 */
async function deleteObjectives(fastify, request, reply) {
  const objectivesCollection = fastify.mongo.db.collection('objectives');
  const {ids} = request.body;

  const deleted = await objectivesCollection.deleteMany({_id: {$in: ids}});
  return reply
      .code(200)
      .send({
        hasDeleted: deleted.acknowledged,
        deleteCount: deleted.deleteCount,
      });
}

module.exports = {
  createObjective,
  getObjectives,
  updateObjective,
  deleteObjectives,
};
