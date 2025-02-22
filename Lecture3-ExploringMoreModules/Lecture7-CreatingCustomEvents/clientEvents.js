console.log("Learning About Creating-Custom-Events Or Event-Driven-Architecture");

// IMP-NOTE:Understand it through an example:
// -> we are getting the (post) from the (user):and we wanna handle it through the (events) or (event-driven-architecture):
// -> so,we can create the (custom-events) for that:and through that (custom-events) we can handle the (post) from the (user):
// -> through that (custom-event) we can do the (multiple-operations) on that (post) by simply creating the multiple (event-listeners) for that:
// V.IMP:It help us to handle the (post) from the (user) in a (modular-way) or in a (asynchronous-way):that's what event-driven-architecture is all about or help us do:To handle things in a modular-way or in a asynchronous-way:



// IMP-NOTE-2: After receiving a post or post-event from the user, we need to handle it using event-driven architecture. 

// -> To achieve this, we create custom events, which allow us to handle the user's post as an event.  
// -> For creating custom events, we use the built-in 'events' module in Node.js.

// First, import the 'events' module:
const Events = require("events");

// V.IMP: Instead of importing 'events' and then accessing 'EventEmitter', 
// we can directly import 'EventEmitter' from the 'events' module:
const EventEmitter = require("events");

// => Implementing custom events using event-driven architecture:

// IMP-NOTE-1: In this example, we receive a post from the user, but there is no direct 
// interaction point with the user.  
// -> To represent the user, we create a 'User' class, allowing us to pass the post as a property.  

// IMP: Using the 'User' class, we can create user objects and assign posts to them.  

// IMP-NOTE-3: Once the post is created, we need to emit it as an event.  
// -> This allows us to handle it in an event-driven manner.  
// -> The 'emit' method of the 'EventEmitter' class helps us emit the post as an event.  
// -> To use 'emit' within our 'User' class, we must extend 'EventEmitter' in 'User'.  

// IMP-NOTE-4: Exporting the 'User' class so it can be used in the 'script.js' file for server-side handling.  

export class User extends EventEmitter {
    
    // IMP: The 'createPost' method allows the user to create a post.
    // -> When a post is created, an event is emitted.

    createPost(content) {
        console.log("User Created Post:", content);
        
        // The 'emit' method of 'EventEmitter' is used to trigger an event.
        // -> It takes the event name as the first argument and the content as the second argument.
        // -> This allows other parts of the application to react when a post is created.
        this.emit("postCreated", content);
    }
}
