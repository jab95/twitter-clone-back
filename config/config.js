const PORT = process.env.PORT || 3000
const DB_HOST = process.env.MONGO_URL || "mongodb+srv://jayala:lol123..@cluster0.akjbboy.mongodb.net/?retryWrites=true&w=majority"

module.exports = {
    PORT: PORT,
    DB_HOST: DB_HOST
}