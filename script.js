// 1. Hotel Reservation System

console.log("Hotel Reservation");

var name = prompt("Enter customer name");
console.log(name);

let days = Number(prompt("Enter number of days"));
console.log(days);

let room = prompt("Enter room type");
console.log(room);

let available = true;
console.log(available);

if (available == true) {
    if (days >= 1) {
        console.log("Room Reserved Successfully");
    } else {
        console.log("Invalid Days");
    }
} else {
    console.log("Room Not Available");
}

// 2. Food Delivery System

console.log("Food Delivery");

var foodName = prompt("Enter customer name");
console.log(foodName);

let food = prompt("Enter food name");
console.log(food);

let price = Number(prompt("Enter food price"));
console.log(price);

let foodAvailable = true;
console.log(foodAvailable);

if (foodAvailable == true) {
    if (price > 0) {
        console.log("Your Food Order is Confirmed");
    } else {
        console.log("Invalid Price");
    }
} else {
    console.log("Food Not Available");
}

// 3. Hospital Appointment System

console.log("Hospital Appointment");

var patientName = prompt("Enter patient name");
console.log(patientName);

let age = Number(prompt("Enter patient age"));
console.log(age);

let doctor = prompt("Enter doctor name");
console.log(doctor);

let appointment = true;
console.log(appointment);

if (appointment == true) {
    if (age >= 18) {
        console.log("Appointment Confirmed");
    } else {
        console.log("Child Appointment Required");
    }
} else {
    console.log("Appointment Not Available");
}

// 4. Airport Baggage Checker

console.log("Airport Baggage Checker");

var passenger = prompt("Enter passenger name");
console.log(passenger);

let weight = Number(prompt("Enter baggage weight"));
console.log(weight);

let limit = 20;
console.log(limit);

let ticket = true;
console.log(ticket);

if (ticket == true) {
    if (weight <= limit) {
        console.log("Baggage Accepted");
    } else {
        console.log("Extra Baggage Charges");
    }
} else {
    console.log("Ticket Not Available");
}

// 5. Movie Ticket Booking System

console.log("Movie Ticket Booking");

var customer = prompt("Enter customer name");
console.log(customer);

let movie = prompt("Enter movie name");
console.log(movie);

let tickets = Number(prompt("Enter number of tickets"));
console.log(tickets);

let seats = true;
console.log(seats);

if (seats == true) {
    if (tickets > 0) {
        console.log("Movie Tickets Booked");
    } else {
        console.log("Invalid Tickets");
    }
} else {
    console.log("Seats Not Available");
}
// Null Example
var booking = null;
console.log(booking);