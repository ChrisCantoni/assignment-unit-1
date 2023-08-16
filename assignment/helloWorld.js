console.log("Hello World!");

//Intro to JS lesson, not related to the assignment above
//strings
let firstName = 'Chris';
console.log(firstName);

let lastName = 'Cantoni';
console.log(lastName);

let fullName = firstName + ' ' + lastName;
console.log(fullName);

//numbers
let temperature = 80;
console.log(temperature);

//boolean variable, must be lowercase
let loggedIn = true;
console.log('loggedIn', loggedIn);

let isRaining = false;
 
// Conditionals (if-else)

if (loggedIn) {
    //if (true) will run this code
    console.log('Welcome ', fullName);
} else {
    console.log('Welcome, Guest');
}

// Compound conditionals- (&& for and) (|| for or)
//if the temp is less than 85 degrees and it is NOT (!) raining, then let's go for a walk
if (temperature < 85 && !isRaining) {
    console.log('Go for a walk!');
} else if (isRaining) {
    console.log('Bring an umbrella!');
} else {
    console.log('Better to stay inside');
}

// Adding to the existing variable - All three lines do the same thing
temperature = temperature + 1;
temperature += 1;
temperature ++; //same as above but more confusing.

// Works with +, -, *, and /
temperature -= 2;
temperature *= 2;
temperature /= 2;

console.log(temperature);

// === checks for equality
// a single = will change the value AND always return true
if (temperature === 81) {
    
}
