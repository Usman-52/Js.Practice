


//* No.1
 //* Extracting Parts of the Date and Time
//* Given the current date and time, extract and print the year, month, day, hour, minute, and second separately.

// var currentDateTime = new Date();
// var currentYear = currentDateTime.getFullYear();
// var currentMonth = currentDateTime.getMonth() + 1;
// var currentDay = currentDateTime.getDay();
// var currentHour = currentDateTime.getHours();
// var currentMinutes = currentDateTime.getMinutes();
// var currentSeconds = currentDateTime.getSeconds();
// console.log(currentYear);
// console.log(currentTime);
// console.log(currentDay);
// console.log(currentHour);
// console.log(currentMinutes);
// console.log(currentSeconds);

//* whole currentDateTime in one line 0r step

// console.log(`Year: ${currentYear} - Month: ${currentMonth + 1} -Day: ${currentDay} Hour: ${currentHour} Minutes: ${currentMinutes} Seconds: ${currentSeconds}` );


//* P-No.2
//* Specifying a Date and Time
//* Create a Date object representing July 4, 2024, at 12:00 PM. Print the date and time in the format "YYYY-MM-DD HH

// var currentDate = new Date("July 4, 2024 12:00");
// console.log(`YYYY-MM-DD-HH:${currentDate.getFullYear()}-${currentDate.getMonth() + 1}-${currentDate.getDate()}-${currentDate.getHours()}PM`);



//* P-No.3
// * Changing Elements of a Date and Time
//* Given a "Date object "date new Date(2824, 6, 4, 12, 0), change the month to December, the day to 25th, and the year to 2025. Print the updated date in the format "YYYY-MM-DD".

// var date = new Date("July 4, 2824 12:00:00");
// date.setFullYear(2025);
// date.setDate(25);
// date.setMonth(11);
// console.log(`YYYY-MM-DD: ${date.getFullYear()}-${date.getMonth()}-${date.getDate()}`);

//* P-No.4
//* Extracting Parts of the Date and Time
// * Create a "Date object representing your birth-date. Extract and print the day of the week (0- 6, where 0 represents Sunday and 6 ?represents Saturday) of your birth-date.


// var myBirthDate = new Date("August 12, 2003");
// var myBirthDay =  myBirthDate.getDay();
// console.log(myBirthDay);


//* P-No.5
//* specifying a Date and Time
//*Create a Date object representing the first day of the current year at midnight (00:00:00). Print the date and time in the format "YYYY-MM-DD HH:MM

// var date = new Date("February 1, 2024; 00:00:00");
// console.log(`YYYY-MM-DD HH:MM ${date.getFullYear()}-${date.getMonth()}-${date.getDate()}-${date.getHours()}-${date.getMinutes()}`);


//* P-No.6
//* Changing Elements of a Date and Time
//*Given the current date and time, add 5 days to the current date. Print the new date in the format "YYYY-MM-DD".



// var currentDateTime = new Date();
// var newDate =currentDateTime.getDate() + 5;
// console.log(`YYYY-MM-DD: ${currentDateTime.getFullYear()}-${currentDateTime.getMonth() + 1}-${newDate}`);


//* Exercise Problem In Blank No.18
// var d = new Date("Jun 1, 2003 :00:00");
//  alert(d.getHours() + " " + d.getMinutes() + " " + d.getSeconds());


//* Exercise Problem No.19
//*Create a Date object for the end of the month in which you're doing this exercise.
//*In a single statement display an alert that gives the number of days for that date since the reference date of January 1    1970. Round it down to an integer.
// var hi = new Date("August 31, 2024").getTime();
// console.log(Math.floor(hi / (1000 * 60 * 60 * 24)))

