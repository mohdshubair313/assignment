const { PrismaClient } = require('@prisma/client')
const express = require('express')

const prisma = new PrismaClient();
const router = express.Router();

router.post('/', async (req, res) => {
    const {title, description , status ,userId } = req.body;

    try {
        const task = await prisma.task.create({
            data: {title, description, status, userId},
        });
        res.status(201).json(task);
        console.log("Tasks are created successfully!!")
    } catch (error) {
        res.status(401).json({error: "Your tasks are not created"});
    }
});

// Fetching the tasks
router.get('/:userId', async (req,res) => {
    const {userId} = req.params;
    const tasks = await prisma.task.findMany({where: {userId: parseInt(userId)}});
    res.json(tasks);
})

module.exports= router;