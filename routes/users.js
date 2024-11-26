const express = require('express')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();
const router = express.Router();

router.post('/register', async (req,res) => {
    const {name, email, password} = req.body;

    const hashedPassword = await bcrypt.hash(password, 10);

    try {
        const user = await prisma.user.create({
            data: {name, email, password: hashedPassword},
    });
    res.status(201).json(user)
    console.log("User is created")
    } catch (error) {
        res.status(400).json({error: "User already exists"});
    }
})

router.post('/login', async(req,res) => {
    const {email, password} = req.body;

    try {
        const user = await prisma.user.findUnique({where: {email}});

    // step2 check the user is exist and password is matching or not? 
    if(!user || !(await bcrypt.compare(password, user.password))) {
        return res.status(401).json({error: 'Invalid Credentials'});
    }

    // generate Jwt token
    const token = jwt.sign({userId: user.id}, process.env.JWT_SECRET, {
            expiresIn: '1hr',
    });

    res.json({token});
    } catch (error) {
        res.status(500).json({error: "Something went wrong or you may not enter the right credentials"})
    }
})

module.exports = router;