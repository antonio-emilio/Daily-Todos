const Pool = require("pg").Pool;

const pool = new Pool({
    user: "xxxxxxxxxxxxxxx",   //Usuario
    password: "xxxxxxxxxxxxxxx",   //Senha
    host: "xxxxxxxxxxxxxxx",   //IP
    port: 5432, //Porta
    database: "perntodo"    //Banco de dados
});

module.exports = pool;