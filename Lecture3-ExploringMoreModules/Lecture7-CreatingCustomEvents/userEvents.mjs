// Logging an introductory message about Event-Driven Architecture
console.log(
  "Learning About Creating-Custom-Events Or Event-Driven-Architecture"
);

/*
 * IMP-NOTE: Understanding Event-Driven-Architecture through an example:
 * ---------------------------------------------------------------------
 * -> We are getting the (post) from the (user) and want to handle it using (events) or (event-driven architecture).
 * -> To achieve this, we create (custom events) that allow us to handle user-posts through event-driven architecture.
 * -> With (custom events), we can perform multiple-operation-asynchronously on the (post) by simply adding multiple (event listeners).
 *
 * V.IMP: This helps us manage user posts in a (modular way) and in an (asynchronous manner).
 *        Event-driven architecture allows us to handle things efficiently without blocking the main thread.
 */

// IMP-NOTE-2: After receiving a post from the user, we need to process it using event-driven architecture.

// -> To achieve this, we create (custom events), which allow us to handle the user's post as an event.
// -> For creating custom events, we use the built-in 'events' module in Node.js.

// First, import the 'events' module:
// const Events = require("events");

/*
 * V.IMP: Instead of importing the entire 'events' module and then accessing 'EventEmitter' class from it,
 *        we can directly import 'EventEmitter' from the 'events' module:
 *
 * const EventEmitter = require("events");
 *
 * However, since we are using ES6 import syntax, we cannot directly import 'EventEmitter' class from the module.
 * Instead, we import the entire module and access 'EventEmitter' from it.
 */
import * as Events from "events";

// => Implementing custom-events using event-driven architecture:

/*
 * IMP-NOTE-1: In this example, we receive a post from the user, but there is no direct interaction with the user.
 * -> To represent the user, we create a 'UserEvents' class that extends 'EventEmitter',
 *    allowing us to pass the post as a property and handle it as an event.
 *
 * IMP: Using the 'UserEvents' class, we can create user objects and assign posts to them.
 */

/*
 * IMP-NOTE-3: Once the post is created, we need to emit it as an event.
 * -> This allows us to handle it in an event-driven manner.
 * -> The 'emit' method of the 'EventEmitter' class is used to trigger the postCreated event.
 * -> To use 'emit' within our 'UserEvents' class, we must extend 'EventEmitter'.
 */

/*
 * IMP-NOTE-4: We export the 'UserEvents' class so that it can be used in other files,
 *             such as 'script.js', for server-side handling.
 */

export class UserEvents extends Events.EventEmitter {
  /*
   * IMP: The 'createPost' method allows a user to create a post.
   * -> When a post is created, an event is emitted.
   */
  createPost(content) {
    console.log("User Created Post:", content);

    /*
     * The 'emit' method of 'EventEmitter' is used to trigger an event.
     * -> The first argument is the event name ('postCreated'), and the second argument is the post content.
     * -> This enables other parts of the application to react whenever a post is created.
     */
    this.emit("postCreated", content);
  }
}
