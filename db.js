const Pool = require('pg').Pool;

var pool = new Pool({
    user: "postgres",
    host: "localhost",
    database: "jornadaescriva",
    password: "admin",
    port: 5432,
});


if (process.env.NODE_ENV === 'production') {
    // Código específico para ambiente de produção
    console.log("produção");
    pool = new Pool({
        connectionString: 'postgres://admin:ubnyp1CvoJ6X5bceFFtvXAwL6iOPGLFJ@dpg-cnda2aect0pc73fvjvng-a.oregon-postgres.render.com/escrivatalks?sslmode=require'
    });
}

module.exports = pool;