// helloWorld function
function helloWorld() {
    return "Hello, World!";
}


function sayHello (input) {
    if (input === true || input === false) {
        return "Hello, World!";
    } else {
        return "Hello, " + input + "!";
    }
}

function isFive (input) {
    if (input == "5") {
        return true;
    } else {
        return false;
    }
}

function isEven (num) {
    if (num % 2 === 0) {
        return true;
    } else {
        return false;
    }
}

function isVowel (input) {
    if (input === "a") {
        return true;
    } else if (input === "A") {
        return true;
    } else {
        return false;
    }
}
