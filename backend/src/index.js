import express from "express";
import bodyParser from "body-parser";
import {MongoClient} from "mongodb";
import dotenv from 'dotenv';
dotenv.config();


const app = express();
const port = 8080; // default port to listen
import cors from "cors";

app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:3000",
  })
);
app.use(bodyParser.urlencoded({ extended: false }));


app.get("/", async (req, res) => {
    return res.send("Hello, world!!!");
});

app.get("/items", async (req, res) => {
  const collection = db.collection("items");
  const result = await collection.find({}).toArray()
  return res.json(result);
});

// API endpoint to handle rating submissions
app.post("/update-rating/:id", async (req, res) => {
  try {
    const itemId = req.params.id;
    const rating = parseInt(req.body.rating);

    // Check if the rating is within a valid range (e.g., 1 to 5)
    if (rating < 1 || rating > 5) {
      return res.status(400).json({ error: "Invalid rating value." });
    }

    // Find the item by ID in MongoDB
    const item = await Item.findById(itemId);

    // Check if the item with the given ID exists
    if (!item) {
      return res.status(404).json({ error: "Item not found." });
    }

    // Update the rating field of the item
    item.current_rating = rating;

    // Save the updated item
    await item.save();

    res.json({ message: "Rating updated successfully." });
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ error: "Internal server error." });
  }
});

let db;
const client = new MongoClient(process.env.ATLAS_URI);
client
.connect()
.then(() => {
    console.log("Connected successfully to server");
    db = client.db("Food_Rating_Database");
    app.listen(port, () => {
      console.log(`server started at http://localhost:${port}`);
    });
  })
  .catch((err) => {
    console.log("error connecting to mongoDB!", err);
  });
