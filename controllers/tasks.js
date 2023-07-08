const getAllTasks = (req, res) => {
  res.json({ msg: 'All Tasks' });
};

const createTask = (req, res) => {
  res.json(req.body);
};

const getTask = (req, res) => {
  res.json({ msg: `Fetched ${req.params.id} Task` });
};

const updateTask = (req, res) => {
  res.json({ msg: `Updated ${req.params.id} Task` });
};

const deleteTask = (req, res) => {
  res.json({ msg: `Deleted ${req.params.id} Task` });
};

module.exports = {
  getAllTasks,
  createTask,
  getTask,
  updateTask,
  deleteTask,
};
