const boom = require('@hapi/boom');
const getConnection = require('../libs/postgres')

const pool = require('../libs/postgres.pool'); // importando nuestro pool

class DetestService {
  constructor() {
    this.pool = pool; // Añadimoe el pool
    this.pool.on('err', (err)=> console.error(err)); // capturar error 
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
    const rta = await this.pool.query(query);
    return rta.rows;
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
