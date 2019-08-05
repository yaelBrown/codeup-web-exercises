"use strict";

console.log("Hello from external Javascript");

/*
You have rented some movies for your kids: The little mermaid (for 3 days), Brother Bear (for 5 days, they love it), and Hercules (1 day, you don't know yet if they're going to like it). If price for a movie per day is $3, how much will you have to pay?
*/

var littleMermaidDaysRented = 3;
var brotherBearDaysRented = 5;
var herculesDaysRented = 1;
const moviePerDayPriceDollars = 3;

console.log("\nYou will have to pay $" + ((littleMermaidDaysRented * moviePerDayPriceDollars) + (brotherBearDaysRented * moviePerDayPriceDollars) + (herculesDaysRented * moviePerDayPriceDollars)) + " dollars.");

/*
Suppose you're working as a contractor for 3 companies: Google, Amazon and Facebook, they pay you a different rate per hour. Google pays $400, Amazon $380, and Facebook $350. How much will you receive in payment for this week? You worked 10 hours for Facebook, 6 hours for Google and 4 hours for Amazon.
*/

var googRateDollars = 400;
var amazRateDollars = 380;
var faceRateDollars = 350;

var googHrs = 6;
var amazHrs = 4;
var faceHrs = 10;

console.log("\nI expect to get paid $" + ( googRateDollars * googHrs ) + ( amazRateDollars * amazHrs ) + ( faceRateDollars * faceHrs) + ".");

/*
A student can be enrolled in a class only if the class is not full and the class schedule does not conflict with her current schedule.
*/

var isClassFull = false;
var isScheduleConflicting = false; 

var canEnroll = !isClassFull && !isScheduleConflicting;

if (canEnroll) {
  console.log("\nYes, student can enroll.");
} else {
  console.log("Student cannot enroll.");
}

/*
A product offer can be applied only if a person buys more than 2 items, and the offer has not expired. Premium members do not need to buy a specific amount of products.
*/

var itemsBrought = 2;
var isOfferExpired = false;
var premiumMember = false;

if ((!premiumMember) && (itemsBrought >= 2) && (!isOfferExpired)) {
  console.log("\nCan apply product offer.");
} else if ((premiumMember) && (!isOfferExpired)) {
  console.log("\nCan apply product offer."); 
} else {
  console.log("\nCannot apply product offer.");
}