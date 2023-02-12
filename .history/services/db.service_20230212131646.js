// File path: ./services/db.service.js
const mongoose = require('mongoose');

class DbService {
    connection;
    async connect() {
        mongoose.set('strictQuery', true);
        this.connection = await mongoose.connect(process.env.MONGO_URI);
        console.log('DB connected');
    }
}

module.exports = new DbService();