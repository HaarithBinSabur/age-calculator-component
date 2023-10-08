// Setup the input fields and the results elements
const day = document.getElementById('date__day');
const month = document.getElementById('date__month');
const year = document.getElementById('date__year');
const ageYears = document.getElementById('results__years');
const ageMonths = document.getElementById('results__months');
const ageDays = document.getElementById('results__days');

// Setup the function ageCalculator and update the results.
function ageCalculator() {
  // Parse input values as integers
  const dayValue = parseInt(day.value);
  const monthValue = parseInt(month.value);
  const yearValue = parseInt(year.value);

  // Input validation
  if (isNaN(dayValue) || isNaN(monthValue) || isNaN(yearValue)) {
    alert('Please enter valid values for day, month, and year.');
    return;
  }

  // Create Date objects for birthdate and current date
  const birthDate = new Date(yearValue, monthValue - 1, dayValue);
  const currentDate = new Date();

  // Calculate age
  const ageInMilliseconds = currentDate - birthDate;
  const ageInSeconds = ageInMilliseconds / 1000;
  const ageInMinutes = ageInSeconds / 60;
  const ageInHours = ageInMinutes / 60;
  const ageInDays = ageInHours / 24;
  const ageInMonths = ageInDays / 30.44; // Average days in a month
  const ageInYears = ageInMonths / 12;

  // Calculate the exact age components
  const years = Math.floor(ageInYears);
  const remainingMonths = Math.floor((ageInYears - years) * 12);
  const remainingDays = Math.floor(ageInDays - (years * 365 + remainingMonths * 30.44));

  // Update the age elements
  ageYears.textContent = years;
  ageMonths.textContent = remainingMonths;
  ageDays.textContent = remainingDays;
}

// Connecting the function to the submit button
document.getElementById("submit__btn").addEventListener('click', function (e) {
  e.preventDefault();
  ageCalculator();
});
