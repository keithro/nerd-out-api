// const mongoose, { Schema } = require('./connection');
const Attendee = require('../models/AttendeeModel');
const seedData = require('./attendees.json')


Attendee.deleteMany({}).then(() => {
  console.log('deleted all attendees');

  Attendee.insertMany(seedData, (err, docs) => {
		if (err) {
			console.log(err);
		} else {
			console.log('Seed data has been seeded!');
      // console.log(docs);
		}
		process.exit();
	})

  // Attendee.insertMany(seedData).then(() => {
  //     console.log("Data inserted")  // Success
  // }).catch(function(error){
  //     console.log(error)      // Failure
  // });
  // process.exit();
})


