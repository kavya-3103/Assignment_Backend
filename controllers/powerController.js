const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

exports.calculatePower = async (req, res) => {
  const { base, exponent } = req.body;
  if (typeof base !== 'number' || typeof exponent !== 'number') {
    return res.status(400).json({ error: 'Base and exponent must be valid numbers.' });
  }
  const result = Math.pow(base, exponent);
  try {
    const operation = await prisma.mathOperation.create({
      data: {
        operation: 'power',
        result: result,
      },
    });
    res.json(operation);
  } catch (error) {
    console.error('Error saving power calculation:', error);
    res.status(500).json({ error: 'Failed to save calculation' });
  }
};
