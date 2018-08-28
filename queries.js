const database = require('./database-connection');

module.exports = {

  getAllBooks(){
    return database('books');
  },

  getAllAuthors(){
    return database('authors');
  },

  getOne(id){
    return database('books').where('ID', id).first();
  }

}
