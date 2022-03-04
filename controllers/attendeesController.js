const express = require('express');
const router = express.Router();
const Attendee = require('../models/AttendeeModel');


// Shows all 1,000 attendees
router.get('/', async (req, res) => {
  try {
    const attendees = await Attendee.find({});
    res.status(200).json(attendees);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: 'Server error'});
  }
});

// Shows all listed based upon team number that is inputed
router.get('/team/:num', async (req, res) => {
  try {
    const attendees = await Attendee.find({ team: req.params.num });

    if(!attendees) {
      res.status(404).json({ message: 'No attendees found'});
    }
    res.status(200).json(attendees);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: 'Server error'});
  }
});

// Shows all based upon company
router.get('/company/:name', async (req, res) => {
  try {
    const attendees = await Attendee.find({ company: req.params.name });

    if(!attendees) {
      res.status(404).json({ message: 'No attendees found'});
    }
    res.status(200).json(attendees);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: 'Server error'});
  }
});

// Show attendees based upon the title
router.get('/title/:title', async (req, res) => {
  try {
    const attendees = await Attendee.find({ title: req.params.title });

    if(!attendees) {
      res.status(404).json({ message: 'No attendees found'});
    }
    res.status(200).json(attendees);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: 'Server error'});
  }
});

// Update attendee by id
router.put('/:id', async (req, res) => {
  try {
    const attendee = await Attendee.findOneAndUpdate({ id: req.params.id }, req.body, {new: true});

    if(!attendee) {
      res.status(404).json({ message: 'No attendees found'});
    }

    res.status(200).json(attendee);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: 'Server error'});
  }
});

// Find attendee id #98 Mojo Jojo and delete them from the API

// Delete attendee by id
router.delete('/:id', async (req, res) => {
  try {
    const message = await Attendee.deleteOne({ id: req.params.id });

    if(message.deletedCount !== 0) {
      res.status(404).json({ message: 'No attendees found'});
    }

    res.status(200).json(message);


    // TODO: FIND AND RETURN COMPLETE LIST?
    // const deletedAttendee = await Attendee.findOneAndDelete({ id: req.params.id });
    
    // if(!deletedAttendee) {
    //   res.status(404).json({ message: 'No attendees found'});
    // }

    // const attendees = await Attendee.find({ team: req.params.num });

    // res.status(200).json(attendees);

  } catch (err) {
    console.log(err);
    res.status(500).json({ error: 'Server error'});
  }
});


// Create a new attendee
router.post('/', async (req, res) => {
  try {
    // Get the last/highest id and set newId to next number in seq. order
    const idList = await Attendee.find({}, 'id', {sort: '-id'});
    const newId = idList[0].id + 1;
    
    const attendee = await Attendee.create({...req.body, id: newId});

    if(!attendee) {
      res.status(404).json({ message: 'No attendees found'});
    }

    res.status(201).json(attendee);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: 'Server error'});
  }
});


module.exports = router;
