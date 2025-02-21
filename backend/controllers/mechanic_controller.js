// backend/controllers/mechanic_controller.js
exports.getMechanics = async (req, res) => {
  // Simulated data – replace with a database query.
  const mechanics = [
    { id: 1, name: 'John Doe', location: 'Downtown' },
    { id: 2, name: 'Jane Smith', location: 'Uptown' },
  ];
  res.status(200).json(mechanics);
};

exports.createMechanic = async (req, res) => {
  const mechanic = req.body;
  // Save mechanic data to your database here.
  res.status(200).json({ message: 'Mechanic created successfully', mechanic });
};
