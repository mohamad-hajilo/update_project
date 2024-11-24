"use strict";

// دریافت سال از کاربر
const yearRecive = prompt("please enter year :");
const year = parseInt(yearRecive);
if (!isNaN(year)) {
  generateCalendar(year);
} else {
  console.log("Please enter a valid year.");
}

// فرمول پیدا کردن سال کبیسه
function FindingLeapYear(year) {
  return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
}

// پیدا کردن اولین روز سال
function FindingFirstDayInYear(year) {
  let totalDays = 0;
  for (let i = 1; i < year; i++) {
    totalDays += FindingLeapYear(i) ? 366 : 365;
  }
  return (totalDays + 1) % 7;
}

function generateCalendar(year) {
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  // تعداد روزهای ماه‌ها
  const daysInMonth = [
    31,
    FindingLeapYear(year) ? 29 : 28,
    31,
    30,
    31,
    30,
    31,
    31,
    30,
    31,
    30,
    31,
  ];

  let startDay = FindingFirstDayInYear(year);

  // چاپ نام ماه‌ها
  for (let month = 0; month < 12; month++) {
    console.log(`\n ${monthNames[month]} `);
    console.log("Su Mo Tu We Th Fr Sa");

    let dayString = "   ".repeat(startDay);

    // پر کردن روزهای ماه
    for (let day = 1; day <= daysInMonth[month]; day++) {
      dayString += (day < 10 ? " " : "") + day + " ";
      startDay++;
      if (startDay === 7) {
        console.log(dayString);
        dayString = "";
        startDay = 0;
      }
    }

    // چاپ باقی مانده روزها
    if (dayString) {
      console.log(dayString);
    }
  }
}
