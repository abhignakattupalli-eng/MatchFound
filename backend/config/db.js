const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    mongodb+srv//abhignakattupalli_db_user:abhignaanduserpass123@cluster0.nlsmy3r.mongodb.net/smart_campus_lost_found?retryWrites=true&w=majority&appName=Cluster0
    const conn = await mongoose.connect(mongoUri);
    console.log(`[MongoDB] Connected successfully to: ${conn.connection.host}/${conn.connection.name}`);
  } catch (error) {
    console.error(`[MongoDB] Connection error: ${error.message}`);
    process.exit(1);
  }
};

module.exports = connectDB;
