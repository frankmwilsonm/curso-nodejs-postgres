const { Detest, DetestSchema } = require('./detest.model');

function setupModels(sequelize) {
    Detest.init(DetestSchema, Detest.config(sequelize));
}

module.exports = setupModels;
