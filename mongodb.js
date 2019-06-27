//CRUD: Create Read Update Delete

const mongodb = require('mongodb')
const MongoClient = mongodb.MongoClient

const connectionURL = ' mongodb://127.0.0.1:27017'
const database = 'task-manager'

MongoClient.connect(connectionURL, {useNewUrlParser: true}, (error, client) => {
    if (error) {
        console.log('Unable to connect to database')
    }

    const db = client.db(database)

    // db.collection('users').insertMany([
    //     {
    //         name: 'Prabir',
    //         age: 19
    //     }, 
    //     {
    //         name: 'Hrishi',
    //         age: 21
    //     }
    // ], (error, result) => {
    //     if (error) {
    //         return console.log("Cannot insert documents")
    //     } 

    //     console.log(result.ops)
    // })

    // db.collection('tasks').insertMany([
    //     {
    //         description: 'Clean the house',
    //         completed:  true
    //     }, 
    //     {
    //         description: 'Complete iOS app',
    //         completed: false 
    //     }, 
    //     {
    //         description: 'Learn MongoDB',
    //         completed: false 
    //     }
    // ], (error, result) => {
    //      if (error) {
    //          return console.log("Cannot add docs to tasks")
    //      }

    //      console.log(result.ops)
    // })

    // db.collection('users').find({age: 19}).toArray((error, users) => {
    //     console.log(users)
    // })

    // db.collection('tasks').updateMany({
    //     completed: false
    // }, {
    //     $set: {
    //         completed: true 
    //     }
    // }).then((result) => {
    //     console.log(result.modifiedCount)
    // }).catch((error) => {
    //     console.log(error)
    // })

    db.collection('tasks').deleteMany({
        completed: true
    }).then((result) => {
        console.log(result)
    }).catch((error) => {
        console.log(error)
    })

})



 