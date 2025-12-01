// Logging an introductory message about Event-Driven Architecture
console.log(
  "Learning About Creating Custom Events in Event-Driven Architecture"
);

/*
 * Understanding Event-Driven Architecture through an example:
 * -----------------------------------------------------------
 * -> We are receiving a post from a user and want to handle it using events or (event-driven architecture).
 * -> To achieve this, we can create custom-events that allow us to process user posts in (event-driven) architecture-way or asynchronous-way.
 * -> With custom events, we can perform multiple-operations on a post by simply adding multiple event-listeners to it.
 * -> V.IMP: This modular approach ensures that each operation runs independently without blocking the main thread.
 *
 * ✅ Key Benefit: Event-driven architecture improves performance and scalability by handling events asynchronously.
 */

// Creating Custom Events in an Event-Driven Architecture
// -------------------------------------------------------

/*
 * In Node.js, we use the built-in ['events'] module to create and handle custom-events.
 * -> The 'events' module provides an 'EventEmitter' class that allows us to create custom-events.
 * -> IMP: The 'EventEmitter' class is the core of the 'events' module.
 * The 'EventEmitter' class provides methods like 'emit()' to trigger an event: and 'on()' or (addListener) to listen for those events.
 *
 * => 1: Importing (events) module or (EventEmitter) class through commonjs-syntax:
 * 
 * -> 1: Importing 'EventEmitter' using CommonJS syntax:we can directly import the EventEmitter class from the events module as well.through multiple-ways:
 * const EventEmitter = require("events").EventEmitter;
 *
 * IMP:Or we can import the (module) first:and then latter access its (EventEmitter) class with in our own-created class:through which we are emitting the events:by extending or connecting it with the (EventEmitter) class of (events) module.
 * // example:if we are importing the (event) only using (CommonJS) syntax:
 * const events = require("events");
 * class UserEvents extends events.EventEmitter  {
 * // class body
 * }
 *
 * => 2: Importing the (events) module or (EventEmitter) class using ES6 syntax:
 */
import { EventEmitter } from "events";

/*
 * -> V.IMP:For creating custom-events:we have to create our own-class that extends or connects with  the 'EventEmitter' class.
 * -> through which we can (emit) thing of (class) as a (event) and (listen) to it as well.by the (methods) of the (EventEmitter) class.
 * This allows us to create custom-events and handle them in an event-driven manner.
 * -> IMP:for connecting or inheriting the two classes:we have to use the (extends) keyword.
 */
// we also have to export the class in (ES6) syntax-way:if we are Importing the things in (ES6) syntax-way as well:
export class UserEvents extends EventEmitter {
  /*
   * The 'createPost' method allows a user to create a post.
   * -> When a post is created, the 'postCreated' event is emitted.
   * -> This allows other parts of the application to listen for and react to this event.
   */
  createPost(content) {
    console.log("User Created Post:", content);

    /*
     * IMPORTANT NOTE: After receiving a (POST) request or (data) from the user,
     * we pass the received (post) to the (UserEvents) class, which extends or connect with the (EventEmitter) class:
     * 
     * =>V.IMP-NOTE: we are able to do that by creating the (object) of the (UserEvents) class.
     * and through that (object) we can access the properties (function,methods and etc) of the class:and with in those properties we are basically emitting the events:
     * 
     * 
     * Using this mechanism:
     * - We can (emit) the (post) as an (event) to other parts of the application.
     * - We can (listen) for the (event) and execute asynchronous (actions) on the (post).
     * This approach follows event-driven architecture principles, enhancing modularity and efficiency.
     */

    /*
     * => (emit) method is used to trigger an event.
     * -> It takes two arguments:
     * -> The first argument is the (event-name) ('postCreated').
     * -> The second argument is the post (content).
     */
    // IMP-NOTE:[this] refers to the current-instance or object of the class.
    // (This-keyword): this gives us access to the object made from the class.So we can emit that object as an event.
    // IMP: In simple-words:whatever the thing which is created from the class:can be accessed through the (this) keyword or this basically refers to the object made from the class.and we can use that thing to emit events through the help of this keyword.
    this.emit("postCreated", content);
  }
}

/*
 * ✅ Summary:
 * -> We created a class 'UserEvents' that extends 'EventEmitter' to handle user posts as events.
 * -> The 'createPost' method emits a 'postCreated' event whenever a user creates a post.
 * -> Other parts of the application can listen for this event and perform actions asynchronously.
 * -> This approach follows event-driven architecture principles, making the application more modular and efficient.
 */
