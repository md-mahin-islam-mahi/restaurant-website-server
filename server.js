const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 4000;

const { MongoClient, ServerApiVersion } = require('mongodb');

require('dotenv').config();

app.use(cors());


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
    // Data for the banner and swipper...
    const banners = client.db("Restaurant").collection("banner"); // Banner
    const swippes = client.db("Restaurant").collection("swipps"); // Swipps
    const menuItems = client.db("Restaurant").collection("menus"); // Menus

    // Banner API
    app.get("/banners", async(req, res) => {
        const query = {};
        const cursor = banners.find(query);
        const result = await cursor.toArray();
        res.send(result);
    });

    // Swippe API
    app.get("/swippes", async(req, res) => {
        const query = {};
        const cursor = swippes.find(query);
        const result = await cursor.toArray();
        res.send(result);
    });

    // Menus API
    app.get("/menus", async(req, res) => {
      const query = {};
      const cursor = menuItems.find(query);
      const result = await cursor.toArray();
      res.send(result);
    })

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