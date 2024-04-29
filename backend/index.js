const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");
const express = require("express");
const cors = require("cors");
require("dotenv").config();
const app = express();
const port = process.env.PORT || 5000;
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

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
    const bookingCollection = client
      .db("BlueLine")
      .collection("bookingCollection");
    const cancelTicketCollection = client
      .db("BlueLine")
      .collection("cancelTicketCollection");
    const feedBackCollection = client
      .db("BlueLine")
      .collection("feedBackCollection");

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
      const result = await userCollection.insertOne(userDetails);
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

    // STRIPE PAYMENT INTENT API
    app.post("/create-payment-intent", async (req, res) => {
      const paymentIntent = await stripe.paymentIntents.create({
        amount: req.body.amount * 10,
        currency: "bdt",
        payment_method_types: ["card"],
      });

      res.send({
        clientSecret: paymentIntent.client_secret,
      });
    });

    // BOOK SEAT API
    app.put("/update-seat-status", async (req, res) => {
      // FIND BUS ID TO UPDATE
      const busObject = await busesCollection.findOne({
        _id: new ObjectId(req.body.bus_id),
      });

      req.body.selectedSeats.forEach((seatNumber) => {
        const seatIndex = busObject.seats.findIndex(
          (seat) => seat.seat_number === seatNumber
        );
        if (seatIndex !== -1) {
          busObject.seats[seatIndex].status = "booked";
          busObject.seats[seatIndex].booked = req.body.email;
        }
      });

      const updatedResult = await busesCollection.updateOne(
        { _id: new ObjectId(req.body.bus_id) },
        { $set: { seats: busObject.seats } }
      );

      res.send(updatedResult);
    });

    app.post("/create-booking-info", async (req, res) => {
      const bookingDetails = req.body;
      const result = await bookingCollection.insertOne(bookingDetails);
      res.send(result);
    });

    // GET API FOR BOOKING DETAILS
    app.get("/booking/info/:id", (req, res) => {
      const id = req.params.id;

      const query = { _id: new ObjectId(id) };
      bookingCollection.findOne(query).then((result) => {
        res.send(result);
      });
    });

    // GET API FOR BOOKINGS BASED ON EMAIL
    app.get("/bookings/user/:email", async (req, res) => {
      const email = req.params.email;
      const query = { email };
      const result = await bookingCollection.find(query).toArray();
      res.send(result);
    });

    // POST API FOR CANCEL TICKET
    app.post("/cancel-ticket", async (req, res) => {
      const cancelDetails = req.body;
      const result = await cancelTicketCollection.insertOne(cancelDetails);
      res.send(result);
    });

    // GET API FOR ALL CANCEL TICKETS
    app.get("/cancel-ticket", async (req, res) => {
      const result = await cancelTicketCollection.find().toArray();
      res.send(result);
    });

    // POST API FOR FEEDBACK
    app.post("/feedback", async (req, res) => {
      const feedBackData = req.body;
      const result = await feedBackCollection.insertOne(feedBackData);
      res.send(result);
    });

    // GET API FOR ALL FEEDBACK
    app.get("/feedback", async (req, res) => {
      const result = await feedBackCollection.find().toArray();
      res.send(result);
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

app.get("/", (req, res) => {
  res.send("Server is running");
});

app.listen(port, () => {
  console.log("Server listening on port", port);
});
