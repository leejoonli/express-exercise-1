require('dotenv').config();
const mongoose = require('mongoose');

// Mongo URL and Connection
const mongoURI = process.env.DATABASE_URL;
const db = mongoose.connection;

// connect to Mongo
mongoose.connect(mongoURI);

// Connection Error/Success - optional but can be helpful
// Define callback functions for various events
db.on('error', (err) => console.log(err.message + ' is Mongod not running?'));
db.on('connected', () => console.log('mongo connected at: ', mongoURI));
db.on('disconnected', () => console.log('mongo disconnected'));

// Open the Connection
db.on('open', () => {
	console.log('✅ mongo connection made!');
});

// export
module.exports = mongoose;