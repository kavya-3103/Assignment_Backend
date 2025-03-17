const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const getOperations = async (req, res) => {
    try {
        const operations = await prisma.mathOperation.findMany({
          select: {
            id: true,
            operationType: true, // Ensure this is included
            result: true,
          },
        });
    
        res.json(operations);
      } catch (error) {
        console.error("Error fetching operations:", error);
        res.status(500).json({ error: "Internal server error" });
      }
    };
    

module.exports = { getOperations };
