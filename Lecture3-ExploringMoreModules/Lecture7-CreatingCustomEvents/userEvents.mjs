// Logging an introductory message about Event-Driven Architecture
console.log(
  "Learning About Creating Custom Events in Event-Driven Architecture"
);

/*
 * Understanding Event-Driven Architecture through an example:
 * -----------------------------------------------------------
 * -> We are receiving a post from a user and want to handle it using events (event-driven architecture).
 * -> To achieve this, we can create custom events that allow us to process user posts asynchronously.
 * -> With custom events, we can perform multiple operations on a post by simply adding multiple event listeners.
 * -> This modular approach ensures that each operation runs independently without blocking the main thread.
 *
 * ✅ Key Benefit: Event-driven architecture improves performance and scalability by handling events asynchronously.
 */

// Creating Custom Events in an Event-Driven Architecture
// -------------------------------------------------------

/*
 * In Node.js, we use the built-in 'events' module to create and handle custom events.
 * -> The 'events' module provides an 'EventEmitter' class that allows us to create custom events.
 * -> The 'EventEmitter' class is the core of the 'events' module.
 * The 'EventEmitter' class provides methods like 'emit()' to trigger an event:
 * and 'on()' to listen for events.
 *
 * -> 1: Importing 'EventEmitter' using CommonJS syntax:we can directly import the EventEmitter class from the events module.
 * IMP:or we can latter access it in own created class:when we use (event) module with in our own created class.
 * const EventEmitter = require("events").EventEmitter;
 *
 * // example:if we are importing the (event) only using (CommonJS) syntax:
 * const events = require("events");
 * class UserEvents extends events.EventEmitter  {
 * // class body
 * }
 *
 * -> 2: Importing 'EventEmitter' using ES6 syntax:
 */
import { EventEmitter } from "events";

/*
 * Defining a 'UserEvents' class that extends 'EventEmitter'
 * This allows us to create custom events and handle them in an event-driven manner.
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
     * Emitting an event named 'postCreated'
     * -> The first argument is the event name ('postCreated').
     * -> The second argument is the post content.
     */
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
