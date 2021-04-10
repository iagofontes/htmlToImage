const mysql = require('mysql2/promise');

const config = {
    db: {
        host: 'br472.hostgator.com.br',
        user: 'osbolo14_tbroot',
        password: 'TraderBotRoot2021!',
        database: 'osbolo14_traderbot',
    },
    listPerPage: 10
};

const query = async (sql, parameters) => {
    const connection = await mysql.createConnection(config.db);
    const [results, ] = await connection.execute(sql, parameters);
    return results;
}

module.exports = {
    query
};
