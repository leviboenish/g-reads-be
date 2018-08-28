const database = require('./database-connection');

module.exports = {

  getAll(){
    return database('books');
  },

  getOne(id){
    return database('books').where('ID', id).first();
  }

}
