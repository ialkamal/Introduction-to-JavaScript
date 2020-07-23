/************************************************************** Task 1: Warm-up! **************************************************************/
//Task a: declare a variable called votingAge, console log true if age > 18 (no function required)

var votingAge = 22;

if (votingAge > 18){
    console.log("Task 1a");
    console.log(true);
    console.log("\n");
}



//Task b: declare a variable and then use a conditional to change the value of that variable based on the value assigned to a second variable (no function required)


var var01 = 10;
var var02 = 9;

if(var02===9){
    var01 = 12;
}

console.log("Task 1b");
console.log(var01);
console.log("\n");




//Task c: Convert string ("1999") to integer (1999)  (no function required) // hint look up the Number method


console.log("Task 1c");
console.log(Number("1999"));
console.log("\n");




//Task d: Write a function to multiply a*b 

function multiply(a,b){
    return a*b;
}

var var01 = 5;
var var02 = 12;

console.log("Task 1d");
console.log(multiply(var01, var02));
console.log("\n");




/************************************************************** Task 2 **************************************************************/
//Age in Dog years
//write a function that takes your age and returns it to you in dog years - they say that 1 human year is equal to seven dog years 

function DogYears(humanAge){
    return 7 * humanAge;
}

console.log("Task 2");
console.log(DogYears(37));
console.log("\n");



/************************************************************** Task 3 **************************************************************/
//Dog feeder 
//takes weight in pounds and age in years (note if the dog is a puppy the age will be a decimal) and returns the number of pounds of raw food to feed in a day.

//feeding requirements
// adult dogs at least 1 year 
// up to 5 lbs - 5% of their body weight
// 6 - 10 lbs - 4% of their body weight 
// 11 - 15 lbs - 3% of their body weight 
// > 15lbs - 2% of their body weight 

// Puppies less than 1 year
// 2 - 4 months 10% of their body weight
// 4 - 7 months 5% of their body weight 
// 7 - 12 months 4% of their body weight

// when you are finished invoke your function with the weight of 15 lbs and the age of 1 year - if your calculations are correct your result should be 0.44999999999999996
  
function DogFeeder(weight, age){
    
    if (age >= 1){
        if(weight < 6){
            return weight * .05;
        }
        else if(weight >=6 && weight <= 10){
            return weight * .04;            
        }
        else if(weight >=11 && weight <= 15){
            return weight * .03;            
        }
        else if(weight > 15){
            return weight * .02;            
        }
    }
    else if (age > 7/12 && age < 1){
        return weight * .04;    
    }
    else if (age > 4/12 && age <= 7/12){
        return weight * .05;    
    }
    else if (age > 2/12 && age <= 4/12){
        return weight * .1;    
    }
    else{
        return "puppy is too small to eat."
    }
}

console.log("Task 3");
console.log(DogFeeder(15,1));
console.log("\n");



/************************************************************** Task 4 **************************************************************/
// Rock, Paper, Scissors
// Your function should take a string (either rock paper or scissors)
// it should return you won or you lost based on the rules of the game (you may need to look up the rules if you have not played before)
// use math.random to determine the computers choice 
// hint while you can complete this with only conditionals based on strings it may help to equate choice to a number 

 function RockPaperScissors(inputChoice){

    var myChoice;
    var choices = ["Rock" , "Paper" , "Scissors"];

    if(inputChoice==="rock"){
        myChoice = 0;
    }
    else if(inputChoice==="paper"){
        myChoice = 1;
    }
    else if (inputChoice==="scissors"){
        myChoice = 2;
    }

    var seed = Date.now();
    var computerChoice = Math.floor(3 * Math.random(seed));

    console.log("My Choice is: " + choices[myChoice])
    console.log("Computer Choice is: " + choices[computerChoice])

    if (myChoice === 0)
    {
        if(computerChoice == 0){
            return "Draw!"
        }
        else if(computerChoice == 1){
            return "You Lost!"
        }
        else if(computerChoice == 2){
            return "You Won!"
        }
    }
    else if (myChoice === 1)
    {
        if(computerChoice == 0){
            return "You Won!"
        }
        else if(computerChoice == 1){
            return "Draw!"
        }
        else if(computerChoice == 2){
            return "You Lost!"
        }
    }
    else if (myChoice === 2)
    {
        if(computerChoice == 0){
            return "You Lost!"
        }
        else if(computerChoice == 1){
            return "You Won!"
        }
        else if(computerChoice == 2){
            return "Draw!"
        }
    }
 } 
  

 console.log("Task 4");
 console.log(RockPaperScissors("rock"));
 console.log("\n");
 console.log(RockPaperScissors("paper"));
 console.log("\n");
 console.log(RockPaperScissors("scissors"));
 console.log("\n");

/************************************************************** Task 5 **************************************************************/
//Metric Converter
//a. KM to Miles - should take the number of kilometers and convert it to the equal number of miles


function KMtoMiles (kmValue){
    return kmValue * .621371;
}

console.log("Task 5a");
console.log("100 KM is equal to: " + KMtoMiles(100) + " Miles");
console.log("\n");

//b. Feet to CM - should take the number of feet and convert it to the equal number of centimeters
  
function FEETtoCM (feetValue){
    return feetValue * 30.48;
}

console.log("Task 5b");
console.log("10 feet is equal to: " + FEETtoCM(10) + " cm");
console.log("\n");

/************************************************************** Task 6 **************************************************************/
// 99 bottles of soda on the wall
// create a function called annoyingSong
// the function should take a starting number as an argument and count down - at each iteration it should log (number) bottles of soda on the wall, (number) bottles of soda, take one down pass it around (number left over) bottles of soda on the wall`
  
function annoyingSong(number){
    for(var i = number; i>0; i--){
        console.log(i + " bottles of soda, take one down pass it around " + (i-1) + " bottles of soda on the wall");
    }
}

console.log("Task 6");
annoyingSong(7);
console.log("\n");

/************************************************************** Task 7 **************************************************************/
//Grade Calculator
//write a javaScript program that takes a mark out of 100 and returns a corresponding letter grade 
//90s should be A 
//80s should be B 
//70s should be Cs 
//60s should be D 
//and anything below 60 should be F
  

  function gradeCalculator(gradeNumber){
    
    var grade = parseInt(gradeNumber);

    switch(true){
        case grade >=0 && grade < 60:
            return "F";
        case grade >=60 && grade < 70:
            return "D";
        case grade >=70 && grade < 80:
            return "C";
        case grade >=80 && grade < 90:
            return "B";
        case grade >=90 && grade <= 100:
            return "A";
        default:
            return "This is not a valid grade";
    }
  }
  
console.log("Task 7");
console.log("0 is an: " + gradeCalculator(0));
console.log("45 is an: " + gradeCalculator(45));
console.log("57 is an: " + gradeCalculator(57));
console.log("62 is a: " + gradeCalculator(62));
console.log("74 is a: " + gradeCalculator(74));
console.log("89 is a: " + gradeCalculator(89));
console.log("100 is an: " + gradeCalculator(100));
console.log("-33: " + gradeCalculator(-33));
console.log("114: " + gradeCalculator(114));
console.log("Hello: " + gradeCalculator("Hello"));
console.log("\n");

/************************************************************** Stretch **************************************************************/
//Create a function that counts the number of vowels within a string. It should handle both capitalized and uncapitalized vowels.
// Hint - you may need to study tomorrow's training kit on arrays 
// try looking up the .includes() method





/************************************************************** Stretch **************************************************************/
//Take Rock, Paper, Scissors further
//update your rock papers scissors code below to take a prompt from a user using the window object





