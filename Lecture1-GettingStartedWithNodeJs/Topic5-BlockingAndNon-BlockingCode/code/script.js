console.log('here we gonna be learn about Blocking and Non-Blocking Code');
// => 1 = first we learn about Blocking-Code:
for(let i  = 0; i<10000000000;i++){
    // I am doing nothing,just consuming some time:
}
console.log('Task to be performed after loop');
console.log('I have to wait for this long loop to finish');
// => 2 = second we learn about Non-Blocking code:
// we gonna be convert our blocking-code into the non-blocking code:
setTimeout(()=>{
    console.log('Task to be performed after 8 seconds')
},8000);
console.log('I do not have to wait for this long loop to finish:yay')