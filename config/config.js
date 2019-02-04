require('dotenv').config()

let CONFIG = {}

CONFIG.app = process.env.APP || 'dev'
CONFIG.port = process.env.PORT || '3000'

CONFIG.db_dialect = process.env.DB_DIALECT || 'mongo'
CONFIG.db_host = process.env.DB_HOST || 'localhost'
CONFIG.db_port = process.env.DB_PORT || '27017'
CONFIG.db_name = process.env.DB_NAME || 'DB-Name'
CONFIG.db_user = process.env.DB_USER || 'root'
CONFIG.db_password = process.env.DB_PASSOWRD || 'DB-Password'

module.exports = CONFIG