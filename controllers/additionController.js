const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

exports.calculateAddition = async (req, res) => {
  const { num1, num2 } = req.body;
  if (typeof num1 !== 'number' || typeof num2 !== 'number') {
    return res.status(400).json({ error: 'Both numbers must be valid numbers.' });
  }
  const sum = num1 + num2;
  try {
    const operation = await prisma.mathOperation.create({
      data: {
        operation: 'addition',
        result: sum,
      },
    });
    res.json(operation);
  } catch (error) {
    console.error('Error saving addition calculation:', error);
    res.status(500).json({ error: 'Failed to save calculation' });
  }
};
