// IMP: Here we are importing the (UserEvents) class from the (userEvents.mjs) file.
// This class helps us represent that a (post) has been created by the (user) and emit it as an event.
import { UserEvents } from "./userEvents.mjs";

// Creating an instance of the UserEvents class.
const userEvent = new UserEvents(); 

// Function to simulate saving the post to a database.
function saveToDatabase() {
    console.log("Post Saved To Database:");
}

// Function to simulate sending a notification to users.
function sendNotification() {
    console.log("Notification Sent:");
}

// Function to simulate updating the user’s timeline.
function updateTimeLine(){
    console.log("TimeLine Updated:");
}

// IMP: Here we are listening to the (postCreated) event and handling it through multiple event listeners.
// Whenever the (postCreated) event is emitted, these functions will execute in order.
userEvent.addListener("postCreated", saveToDatabase);
userEvent.addListener("postCreated", sendNotification);
userEvent.addListener("postCreated", updateTimeLine);

// Creating a new post, which should emit the (postCreated) event.
// This should trigger all three listeners defined above.
userEvent.createPost('hey we have new post from the user');
