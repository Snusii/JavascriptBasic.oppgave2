/******************************************************************************
Funksjoner og metoder oppgave

Les oppgaveteksten NØYE. Vis noen eksempler i koden din som tester
funksjonene og metodene dine. Bruk en variasjon av pilfunksjoner (arrow functions)
og funksjoner laget med nøkkelordet `function`.

Legg til kommentarer i koden din som kort forklarer hva den gjør.

******************************************************************************/

/******************************************************************************
1.

Lag følgende funksjon:

Funksjonen skal ta inn et tall som parameter og returnere
"Oddetall" hvis tallet er et oddetall og "Partall" hvis tallet er et partall.
(PS: Funksjonen skal bruke return, du skal ikke bruke console log inni
funksjonen)

******************************************************************************/


// Bitwise operator: 1 = 1 and 2 = 10 / 8 = 1000 and 9 = 1001
// if bit number ends with 0 its always a even number, if it ends with 1 its always a odd number
function oddOrEven(n) {
    if (n & 1 === 1) {
        return "Tallet er et oddetall.";
    }
    return "Tallet er et partall.";
}

/******************************************************************************
2.

Lag følgende funksjon:

Funksjonen skal ta inn en string som parameter og returnere stringen
i STORE BOKSTAVER med et utropstegn på slutten.

Eksempel: "Dette er kult" skal returnere "DETTE ER KULT!"

******************************************************************************/

// string variable
let upperCaseText = "Dette er kult"

// a function with the parameter upperCaseText
function upperCase (upperCaseText) {
    // Made a new variable t, this variable takes in the parameter and uses the method .toUpperCase()
    let t = upperCaseText.toUpperCase()
    // Return the t variable with !
    return `${t}!`
}

/******************************************************************************
3.

Lag følgende funksjon:

Funksjonen skal ta inn 2 parametere:

 - Et navn (string)
 - En time på døgnet (nummer)

Funksjonen skal returnere:
"Ugyldig tid" hvis timeverdien er mindre enn 0.
"God natt (mottatt navn)" hvis timeverdien er mellom 0 og 5.
"God morgen (mottatt navn)" hvis timeverdien er mellom 6 og 11.
"God dag (mottatt navn)" hvis timeverdien er mellom 12 og 17.
"God kveld (mottatt navn)" hvis timeverdien er mellom 18 og 23.
"Ugyldig tid" hvis timeverdien er større enn 23.

Hvis ingen timeverdi mottas, skal funksjonen returnere en feilmelding.

******************************************************************************/

//username variable
const userName = "Leander";
//Time variable
let time = 0;

//Arrow function with parameters for username and time
let timeHour = (userName, time) => {
    //if time is more then 0 and time is less then 5 - return "God Natt + username"
    if (time >= 0 && time <= 5) {
        return `God natt ${userName}!`;
    }
    else if (time >= 6 && time <= 11) {
        return `God morgen ${userName}!`;
    }
    else if (time >= 12 && time <= 17) {
        return `God dag ${userName}!`;
    }
    else if (time >= 18 && time <= 23) {
        return `God kveld ${userName}!`;
    }
    // return "ugyldig tid" for all other times under 0 and over 23
    else {
        return "Ugyldig tid";
    }
        
}

console.log(timeHour(userName, time));


/******************************************************************************
4.

Lag følgende funksjon:

Funksjonen skal ta inn en array som parameter og returnere arrayen
med første og siste indeks fjernet.

Eksempel 1: ["Rød", "Grønn", "Blå", "Gul"] skal returnere ["Grønn", "Blå"].

Eksempel 2: ["En", "To", "Tre", "Fire", "Fem", "Seks"] skal returnere
["To", "Tre", "Fire", "Fem"].

******************************************************************************/

//first example array
const arrayColor = [
    "Rød",
    "Grønn",
    "Blå",
    "Gul"
]

//second example array
const arrayNumber = [
    "En",
    "To",
    "Tre",
    "Fire",
    "Fem",
    "Seks"
]

/////////////
//Functions
////////////


//function for Arraycolor, gives arraycolor ac as a parameter
function inArrayColor(ac) {
    //remove last index in the array
    ac.pop();
    //remove first index in the array
    ac.shift();
    // returns the result after removeing those two
    return ac;
    
}

//arrow function that gives arraynumber an as a parameter
const inArrayNumber = (an) => {
    //remove last index in the array
    an.pop();
    //remove first index in the array
    an.shift();
    // returns the result after removeing those two
    return an;
}


