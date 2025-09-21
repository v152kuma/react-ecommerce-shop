// This file sets up a simple Node.js Express server to handle
// house and bid data via a RESTful API.

// Import the express library
const express = require('express');
const cors = require('cors');

// Initialize the Express application
const app = express();
const PORT = 3001;

// Enable CORS for all routes
app.use(cors());
// Middleware to parse incoming JSON requests
// This is essential for handling POST requests with a JSON body
app.use(express.json());

// --- Mock Data and "Repository" Logic ---
// We'll use simple arrays to simulate a database for this example.
// In a real-world application, you would connect to a database like MongoDB or PostgreSQL here.

// Initial data for houses
let houseArray = [
    { id: 1, address: "123 Main St", country: "USA", price: 250000, photo: "1" },
    { id: 2, address: "456 Maple Ave", country: "Canada", price: 300000, photo: "2" },
    { id: 3, address: "789 Oak Dr", country: "UK", price: 200000, photo: "3" },
];

// Initial data for bids
// The `houseId` links the bid to a specific house
let bidArray = [
    { id: 101, houseId: 1, bidderName: "Alice", bidAmount: 260000 },
    { id: 102, houseId: 2, bidderName: "Bob", bidAmount: 310000 },
    { id: 103, houseId: 1, bidderName: "Charlie", bidAmount: 265000 },
    { id: 104, houseId: 3, bidderName: "David", bidAmount: 210000 },
];

// --- API Endpoints ---
// These endpoints mirror the functionality you described in your C# code.

// GET /house
// Returns all houses.
// The `await Task.Delay(2000)` from your C# code is simulated with a Promise and setTimeout.
app.get("/house", async (req, res) => {
    // Simulate a 2-second delay to mimic database query latency
    await new Promise(resolve => setTimeout(resolve, 2000));
    res.json(houseArray);
});

// POST /house
// Adds a new house to the mock data.
app.post("/house", async (req, res) => {
    // Simulate a 2-second delay
    await new Promise(resolve => setTimeout(resolve, 2000));
    const newHouse = req.body;
    // Simple way to generate a new unique ID
    newHouse.id = houseArray.length > 0 ? Math.max(...houseArray.map(h => h.id)) + 1 : 1;
    houseArray.push(newHouse);
    res.status(201).json(newHouse);
});

// GET /bid/:houseId
// Returns all bids for a specific house.
app.get("/bid/:houseId", async (req, res) => {
    // Simulate a 2-second delay
    await new Promise(resolve => setTimeout(resolve, 2000));
    const houseId = parseInt(req.params.houseId);
    const bidsForHouse = bidArray.filter(bid => bid.houseId === houseId);
    res.json(bidsForHouse);
});

// POST /bid
// Adds a new bid to the mock data.
app.post("/bid", async (req, res) => {
    // Simulate a 2-second delay
    await new Promise(resolve => setTimeout(resolve, 2000));
    const newBid = req.body;
    // Generate a new unique ID for the bid
    newBid.id = bidArray.length > 0 ? Math.max(...bidArray.map(b => b.id)) + 1 : 1;
    bidArray.push(newBid);
    res.status(201).json(newBid);
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
    console.log(`You can now make API requests to this server.`);
});
