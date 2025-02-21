console.log("Learning About Creating-Custom-Events Or Event-Driven-Architecture");

// IMP-NOTE:Understand it through an example:
// -> we are getting the (post) from the (user):and we wanna handle through the (events) or (event-driven-architecture):
// -> so,we can create the (custom-events) for that:and through that (custom-events) we can handle the (post) from the (user):
// -> through that (custom-event) we can do the (multiple-operations) on that (post) by simply creating the multiple (event-listeners) for that:
// V.IMP:It help us to handle the (post) from the (user) in a (modular-way) or in a (asynchronous-way):that what event-driven-architecture is all about or help us do:To handle things in a modular-way or in a asynchronous-way:


// => Implementing the (custom-event) or Event-Driven-Architecture:

// IMP-NOTE-1:Acc to example we are getting the post the (user):but here we did not have any interaction-point with the user:
// so for representing the (user):we can create the (user) Class:and through that we can pass the (post) as it is from the (user):
// IMP:we gonna do that by using (User-class):we can create the (user-object):and with in that (user-object) we can pass the (post):
class User{
    // IMP:for creating the (post) with in the (user): we have to create the (createPost) property with the help of function or method:
    // which is gonna help us to create the (post) with in the (user):
    createPost(content){
        console.log("User Created Post:",content);
    }
}
