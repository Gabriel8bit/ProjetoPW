const prisma = require('../prisma/client');

const getAllFoods = async (req, res) => {
    try {
        const foods = await prisma.food.findMany();
        res.json(foods);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Something went wrong' });
    }
};

module.exports = {
    getAllFoods,
};
