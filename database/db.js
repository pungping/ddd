  
const mongoose = require('mongoose');
const config = require('config');
const db = config.get('mongodb+srv://iamtanawood:p1i2n3k4@employee.awyvq.mongodb.net/myFirstDatabase?retryWrites=true&w=majority');
const connectDB = async () => {
	try {
		await mongoose.connect(db, {
			useNewUrlParser: true,
			useCreateIndex: true,
			useFindAndModify: false,
			useUnifiedTopology: true
		});

		console.log('MongoDB Connected...');
	} catch (err) {
		console.error(err.message);
		// Exit process with failure
		process.exit(1);
	}
};

module.exports = connectDB;