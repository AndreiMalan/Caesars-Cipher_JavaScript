const alphabet = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
    "a", "b", "c", "d", "e", "f", "g", "h", "i", "j",
    "k", "l", "m", "n", "o", "p", "q", "r", "s", "t",
    "u", "v", "w", "x", "y", "z"
];

function cipher(str, key) {
    //create accumulator
    let accumulator = "";
    //ensure the key is within the range
    key = key % 26;
    //loop through the string
    for (let i = 0; i < str.length; i++) {
        const character = str[i];
        const isLetter = alphabet.includes(character);
        //if char is not a letter, add to accumulator
        if (isLetter === false) {
            accumulator += character;
        }
        else {
            const characterIndex = alphabet.findIndex((c) => c === character) //A=>0, B=>1
            let rotatedIndex;

            // Rotate based on the key, add to accumulator
            if (characterIndex !== -1) {//the character is a letter
                rotatedIndex = (characterIndex + key + 52) % 52;//the index of the rotated character in alphabet, 26 for uppercase, 26 for lowercase
                //adds the rotated character (or the original character if it's not a letter) to the accumulator.
                accumulator += character === character.toUpperCase() ? alphabet[rotatedIndex] : alphabet[rotatedIndex].toLowerCase();
            } else {//the character is not a letter
                accumulator += character;
            }
        }

    }
    //return the result
    return accumulator;
}

const userInput = prompt("Enter the text you want to cipher:");
const userKey = parseInt(prompt("Enter the key (an integer between 1 and 25):"));

if (isNaN(userKey) || userKey < 1 || userKey > 25) {
    alert("Invalid key. Please enter an integer between 1 and 25.");
} else {
    const output = cipher(userInput, userKey);
    console.log("Ciphered text: " + output);
}
