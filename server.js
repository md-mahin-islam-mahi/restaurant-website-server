const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 4000;

const { MongoClient, ServerApiVersion } = require('mongodb');

require('dotenv').config();




const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.4lqljgn.mongodb.net/?retryWrites=true&w=majority`;

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
    
  } finally {
    
  }
}
run().catch(console.dir);


app.get('/', (req, res) => {
    res.send("Server is running...");
})

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
})