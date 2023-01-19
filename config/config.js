const PORT = process.env.DB_HOST || 3100
const DB_HOST = process.env.MONGO_URL || "mongodb://mongo:lWAbHw9fkX270AAaCMF5@containers-us-west-47.railway.app:7648"

module.exports = {
    PORT: PORT,
    DB_HOST: DB_HOST
}