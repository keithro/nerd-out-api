const mongoose = require('../db/connection');
const { Schema } = mongoose;

const attendeeSchema = new Schema({
  id: Number,
  name: String,
  phone: String,
  address: String,
  city: String,
  state: String,
  country: String,
  postalZip: String,
  email: String,
  company: {
    type: String,
    enum: ["Apple", "Microsoft", "Google", "Yahoo", "Adobe", "Amazon", "Meta", "Sony", "Oracle"]
  },
  companyFunded: Number,
  userID: String,
  team: Number,
  paid: Boolean,
  date: String,
  title: {
    type: String,
    enum: ["CustomerSuccess", "FrontEnd", "DevOps", "QA", "BackEnd", "FullStack", "TechLead", "DataScience", "President", "ProjectManagement", "UI"]
  }
});

module.exports = mongoose.model('Attendee', attendeeSchema);
