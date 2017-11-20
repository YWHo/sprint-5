/*
Looping a triangle

Write a loop that makes seven calls to console.log to output the following triangle:

#
##
###
####
#####
######
#######
*/

console.log("\n\nLooping a triangle:\n-----")
var output = "";
for(i = 0; i < 7; i++) {
    output += "#";
    console.log(output);
}

/*

FizzBuzz

part-1
Write a program that uses console.log to print all the numbers from 1 to 100, with two exceptions. For numbers divisible by 3, print "Fizz" instead of the number, and for numbers divisible by 5 (and not 3), print "Buzz" instead.

*/
console.log("\n\nFizzBuzz (part-1):\n-----")
var numStr = "";
for( i=1; i<= 100; i++) {
    if ((i % 3) == 0) {
        numStr += "Fizz ";
    } else if ((i % 5) == 0) {
        numStr += "Buzz ";
    } else {
        numStr += i + " ";
    }
    if ((i % 10) == 0) {
        numStr += "\n";
    }
}
console.log(numStr);


/*

FizzBuzz

part-2
When you have that working, modify your program to print "FizzBuzz", for numbers that are divisible by both 3 and 5 (and still print "Fizz" or "Buzz" for numbers divisible by only one of those).

*/
console.log("\n\nFizzBuzz (part-2):\n-----")
var numStr = "";
for( i=1; i<= 100; i++) {
    var hasDivisible = false;

    if ((i % 3) == 0) {
        numStr += "Fizz";
        hasDivisible = true;
    }
    
    if ((i % 5) == 0) {
        numStr += "Buzz";
        hasDivisible = true;
    }
    
    if (!hasDivisible) {
        numStr += i;
    }

    numStr += " ";

    if ((i % 10) == 0) {
        numStr += "\n";
    }
}
console.log(numStr);


/*
Chess board

Write a program that creates a string that represents an 8×8 grid, using newline characters to separate lines. At each position of the grid there is either a space or a “#” character. The characters should form a chess board.

Passing this string to console.log should show something like this:

 # # # #
# # # #
 # # # #
# # # #
 # # # #
# # # #
 # # # #
# # # #
When you have a program that generates this pattern, define a variable size = 8 and change the program so that it works for any size, outputting a grid of the given width and height.

*/

console.log("\n\nChess board:\n-----")
var boardStr = "";
const size = 8;
var first, second;
for(i = 0; i < size; i++) {
    if ((i % 2) == 0) {
        first = " ";
        second = "#";
    } else {
        first = "#";
        second = " ";
    }

    for(j = 0; j < size; j++) {
        if ((j % 2) == 0) {
            boardStr += first;
        } else {
            boardStr += second;
        }
    }
    boardStr += "\n";
}
console.log(boardStr);

