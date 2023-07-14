const leapYears = function(year) {
    leapYear = false;
    if (year % 4 === 0 && year % 100 != 0) { // is the year divisble by 4 remainder 0, AND not divisible by 100? LEAP YEAR!
        leapYear = true;
        console.log('is a leap year');
        return leapYear;
    }
    else if (year % 400 === 0) { // is the year divisible by 400 with remainder 0? LEAP YEAR!
        leapYear = true;
        console.log('is a leap year');
        return leapYear;
    }
    else { // Otherwise, not a leap year!
        leapYear = false; 
        console.log('is not a leap year');
        return leapYear;
    }
};

// Do not edit below this line
module.exports = leapYears;
