// Write a function named logType that expects a single argument and logs a different string depending on the type/value of the argument that is passed to it. The string it logs should be one of the following:
//     "undefined!"
//     "null!"
//     "number!"
//     "not a number!"
//     "string!"
//     "boolean!"
//     "function!"
//     "object!"
//     "array!"
//     "I have no idea!"

function logType(arg) {
    if (arg === undefined) {
        console.log("undefined!");
    } else if (arg === null) {
        console.log("null!");
    } else if (typeof arg === "string") {
        console.log("string!");
    } else if (typeof arg === "boolean") {
        console.log("boolean!");
    } else if (typeof arg === "function") {
        console.log("function!");
    } else if (Array.isArray(arg)) {
        console.log("array!");
    } else if (typeof arg === "object") {
        console.log("object!");
    } else if (isNaN(arg)) {
        console.log("not a number!");
    } else if (typeof arg === "number") {
        console.log("number!");
    } else {
        console.log("I have no Idea!");
    }
}
