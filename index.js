const express = require('express');
const cors = require("cors");
const dotenv = require('dotenv');
dotenv.config();
const PORT = process.env.PORT || 8080;
const app = express();
const userRouter = require("./routes/users");
const TaskRouter = require("./routes/tasks");

app.use(cors());
app.use(express.json());
app.use('/api/users', userRouter);
app.use('/api/tasks', TaskRouter);


app.listen(PORT,() => {
    console.log(`Server running on Port ${PORT}`)
})