const mongoose = require('mongoose');

// Define the MongoDB connection URL 
const mongoURL = 'mongodb://localhost:27017/hotels'

// Set up MongoDB mongoose.connection
mongoose.connect(mongoURL,{
    useNewUrlParser : true,
    useUnifiedTopology : true
})

// Get the default mongoose.connection
// Mongoose maintains a default connection object representing the MongoDB connection.

const db = mongoose.connection;

// Define event Listeners for database connection 

db.on('connected',()=>{
    console.log('connected to MongoDB server');
    
})
db.on('error',(err)=>{
    console.log('MongoDB Connection error:',err);
    
})
db.on('disconnected',()=>{
    console.log('MongoDB disconnected');
    
})

// Export The database connection
module.exports = db;

