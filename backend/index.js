const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");
const express = require("express");
const cors = require("cors");
require("dotenv").config();
const app = express();
const port = process.env.PORT || 5000;
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY, {
  apiVersion: "2022-08-01",
});

// middleware
app.use(cors());
app.use(express.json());

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.iixzvov.mongodb.net/?retryWrites=true&w=majority`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function run() {
  try {
    const busesCollection = client.db("BlueLine").collection("BusesCollection");
    const userCollection = client.db("BlueLine").collection("userCollection");

    // GET API FOR ALL BUSES
    app.get("/all-buses", async (req, res) => {
      const result = await busesCollection.find().toArray();
      res.send(result);
    });

    // GET API FOR ALL BUSES
    app.get("/bus/get/:id", async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) };
      const result = await busesCollection.findOne(query);
      res.send(result);
    });

    // POST API FOR USER REGISTER
    app.post("/user/register", async (req, res) => {
      const userDetails = req.body;
      const result = userCollection.insertOne(userDetails);
      res.send(result);
    });

    // GET API FOR USER INFO
    app.get("/user/info/:email", (req, res) => {
      const email = req.params.email;
      const query = { email };
      userCollection.findOne(query).then((result) => {
        res.send(result);
      });
    });

    await client.db("admin").command({ ping: 1 });
    console.log(
      "Pinged your deployment. You successfully connected to MongoDB!"
    );
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.dir);
// stripe payment 

app.get("/payment-config", (req, res) => {
  res.send({
    publishableKey: process.env.STRIPE_PUBLISHABLE_KEY,
  });
});

app.post("/create-payment-intent", async (req, res) => {
  try{
    const paymentIntent=await stripe.paymentIntents.create({
      currency:"usd",
      amount:100,
      automatic_payment_methods:{enabled:true,
      }
    })
    res.send({clientSecret:paymentIntent.client_secret})
  }
  catch(e){
    return res.status(400).send({error:{message:e.message}})
  }
});

app.get("/", (req, res) => {
  res.send("Server is running");
});

app.listen(port, () => {
  console.log("Server listening on port", port);
});
