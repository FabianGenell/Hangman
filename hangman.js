'use strict';
const words = [
    "able",
    "about",
    "account",
    "acid",
    "across",
    "act",
    "addition",
    "adjustment",
    "advertisement",
    "after",
    "again",
    "against",
    "agreement",
    "air",
    "all",
    "almost",
    "among",
    "amount",
    "amusement",
    "and",
    "angle",
    "angry",
    "animal",
    "answer",
    "ant",
    "any",
    "apparatus",
    "apple",
    "approval",
    "arch",
    "argument",
    "arm",
    "army",
    "art",
    "as",
    "at",
    "attack",
    "attempt",
    "attention",
    "attraction",
    "authority",
    "automatic",
    "awake",
    "baby",
    "back",
    "bad",
    "bag",
    "balance",
    "ball",
    "band",
    "base",
    "basin",
    "basket",
    "bath",
    "be",
    "beautiful",
    "because",
    "bed",
    "bee",
    "before",
    "behaviour",
    "belief",
    "bell",
    "bent",
    "berry",
    "between",
    "bird",
    "birth",
    "bit",
    "bite",
    "bitter",
    "black",
    "blade",
    "blood",
    "blow",
    "blue",
    "board",
    "boat",
    "body",
    "boiling",
    "bone",
    "book",
    "boot",
    "bottle",
    "box",
    "boy",
    "brain",
    "brake",
    "branch",
    "brass",
    "bread",
    "breath",
    "brick",
    "bridge",
    "bright",
    "broken",
    "brother",
    "brown",
    "brush",
    "bucket",
    "building",
    "bulb",
    "burn",
    "burst",
    "business",
    "but",
    "butter",
    "button",
    "by",
    "cake",
    "camera",
    "canvas",
    "card",
    "care",
    "carriage",
    "cart",
    "cat",
    "cause",
    "certain",
    "chain",
    "chalk",
    "chance",
    "change",
    "cheap",
    "cheese",
    "chemical",
    "chest",
    "chief",
    "chin",
    "church",
    "circle",
    "clean",
    "clear",
    "clock",
    "cloth",
    "cloud",
    "coal",
    "coat",
    "cold",
    "collar",
    "colour",
    "comb",
    "come",
    "comfort",
    "committee",
    "common",
    "company",
    "comparison",
    "competition",
    "complete",
    "complex",
    "condition",
    "connection",
    "conscious",
    "control",
    "cook",
    "copper",
    "copy",
    "cord",
    "cork",
    "cotton",
    "cough",
    "country",
    "cover",
    "cow",
    "crack",
    "credit",
    "crime",
    "cruel",
    "crush",
    "cry",
    "cup",
    "cup",
    "current",
    "curtain",
    "curve",
    "cushion",
    "damage",
    "danger",
    "dark",
    "daughter",
    "day",
    "dead",
    "dear",
    "death",
    "debt",
    "decision",
    "deep",
    "degree",
    "delicate",
    "dependent",
    "design",
    "desire",
    "destruction",
    "detail",
    "development",
    "different",
    "digestion",
    "direction",
    "dirty",
    "discovery",
    "discussion",
    "disease",
    "disgust",
    "distance",
    "distribution",
    "division",
    "do",
    "dog",
    "door",
    "doubt",
    "down",
    "drain",
    "drawer",
    "dress",
    "drink",
    "driving",
    "drop",
    "dry",
    "dust",
    "ear",
    "early",
    "earth",
    "east",
    "edge",
    "education",
    "effect",
    "egg",
    "elastic",
    "electric",
    "end",
    "engine",
    "enough",
    "equal",
    "error",
    "even",
    "event",
    "ever",
    "every",
    "example",
    "exchange",
    "existence",
    "expansion",
    "experience",
    "expert",
    "eye",
    "face",
    "fact",
    "fall",
    "false",
    "family",
    "far",
    "farm",
    "fat",
    "father",
    "fear",
    "feather",
    "feeble",
    "feeling",
    "female",
    "fertile",
    "fiction",
    "field",
    "fight",
    "finger",
    "fire",
    "first",
    "fish",
    "fixed",
    "flag",
    "flame",
    "flat",
    "flight",
    "floor",
    "flower",
    "fly",
    "fold",
    "food",
    "foolish",
    "foot",
    "for",
    "force",
    "fork",
    "form",
    "forward",
    "fowl",
    "frame",
    "free",
    "frequent",
    "friend",
    "from",
    "front",
    "fruit",
    "full",
    "future",
    "garden",
    "general",
    "get",
    "girl",
    "give",
    "glass",
    "glove",
    "go",
    "goat",
    "gold",
    "good",
    "government",
    "grain",
    "grass",
    "great",
    "green",
    "grey",
    "grip",
    "group",
    "growth",
    "guide",
    "gun",
    "hair",
    "hammer",
    "hand",
    "hanging",
    "happy",
    "harbour",
    "hard",
    "harmony",
    "hat",
    "hate",
    "have",
    "he",
    "head",
    "healthy",
    "hear",
    "hearing",
    "heart",
    "heat",
    "help",
    "high",
    "history",
    "hole",
    "hollow",
    "hook",
    "hope",
    "horn",
    "horse",
    "hospital",
    "hour",
    "house",
    "how",
    "humour",
    "I",
    "ice",
    "idea",
    "if",
    "ill",
    "important",
    "impulse",
    "in",
    "increase",
    "industry",
    "ink",
    "insect",
    "instrument",
    "insurance",
    "interest",
    "invention",
    "iron",
    "island",
    "jelly",
    "jewel",
    "join",
    "journey",
    "judge",
    "jump",
    "keep",
    "kettle",
    "key",
    "kick",
    "kind",
    "kiss",
    "knee",
    "knife",
    "knot",
    "knowledge",
    "land",
    "language",
    "last",
    "late",
    "laugh",
    "law",
    "lead",
    "leaf",
    "learning",
    "leather",
    "left",
    "leg",
    "let",
    "letter",
    "level",
    "library",
    "lift",
    "light",
    "like",
    "limit",
    "line",
    "linen",
    "lip",
    "liquid",
    "list",
    "little",
    "living",
    "lock",
    "long",
    "look",
    "loose",
    "loss",
    "loud",
    "love",
    "low",
    "machine",
    "make",
    "male",
    "man",
    "manager",
    "map",
    "mark",
    "market",
    "married",
    "mass",
    "match",
    "material",
    "may",
    "meal",
    "measure",
    "meat",
    "medical",
    "meeting",
    "memory",
    "metal",
    "middle",
    "military",
    "milk",
    "mind",
    "mine",
    "minute",
    "mist",
    "mixed",
    "money",
    "monkey",
    "month",
    "moon",
    "morning",
    "mother",
    "motion",
    "mountain",
    "mouth",
    "move",
    "much",
    "muscle",
    "music",
    "nail",
    "name",
    "narrow",
    "nation",
    "natural",
    "near",
    "necessary",
    "neck",
    "need",
    "needle",
    "nerve"]

