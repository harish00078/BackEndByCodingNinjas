// IMP:Here we are importing the (User) class from the (clientEvents.js) file: 
// through which we are gonna be able to represents that the (post) has been created by the (user) and emit it as an event:

import { UserEvents } from "./userEvents";

const userEvent = new UserEvents();


function saveToDatabase() {
    console.log("Post Saved To Database:");
}

function sendNotification() {
    console.log("Notification Sent:");
}

function updateTimeLine(){
    console.log("TimeLine Updated:");
}

// IMP:Here we are listening to the (postCreated) event and handling it through the (event-listeners):
// -> 
userEvent.addListener("postCreated", saveToDatabase);
userEvent.addListener("postCreated", sendNotification);
userEvent.addListener("postCreated", updateTimeLine);

userEvent.createPost('hey we have new post from the user');