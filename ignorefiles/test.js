var obj = {
    a: 1,
    b: 2,
    c: 3
};

for (var p in obj) {
    console.log("The value of obj." + p + " is " + obj[p]);
}
