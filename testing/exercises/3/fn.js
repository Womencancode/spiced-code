module.exports = function fn(val) {
    if (typeof val == "string") {
        return reverso(val);
    } else if (Array.isArray(val)) {
        for (let i = 0; i < val.length; i++) {
            console.log(i);
            if (typeof val[i] == "string") {
                val[i] = reverso(val[i]);
                console.log(val[i]);
            } else {
                val[i] = null;
                console.log(val[i]);
            }
        }
        return val;
    } else {
        return null;
    }
};

function reverso(arg) {
    let newVal = "";
    for (let i = arg.length - 1; i >= 0; i--) {
        newVal = newVal + arg[i];
    }
    return newVal;
}
