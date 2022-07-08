module.exports = {
    client: 'postgresql',
    connection: {
        database: process.env.database,
        user:     process.env.user,
        password: process.env.password
    },
    pool: {
        min: 2,
        max: 10
    },
    migrations: {
        tableName: 'knex_migrations'
    }
};