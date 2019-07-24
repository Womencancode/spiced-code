var translations = {
    1: "eins",
    2: "zwei",
    3: "drei",
    4: "vier",
    5: "fünf",
    6: "sechs",
    7: "sieben",
    8: "acht",
    9: "NEIN!!!!!!!!!11111elf",
    10: "zehn"
};

function askForNumber() {
    var num = prompt("Please enter a number between 1 and 10");
    if (num >= 1 && num <= 10 && num == parseInt(num)) {
        return num;
    }
    throw new Error("Bad number");
}

function returnTranslation() {
    try {
        var num = askForNumber();
        alert("your number in German is: " + translations[num]);
    } catch (e) {
        alert(e);
        returnTranslation();
    }
}

returnTranslation();
