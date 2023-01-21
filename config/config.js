const PORT = process.env.PORT || 3000
const DB_HOST = process.env.MONGO_URL || "mongodb://mongo:EgQkfof4gNmcSZO5T28u@containers-us-west-100.railway.app:7011"

module.exports = {
    PORT: PORT,
    DB_HOST: DB_HOST
}