/******************************************************************************
5.

Lag følgende funksjon:

Funksjonen skal ta inn en string som parameter.

Bruk stringmetoder på stringen for å gjøre følgende:
 - Erstatt ordet "vanskelig" med "gøy".
 - Fjern mellomrom fra starten og slutten av stringen.

Returner deretter den oppdaterte stringen.

Eksempel 1: "  Javascript er vanskelig   " skal returnere "Javascript er gøy".
Eksempel 2: " Det er vanskelig å bruke metoder " skal returnere "Det er gøy å bruke metoder".
Eksempel 3: "   vanskelig        " skal returnere "gøy".

******************************************************************************/

// variable text with a sting
let text = " Javascript er vanskelig "

//function for text variable
function changeText(text) {
    //made a new variable result, that takes in the variable text with the method replace()
    //to chance the word "Vanskelig" to "gøy"
    let result = text.replace("vanskelig", "gøy")
    //return the result variable I made with a new string
    return result
    
}




/******************************************************************************
6.

Fullfør følgende steg for å manipulere "items"-arrayet. Hvert steg skal
fullføres ved å bruke passende array-metoder.

*******************************************************************************/

const items = ["Bok", "Penn", "Notatbok", "Viskelær", "Blyant", "Markør"];

/*******************************************************************************
Steg 1: Fjern det første elementet ("Bok") fra arrayen ved hjelp av riktig metode.

Steg 2: Finn og erstatt "Viskelær" med "Linjal" i arrayen.

Steg 3: Bruk splice-metoden til å fjerne både "Penn" og "Notatbok", og legg til "Markeringspenn" i deres plass.

Steg 4: Kombiner alle elementene i arrayen til en enkelt string ved å bruke " | " som separator.

Ekstra utfordring: Lag et nytt array som kun inkluderer elementer som inneholder bokstaven "e".

******************************************************************************/

//removes the first index in the array
items.shift();
//splice method go to index 2 in the array, and remove 1 index from the array and replace it with "Linjal"
items.splice(2,1, "Linjal");
//splice method go to index 0 in the array and removes 2 words and change those words with one new "Markeringspenn"
items.splice(0,2, "Markeringspenn");
//this method makes all indexes in the array come up as a string with | between the words.
items.join(" | ");

//Made a arrowfunction that creates a new array
//use the filter() method to filter through items array and create a new parameter thats value for the eArray 
const eArray = items.filter((eArray) => {
    //return this new array with match method to only get the index with "e" inside
    return eArray.match("e")
})

/******************************************************************************
7.

EKSTRA UTFORDRING #1:

Dette er ikke obligatorisk, kun for de som vil ha en ekstra utfordring.

Lag følgende funksjon:

Funksjonen skal ta inn 2 parametere, en array og en string.

Sjekk om arrayen inneholder stringen. Hvis den gjør det, fjern elementet
fra arrayet og returner den oppdaterte arrayen.

Hvis arrayet ikke inneholder stringen, legg stringen til på slutten
av arrayet og returner det oppdaterte arrayet.

Eksempel 1: (["Rød", "Grønn"], "Blå") --> ["Rød", "Grønn", "Blå"]
Eksempel 2: (["Rød", "Grønn", "Blå"], "Grønn") --> ["Rød", "Blå"]
Eksempel 3: (["En", "To", "Tre"], "Fire") --> ["En", "To", "Tre", "Fire"]
Eksempel 4: (["En", "To", "Tre"], "To") --> ["En", "Tre"]

******************************************************************************/

const colorText = "Grønn"
const colorA = [
    "Rød",
    "Grønn", 
    "Blå",
]

function checkArray(t, arr) {
    t = colorText.includes("Grønn")
    arr = colorA.slice(1,0)
    return arr;
}

/******************************************************************************
8.

EKSTRA UTFORDRING #2:

Dette er ikke obligatorisk, kun for de som vil ha en ekstra utfordring.

Lag følgende funksjon:

Funksjonen skal ta inn ett parameter.

Hvis parameteret er en string:
Returner stringen med "😎" lagt til i starten og slutten.

Hvis parameteret er et tall:
Doble verdien, konverter den til en string, og returner den med "😎" lagt til i
starten og slutten.

Hvis parameteret er en boolean:
Returner "😎Ja😎" hvis parameteret er true, eller "😎Slapp av😎" hvis parameteret er false.

Hvis parameteret er en annen datatype:
Returner "😎Kun primitive verdier😎".

******************************************************************************/

let checkP = 6
function checkParameter (checkP) {

    if (checkP === "Returner stringen med") {
        return `😎${checkP}😎`
    }
    else if (checkP === 5) {
        checkP += 5
        checkP.toString()
        return `😎${checkP}😎`
    }
    else if (checkP === true /* || checkP !== true*/) {
        return "😎Ja😎" /* : "😎Slapp av😎"*/ 
    }
    else if (checkP === false) {
        return "😎Slapp av😎"
    }
    else {
        return "😎Kun primitive verdier😎"
    }

}

console.log(checkParameter(checkP))