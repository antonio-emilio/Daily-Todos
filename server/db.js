const Pool = require("pg").Pool;

const pool = new Pool({
    user: "postgres",   //Usuario
    password: "postgres",   //Senha
    host: "localhost",   //IP
    port: 5432, //Porta
    database: "perntodo"    //Banco de dados
});

module.exports = pool;
