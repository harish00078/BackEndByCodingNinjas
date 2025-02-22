console.log("Learning About Creating-Custom-Events Or Event-Driven-Architecture");

// IMP-NOTE:Understand it through an example:
// -> we are getting the (post) from the (user):and we wanna handle it through the (events) or (event-driven-architecture):
// -> so,we can create the (custom-events) for that:and through that (custom-events) we can handle the (post) from the (user):
// -> through that (custom-event) we can do the (multiple-operations) on that (post) by simply creating the multiple (event-listeners) for that:
// V.IMP:It help us to handle the (post) from the (user) in a (modular-way) or in a (asynchronous-way):that's what event-driven-architecture is all about or help us do:To handle things in a modular-way or in a asynchronous-way:



// IMP-NOTE-2:Know after getting the post or post-event from the user:we have to handle it through the (events) or (event-driven-architecture):
// -> for that we need to create the (custom-events) :and through that (custom-events) we can handle the (post) from the (user):
// -> so for creating the (custom-events):we have to use the (build-in) or (core-module) of the nodejs:and which is the (events) module:

// first:Import the (event) module:
// const Events = require("events");

// V.IMP:we have to use the (EventEmitter-class) of the (events-module):which is gonna help us to create or work with the (custom-events) or (event-driven-architecture):so instead of first importing (events) and then use its (EventEmitter-class):we can directly import the (EventEmitter-class) from the (events-module):

const EventEmitter = require("events");



// => Implementing the (custom-event) or Event-Driven-Architecture:

// IMP-NOTE-1:Acc to example we are getting the post the (user):but here we did not have any interaction-point with the user:
// so for representing the (user):we can create the (user) Class:and through that we can pass the (post) as it is from the (user):
// IMP:we gonna do that by using (User-class):we can create the (user) or (user-object):and with in that (user-object) we can create the (post) with the help of (user-class) property:



// IMP-NOTE-3:So after creating or having the post:


class User{

    // IMP:for creating the (post) with in the (user-class): we have to create the (createPost) property with the help of function or method:
    // which is gonna help us to create the (post) with in the (user-class):
    createPost(content){
        console.log("User Created Post:",content);
    }
}





// chatgpt explanation on code:
const Events = require("events");

// User class extends EventEmitter
class User extends Events {
    createPost(content) {
        console.log("User Created Post:", content);
        this.emit("postCreated", content); // Emitting an event
    }
}

// Create a user instance
const user1 = new User();

// Listen for the "postCreated" event
user1.on("postCreated", (content) => {
    console.log("Event Received! Processing Post:", content);
});

// Create a post
user1.createPost("Hello, this is my first post!");