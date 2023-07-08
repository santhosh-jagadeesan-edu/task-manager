const express = require('express');
const router = express.Router();

// /api/v1/tasks
router.get('/', (req, res) => {
  res.json({ msg: 'All Tasks' });
});

router.post('/', (req, res) => {
  res.json(req.body);
});

router.get('/:id', (req, res) => {
  res.json({ msg: `Fetched ${req.params.id} Task` });
});

router.patch('/:id', (req, res) => {
  res.json({ msg: `Updated ${req.params.id} Task` });
});

router.delete('/:id', (req, res) => {
  res.json({ msg: `Deleted ${req.params.id} Task` });
});

module.exports = router;
