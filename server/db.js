const Pool = require("pg").Pool;

const pool = new Pool({
    user: "postgres",   //Usuario
    password: "xxxxxxx",   //Senha
    host: "xxxxxxx",   //IP
    port: 5432, //Porta
    database: "perntodo"    //Banco de dados
});

module.exports = pool;
