// list of all the tarot cards (by their image file names)
const fullDeck = {
    1: "c01.jpg",
    2: "c02.jpg",
    3: "c03.jpg",
    4: "c04.jpg",
    5: "c05.jpg",
    6: "c06.jpg",
    7: "c07.jpg",
    8: "c08.jpg",
    9: "c09.jpg",
    10: "c10.jpg",
    11: "c11.jpg",
    12: "c12.jpg",
    13: "c13.jpg",
    14: "c14.jpg",
    15: "c15.jpg",
    16: "c16.jpg",
    17: "c17.jpg",
    18: "c18.jpg",
    19: "c19.jpg",
    20: "c20.jpg",
    21: "c21.jpg",
    22: "c22.jpg",
    23: "c23.jpg",
    24: "c24.jpg",
    25: "c25.jpg",
    26: "c26.jpg",
    27: "c27.jpg",
    28: "c28.jpg",
    29: "c29.jpg",
    30: "c30.jpg",
    31: "c31.jpg",
    32: "c32.jpg",
    33: "c33.jpg",
    34: "c34.jpg",
    35: "c35.jpg",
    36: "c36.jpg",
    37: "c37.jpg",
    38: "c38.jpg",
    39: "c39.jpg",
    40: "c40.jpg",
    41: "c41.jpg",
    42: "c42.jpg",
    43: "c43.jpg",
    44: "c44.jpg",
    45: "c45.jpg",
    46: "c46.jpg",
    47: "c47.jpg",
    48: "c48.jpg",
    49: "c49.jpg",
    50: "c50.jpg",
    51: "c51.jpg",
    52: "c52.jpg",
    53: "c53.jpg",
    54: "c54.jpg",
    55: "c55.jpg",
    56: "c56.jpg",
    57: "c57.jpg",
    58: "c58.jpg",
    59: "c59.jpg",
    60: "c60.jpg",
    61: "c61.jpg",
    62: "c62.jpg",
    63: "c63.jpg",
    64: "c64.jpg",
    65: "c65.jpg",
    66: "c66.jpg",
    67: "c67.jpg",
    68: "c68.jpg",
    69: "c69.jpg",
    70: "c70.jpg",
    71: "c71.jpg",
    72: "c72.jpg",
    73: "c73.jpg",
    74: "c74.jpg",
    75: "c75.jpg",
    76: "c76.jpg",
    77: "c77.jpg",
    78: "c78.jpg",
}
// focus options
const focus = {
    focus1: ['Past', 'Present', 'Future'],
    focus2: ['You', 'Your Path', 'Your Potential'],
    focus3: ['You', 'Relationship', 'Your Partner'],
    focus4: ['Situation', 'Action', 'Outcome'],
    focus5: ['Idea', 'Process', 'Aspiration'],
}
const threeCards = {
    left: 'back.jpg',
    center: 'back.jpg',
    right: 'back.jpg',
}
console.log(threeCards);
// needs to be done on loading the page and when the user clicks reset
function draw3Cards() {
    // list all the cards
    let deck = Object.values(fullDeck);
    // draw a card and remove that card from the deck
    let card1 = deck[Math.floor(Math.random() * deck.length)];
    deck = deck.filter(function(card) {return card != card1;});
    let card2 = deck[Math.floor(Math.random() * deck.length)];
    deck = deck.filter(function(card) {return card != card2;});
    let card3 = deck[Math.floor(Math.random() * deck.length)];
    deck = deck.filter(function(card) {return card != card3;});
    // define the three cards
    threeCards['left'] = card1;
    threeCards['center'] = card2;
    threeCards['right'] = card3;
    return threeCards;
}
// call the function once to do the initial draw of 3 cards
draw3Cards();
console.log(threeCards);
// function that is called when a card is clicked
function clickCard(position) {
    document.getElementById(position).src = 'images/' + threeCards[position];
}
// function that is called when the user clicks reset
function reset() {
    // get the choice of focus
    let option = document.getElementById("focusList").value; 
    // re-label the cards with the choise of focus
    document.getElementById('focus1').innerHTML = focus[option][0];
    document.getElementById('focus2').innerHTML = focus[option][1];
    document.getElementById('focus3').innerHTML = focus[option][2];
    // re-hide the cards
    document.getElementById('left').src = 'images/back.jpg';
    document.getElementById('center').src = 'images/back.jpg';
    document.getElementById('right').src = 'images/back.jpg';
    // re-draw cards
    draw3Cards();
}
