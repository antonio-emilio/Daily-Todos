const Pool = require("pg").Pool;

const pool = new Pool({
    user: "postgres",   //Usuario
    password: "014589Oi@",   //Senha
    host: "localhost",   //IP
    port: 5432, //Porta
    database: "perntodo"    //Banco de dados
});

module.exports = pool;
