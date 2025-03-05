
import express from "express";
 // Import the event class
import { UserEvents } from "./userEvents.mjs"; 

const app = express();
const PORT = 5000;

// Middleware to parse JSON data from the client
app.use(express.json());

const userEvent = new UserEvents();  // Create an instance of UserEvents

// Event Listeners (Processing Handlers)
function saveToDatabase(postContent) {
    console.log(`✅ Post Saved To Database: ${postContent}`);
}

function sendNotification(postContent) {
    console.log(`📢 Notification Sent for Post: ${postContent}`);
}

function updateTimeLine(postContent) {
    console.log(`🔄 Timeline Updated with Post: ${postContent}`);
}

// Register Listeners for "postCreated" Event
userEvent.on("postCreated", saveToDatabase);
userEvent.on("postCreated", sendNotification);
userEvent.on("postCreated", updateTimeLine);

// API Route to Accept Post from Client-Side
app.post("/create-post", (req, res) => {
    const { postContent } = req.body;

    if (!postContent) {
        return res.status(400).json({ error: "Post content is required" });
    }

    console.log(`📩 Received Post from Client: ${postContent}`);

    // Emit an event to handle the post asynchronously
    userEvent.createPost(postContent);

    res.status(200).json({ message: "Post received and being processed" });
});

// Start the Express Server
app.listen(PORT, () => {
    console.log(`🚀 Server is running on http://localhost:${PORT}`);
});

