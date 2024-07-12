const S = require('fluent-json-schema').default;

const objectiveBodySchema = S.object()
    .prop('objectives', S.string().required())
    .prop('user', S.string().required())
    .prop('objectivesDateBegin',
        S.raw({type: 'string', format: 'date'}).required())
    .prop('objectivesDateEnd',
        S.raw({type: 'string', format: 'date'}).required());

module.exports = {objectiveBodySchema};
