const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

exports.checkPrime = async (req, res) => {
  const number = parseInt(req.params.number);
  if (isNaN(number) || number < 2) {
    return res.status(400).json({ error: 'Please provide a valid integer greater than 1.' });
  }
  const isPrime = (num) => {
    for (let i = 2; i * i <= num; i++) {
      if (num % i === 0) return false;
    }
    return true;
  };
  const primeStatus = isPrime(number) ? 1 : 0;
  try {
    const operation = await prisma.mathOperation.create({
      data: {
        operation: 'prime check',
        result: primeStatus,
      },
    });
    res.json(operation);
  } catch (error) {
    console.error('Error saving prime check calculation:', error);
    res.status(500).json({ error: 'Failed to save calculation' });
  }
};