let word;
let wordArray;
let guessedLetters;
let answerArray;
let lives;

function newGame() {

    word = words[Math.floor(Math.random() * words.length)];

    wordArray = [...word];

    guessedLetters = [];

    lives = 0;


    //recursive loop
    const fillUnderscore = (array, n) => {
        if (array.length !== n) {
            array.push('_');
            fillUnderscore(array, n);
        }
        return array;
    }
    answerArray = fillUnderscore([], wordArray.length);

    renderText();


}

newGame();

const guessFormEl = document.getElementById('guessForm');

guessFormEl.onsubmit = function runGame(event) {

    event.preventDefault();

    let guess = guessFormEl.elements.guess.value.trim();
    guessFormEl.elements.guess.value = '';


    if (guess.length > 1) {
        return message('You can only guess ONE letter', 'orange');
    }
    if (!guess.match(/[a-z]/i)) {
        return message('You can only guess letters', 'orange');

    }
    if (guessedLetters.includes(guess)) {
        return message('You already guessed ' + guess, 'orange');
    }



    guessedLetters.push(guess);

    if (wordArray.includes(guess)) {

        let wordArrayCopy = [...wordArray];

        function addAnswerArray() {
            if (wordArrayCopy.includes(guess)) {

                let index = wordArrayCopy.indexOf(guess);

                answerArray.splice(index, 1, guess);

                //we replace the letter with _ so it doesnt just replace the same one again (to check if multiple of same letter)
                wordArrayCopy.splice(index, 1, '_');

                addAnswerArray();
            }
        }
        addAnswerArray();

        message('Your guess was right!', 'green');

        if (answerArray.join('') === word) {

            message('You won!!!', 'green');

            playAgainMessage(true);

        }

    } else {

        message('Your guess was wrong, you lost a heart', 'red');

        drawHangman();
    }

    renderText();
}






const messageContainer = document.getElementById('messageContainer');

function message(string, color) {

    let message = document.createElement('div');
    message.classList.add('message');
    message.innerHTML = string;

    message.classList.add(color);

    messageContainer.append(message);

    setTimeout(() => {
        message.style.transform = 'translateX(0%)';
    }, 0);

    setTimeout(() => {

        message.style.opacity = '0';
        setTimeout(() => {
            message.remove();
        }, 200);

    }, 2000);


}



const hangmanSVG = document.getElementById('hangmanSVG')


function drawHangman() {

    let line = hangmanSVG.children[lives];
    line.style.visibility = 'visible';


    lives++;

    if (!hangmanSVG.children[lives]) {
        playAgainMessage(false);
    }


}

function renderText() {
    const guessStringEl = document.getElementById('guessString');
    const guessedLettersEl = document.getElementById('guessedLetters');

    guessStringEl.innerHTML = answerArray.join('');
    guessedLettersEl.innerHTML = guessedLetters.join('').toUpperCase();

}


function playAgainMessage(won) {

    const darkenElement = document.querySelector('.darken');
    const winLoseMessage = document.getElementById('winLoseMessage');
    const answerText = document.getElementById('wordAnswer');


    const playAgainButton = document.getElementById('btnYes');
    const dontPlayAgainButton = document.getElementById('btnNo');

    if (won) {
        winLoseMessage.innerHTML = 'You won!'
        answerText.innerHTML = '';

    } else {
        winLoseMessage.innerHTML = 'You lost!'
        answerText.innerHTML = `The word was ${word}`;
    }

    darkenElement.style.display = 'block';

    playAgainButton.onclick = () => {
        newGame()
        function clearHangman(n = 0) {
            let line = hangmanSVG.children[n];
            if (line) {
                line.style.visibility = 'hidden';
                n++;
                clearHangman(n);
            }
        }
        clearHangman();

        darkenElement.style.display = 'none';

    }

    dontPlayAgainButton.onclick = () => {
        window.open('https://github.com/FabianGenell/Hangman');
    }


}
