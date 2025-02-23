// IMP:Here we are importing the (User) class from the (clientEvents.js) file: 
// through which we are gonna be able to represents that the (post) has been created by the (user) and emit it as an event:

import { UserEvents } from "./userEvents";

const userEvent = new UserEvents();

userEvent.createPost('hey we have new post from the user');
