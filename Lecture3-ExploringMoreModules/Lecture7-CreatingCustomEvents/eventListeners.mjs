// IMP: Here we are importing the (UserEvents) class from the (userEvents.mjs) file.
// This class helps us represent that a (post) has been created by the (user) and emit it as an event.
import { UserEvents } from "./userEvents.mjs";

// IMP:we are gonna be able to do that with the help of (class):by Creating an instance or (object) of the UserEvents class.
// This instance or (object) will be used to (emit) post as event.
// V.IMP-NOTE:because we are gonna be use the (property) of the (UserEvents) class to (emit) the (post) as an event:which we basically defined in the (userEvents) class:
const user = new UserEvents(); 

// Function to simulate saving the post to a database.
// This function will execute when the "postCreated" event is triggered.
function saveToDatabase() {
    console.log("Post Saved To Database:");
}

// Function to simulate sending a notification to users.
// This function will be triggered when a new post is created.
function sendNotification() {
    console.log("Notification Sent:");
}

// Function to simulate updating the user’s timeline.
// When a new post is created, this function updates the user's timeline accordingly.
function updateTimeLine(){
    console.log("TimeLine Updated:");
}

// IMP: Here we are listening to the (postCreated) event and handling it through multiple event listeners.
// Whenever the (postCreated) event is emitted, the registered event listeners (functions) will execute in order.
user.addListener("postCreated", saveToDatabase);
user.addListener("postCreated", sendNotification);
user.addListener("postCreated", updateTimeLine);

// V.IMP-NOTE: Emitting the "postCreated" event by calling the createPost method.
// This will trigger all event listeners associated with the "postCreated" event.
user.createPost('hey we have new post from the user');
