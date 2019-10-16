// CRUD

// Mongodb node.js driver allow us to access mongodb from nodejs
const mongodb = require('mongodb')

//{} return -> initialise the connection which is the MongoClient
// MongoClient gives us functions and access to the database
const MongoClient = mongodb.MongoClient

// ObjectID
const ObjectID = mongodb.ObjectID
const id = new ObjectID()
console.log(id);

// const { MongoClient, ObjectID } = require('mongodb') 

// Define connection url -> uses mongodb protocol instead of https protocol
const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'


// async connection cause need time to set up
MongoClient.connect(connectionURL, { useNewUrlParser: true }, (error, client) => {
	if (error) {
		return console.log('Unable to connect to database!')
	}

  // mongodb will automatically create the database for us
  const db = client.db(databaseName)
  // db.createCollection('Users').then((collection) => {
  //   collection.insertOne({
  //     name: 'Roy'
  //     age: 27
  //   })
  // })

  // db.collection('users').findOne({ _id: new ObjectID('5da0aaf9af56e05231b3094c') }, (error, user) => {
  //   if (error) {
  //     return console.log('Unable to fetch')
  //   }
  //   console.log(user)
  // })

  // db.collection('tasks').findOne({ _id: new ObjectID('5da0b7460f735f534705c58d') }, (error, task) => {
  //   console.log(task)
  // })

  db.collection('tasks').find({ completed: false}).toArray((error, tasks) => {
    console.log(tasks)
  })

  // db.collection('users').insertOne({
  //   name: 'Roy',
  //   age: 27
  // }, (error, result) => {
  //   if (error) {
  //     return console.log('Unable to insert user')
  //   }

  //   console.log(result, result.ops) // prints array of documents
  // })

  // db.collection('tasks').insertMany([
  //   {
  //     description: 'Buy Food',
  //     completed: false
  //   },
  //   {
  //     description: 'Buy Drugs',
  //     completed: false
  //   },
  //   {
  //     description: 'Buy Books',
  //     completed: false
  //   }
  // ], (error, result) => {
  //   if (error) {
  //     return console.log(error)
  //   }

  //   console.log(result.ops)
  // })
});

