const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

// Update a math operation record by ID
exports.updateOperation = async (req, res) => {
  const { id } = req.params;
  const { operation, result } = req.body;

  // Ensure at least one field is provided to update
  if (!operation && (result === undefined)) {
    return res.status(400).json({ error: 'Please provide at least one field to update.' });
  }

  try {
    const updatedRecord = await prisma.mathOperation.update({
      where: { id: parseInt(id) },
      data: {
        // Only update fields if provided
        ...(operation && { operation }),
        ...(result !== undefined && { result })
      },
    });
    res.json(updatedRecord);
  } catch (error) {
    console.error('Error updating operation:', error);
    res.status(500).json({ error: 'Failed to update operation.' });
  }
};

// Delete a math operation record by ID
exports.deleteOperation = async (req, res) => {
  const { id } = req.params;
  try {
    const deletedRecord = await prisma.mathOperation.delete({
      where: { id: parseInt(id) },
    });
    res.json(deletedRecord);
  } catch (error) {
    console.error('Error deleting operation:', error);
    res.status(500).json({ error: 'Failed to delete operation.' });
  }
};
