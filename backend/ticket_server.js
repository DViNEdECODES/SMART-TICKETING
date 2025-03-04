const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

const seatData = {
    north: { blocks: [{ name: "Block A", seats: [1, 2, 3, 4] }, { name: "Block B", seats: [5, 6, 7, 8] }] },
    south: { blocks: [{ name: "Block C", seats: [9, 10, 11, 12] }, { name: "Block D", seats: [13, 14, 15, 16] }] },
    east: { blocks: [{ name: "Block E", seats: [17, 18, 19, 20] }, { name: "Block F", seats: [21, 22, 23, 24] }] },
    west: { blocks: [{ name: "Block G", seats: [25, 26, 27, 28] }, { name: "Block H", seats: [29, 30, 31, 32] }] }
};

// API to get seats for a stand
app.get("/seats", (req, res) => {
    const { stand } = req.query;
    if (!stand || !seatData[stand]) {
        return res.status(400).json({ message: "Invalid stand" });
    }
    res.json(seatData[stand]);
});

// API to book a seat
app.post("/book", (req, res) => {
    const { stand, block, seat } = req.query;
    if (!stand || !block || !seat) {
        return res.status(400).json({ message: "Missing parameters" });
    }
    res.json({ message: `Ticket booked for Stand: ${stand}, Block: ${block}, Seat: ${seat}` });
});

app.listen(port, () => console.log(`Server running on port ${port}`));
