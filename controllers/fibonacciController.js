const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

exports.calculateFibonacci = async (req, res) => {
  const count = parseInt(req.params.count);
  if (isNaN(count) || count <= 0) {
    return res.status(400).json({ error: 'Please provide a valid positive integer.' });
  }
  
  let sequence = [];
  for (let i = 0; i < count; i++) {
    if (i === 0) {
      sequence.push(0);
    } else if (i === 1) {
      sequence.push(1);
    } else {
      sequence.push(sequence[i - 1] + sequence[i - 2]);
    }
  }
  
  try {
    const operation = await prisma.mathOperation.create({
      data: {
        operation: 'fibonacci',
        result: sequence,  // Storing as JSON array
      },
    });
    res.json(operation);
  } catch (error) {
    console.error('Error saving fibonacci calculation:', error);
    res.status(500).json({ error: 'Failed to save calculation' });
  }
};
