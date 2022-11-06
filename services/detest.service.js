const boom = require('@hapi/boom');
const getConnection = require('../libs/postgres')


const sequelize = require('../libs/sequelize'); // importando nuestro sequelize

class DetestService {
  constructor() {
    // this.pool = pool; // Quitamos esto 
    // this.pool.on('err', (err)=> console.error(err)); // Esto tambien
  }
 
  // async create(data) {
  //   return data;
  // }
 
  // async find() {
  //   const client = await getConnection();
  //   const rta = await client.query('SELECT * FROM tasks');
  //   return rta.rows;
  // }

  async find() {
    const query = 'SELECT * FROM tasks';
    const [data] = await sequelize.query(query);
    return data;
  }

 
  // async findOne(id) {
  //   return { id };
  // }
 
  // async update(id, changes) {
  //   return {
  //     id,
  //     changes,
  //   };
  // }
 
  // async delete(id) {
  //   return { id };
  // }
 
}


module.exports = DetestService;
