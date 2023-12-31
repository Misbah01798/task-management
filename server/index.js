const express = require('express');
const app = express();
const cors = require('cors');
// const jwt = require('jsonwebtoken');
require("dotenv").config();
const port = process.env.PORT || 5001;

//midleWare
app.use(cors());
app.use(express.json());


const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.o7rdiup.mongodb.net/?retryWrites=true&w=majority`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();

    const usersData = client.db('TaskManagement').collection('taskUser');
    const taskData = client.db('TaskManagement').collection('task');
   


    // app.post('/jwt', async (req, res) => {
    //   const user = req.body;
    //   const token = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, { expiresIn: '2h' });
    //   res.send({ token });
    // })

    //middlewie
    // const verifyToken = (req, res, next) => {
    //   // console.log('inside verify token', req.headers.authorization);
    //   if (!req.headers.authorization) {
    //     return res.status(401).send({ message: 'unauthorized access1' });
    //   }
    //   const token = req.headers.authorization.split(' ')[1];
    //   jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, decoded) => {
    //     if (err) {
    //       return res.status(401).send({ message: 'unauthorized access' })
    //     }
    //     req.decoded = decoded;
    //     next();
    //   })
    // }
    app.get('/taskUser', async (req, res) => {
      let query = {}
      if (req.query.email) {
        query = { email: req.query.email }
      }
      const result = await usersData.find(query).toArray();
      res.send(result);
    });
    app.post("/task", async (req, res) =>{
      const user = req.body;
      const result = await taskData.insertOne(user);
      console.log(result);
      res.send(result);
  });
  app.get('/task', async (req, res) => {
    
    let query={}
     if(req.query.email){
       query={email: req.query.email }
     }
     
     const result = await taskData.find(query).toArray();
     res.send(result);
 });

    app.post('/taskUser', async (req, res) => {
      const user = req.body;
      const query = { email: user.email }
      const existingUser = await usersData.findOne(query);
      if (existingUser) {
        return res.send({ message: 'user already exists', insertId: null })
      }
      const result = await usersData.insertOne(user);
      res.send(result);
    });

    // Assuming you have an endpoint like this in your backend
    

   

    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.dir);

app.get('/', (req, res) => {
  res.send('task management server running');
})

app.listen(port, () => {
  console.log(`Contest srver is running on port ${port}`);
})