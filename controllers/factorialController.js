const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

exports.calculateFactorial = async (req, res) => {
  const number = parseInt(req.params.number);
  if (isNaN(number) || number < 0) {
    return res.status(400).json({ error: 'Please provide a valid non-negative integer.' });
  }
  let factorial = 1;
  for (let i = 2; i <= number; i++) {
    factorial *= i;
  }
  try {
    const operation = await prisma.mathOperation.create({
      data: {
        operation: 'factorial',
        result: factorial,
      },
    });
    res.json(operation);
  } catch (error) {
    console.error('Error saving factorial calculation:', error);
    res.status(500).json({ error: 'Failed to save calculation' });
  }
};
