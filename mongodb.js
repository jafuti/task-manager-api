
const {MongoClient,ObjectID} = require('mongodb');

//const connectionURL = 'mongodb://127.0.0.1:27017' //The url to connect
const databaseName = 'task-manager'               //The database needs to create

MongoClient.connect(process.env.MONGODB_URL, { useNewUrlParser:true}, (error,client) =>{
   if(error){
      return  console.log('unable to connect to database')
   }
 const db = client.db(databaseName)
  db.collection('users').deleteMany({
     age:27
  }).then((result)=>{
       console.log(result); 
  }).catch((error)=>{
     console.log(error);
  })
})

