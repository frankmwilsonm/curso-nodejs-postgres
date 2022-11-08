const boom = require('@hapi/boom');
const { Detest } = require('../db/models/detest.model');
const getConnection = require('../libs/postgres')

const { models } = require('../libs/sequelize'); 

class DetestService {
  constructor() {
    // this.pool = pool; // Quitamos esto 
    // this.pool.on('err', (err)=> console.error(err)); // Esto tambien
  }
 
  async create(data) {
    const newDetest = await models.Detest.create(data);
    return newDetest;
  }
 

  async find() {
    const rta = await models.Detest.findAll();
    return rta;
  }

 
  async findOne(id) {
    const detest = await models.Detest.findByPk(id);
    if (!detest) {
      throw boom.notFound('Detest not found');
    }
    return detest;
  }
 
  async update(id, changes) {
    const detest = await models.Detest.findByPk(id);
    const rta = await detest.update(changes);
    return rta;
  }
 
  async delete(id) {
    const detest = await models.Detest.findByPk(id);
    await detest.destroy();
    return { id };
  }
 
}


module.exports = DetestService;
