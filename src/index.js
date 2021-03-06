const express = require('express')
require('./db/mongoose')
const User = require('./model/user')
const Task = require('./model/task')
const app = express()
const userRouter = require('./routers/user')
const taskRouter = require('./routers/task')

const port = process.env.PORT 

app.use(express.json())
app.use(userRouter)
app.use(taskRouter)
app.listen(port, () => {
    console.log('Server is up on', port)
})

