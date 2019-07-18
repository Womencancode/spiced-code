// Write a function that takes another function as a parameter. It should wait 1.5 seconds and then run the function that was passed in.
//
// waitThenRun(function() {
//    console.log('Hello!');
// }); // logs 'Hello!' 1.5 seconds later
//
// waitThenRun(function() {
//    console.log('Goodbye!');
// }); // logs 'Goodbye!' 1.5 seconds later

(function() {
    function waitThenRun(arg) {
        setTimeout(arg, 1500);
    }

    waitThenRun(function() {
        console.log("Hello!");
    }); // logs 'Hello!' 1.5 seconds later

    waitThenRun(function() {
        console.log("Goodbye!");
    }); // logs 'Goodbye!' 1.5 seconds later
})();
