// Get the required elemnts from index.html
// BOD
const birthDate = document.getElementById("birth-date");
const birthMonth = document.getElementById("birth-month");
const birthYear = document.getElementById("birth-year");

// DD-MM-YYYY
const outputYear = document.getElementById("output-year");
const outputMonth = document.getElementById("output-month");
const outputDay = document.getElementById("output-day");

// Labels
const labelDay = document.getElementById("label-day");
const labelMonth = document.getElementById("label-month");
const labelYear = document.getElementById("label-year");

const arrowBtn = document.getElementById("arrow-btn"); // Button

// Error fields
const dayError = document.getElementById("day-error");
const monthError = document.getElementById("month-error");
const yearError = document.getElementById("year-error");

// Current DD-MM-YYYY value
let today = new Date();
const currentDate = today.getDate();
const currentMonth = today.getMonth() + 1;
const currentYear = today.getFullYear();

arrowBtn.addEventListener("click", () => {
  // Get the input value inside the event listener as integers
  const birthDateVal = Number(birthDate.value);
  const birthMonthVal = Number(birthMonth.value);
  const birthYearVal = Number(birthYear.value);

  // Handle Birth Date
  if (birthDateVal == 0) {
    labelDay.classList.remove("text-smokey-grey");
    labelDay.classList.add("text-light-red");
    birthDate.classList.remove(
      "hover:border-purple",
      "caret-purple",
      "border-light-grey"
    );
    birthDate.classList.add("border-light-red", "caret-light-red");
    dayError.textContent = "This field is required";
  } else if (
    (birthMonthVal == 2 ||
      birthMonthVal == 4 ||
      birthMonthVal == 6 ||
      birthMonthVal == 9 ||
      birthMonthVal == 11) &&
    birthDateVal == 31
  ) {
    labelDay.classList.remove("text-smokey-grey");
    labelDay.classList.add("text-light-red");
    birthDate.classList.remove(
      "hover:border-purple",
      "caret-purple",
      "border-light-grey"
    );
    birthDate.classList.add("border-light-red", "caret-light-red");
    dayError.textContent = "Must be a valid date";
  } else {
    if (birthDateVal > 31 || birthDateVal < 1) {
      labelDay.classList.remove("text-smokey-grey");
      labelDay.classList.add("text-light-red");
      birthDate.classList.remove(
        "hover:border-purple",
        "caret-purple",
        "border-light-grey"
      );
      birthDate.classList.add("border-light-red", "caret-light-red");
      dayError.textContent = "Must be a valid day";
    } else {
      labelDay.classList.add("text-smokey-grey");
      labelDay.classList.remove("text-light-red");
      birthDate.classList.add(
        "hover:border-purple",
        "caret-purple",
        "border-light-grey"
      );
      birthDate.classList.remove("border-light-red", "caret-light-red");
      dayError.textContent = "";
    }
  }

  // Handle Birth Month
  if (birthMonthVal == 0) {
    labelMonth.classList.remove("text-smokey-grey");
    labelMonth.classList.add("text-light-red");
    birthMonth.classList.remove(
      "hover:border-purple",
      "caret-purple",
      "border-light-grey"
    );
    birthMonth.classList.add("border-light-red", "caret-light-red");
    monthError.textContent = "This field is required";
  } else if (birthMonthVal > 12) {
    labelMonth.classList.remove("text-smokey-grey");
    labelMonth.classList.add("text-light-red");
    birthMonth.classList.remove(
      "hover:border-purple",
      "caret-purple",
      "border-light-grey"
    );
    birthMonth.classList.add("border-light-red", "caret-light-red");
    monthError.textContent = "Must be a valid month";
  } else {
    labelMonth.classList.add("text-smokey-grey");
    labelMonth.classList.remove("text-light-red");
    birthMonth.classList.add(
      "hover:border-purple",
      "caret-purple",
      "border-light-grey"
    );
    birthMonth.classList.remove("border-light-red", "caret-light-red");
    monthError.textContent = "";
  }

  // Handle Birth Year
  if (birthYearVal > currentYear) {
    labelYear.classList.remove("text-smokey-grey");
    labelYear.classList.add("text-light-red");
    birthYear.classList.remove(
      "hover:border-purple",
      "caret-purple",
      "border-light-grey"
    );
    birthYear.classList.add("border-light-red", "caret-light-red");
    yearError.textContent = "Must be in past";
  } else if (birthYearVal == 0) {
    labelYear.classList.remove("text-smokey-grey");
    labelYear.classList.add("text-light-red");
    birthYear.classList.remove(
      "hover:border-purple",
      "caret-purple",
      "border-light-grey"
    );
    birthYear.classList.add("border-light-red", "caret-light-red");
    yearError.textContent = "This field is required";
  } else {
    labelYear.classList.add("text-smokey-grey");
    labelYear.classList.remove("text-light-red");
    birthYear.classList.add(
      "hover:border-purple",
      "caret-purple",
      "border-light-grey"
    );
    birthYear.classList.remove("border-light-red", "caret-light-red");
    yearError.textContent = "";
  }

  // Calculate age
  if (
    birthDateVal > 0 &&
    birthDateVal <= 31 &&
    birthMonthVal > 0 &&
    birthMonthVal <= 12 &&
    birthYearVal > 0 &&
    birthYearVal <= currentYear
  ) {
    let years = currentYear - birthYearVal;
    if (
      currentMonth < birthMonthVal ||
      (birthMonthVal == currentMonth && currentDate < birthDateVal)
    )
      years -= 1;

    let months = currentMonth - birthMonthVal;
    if (months < 0) months += 12;

    let days = currentDate - birthDateVal;
    if (days < 0) {
      const previousMonthDays = new Date(
        currentYear,
        currentMonth - 1,
        0
      ).getDate();
      days += previousMonthDays;
    }

    // output
    outputYear.textContent = years;
    outputYear.classList.remove("sm:tracking-[13px]", "tracking-[7px]");
    outputYear.classList.add("sm:tracking-[3px]", "tracking-[2px]", "sm:mr-2", "mr-3");

    outputMonth.textContent = months;
    outputMonth.classList.remove("sm:tracking-[13px]", "tracking-[7px]");
    outputMonth.classList.add("sm:tracking-[3px]", "tracking-[2px]", "sm:mr-2", "mr-3");

    outputDay.textContent = days;
    outputDay.classList.remove("sm:tracking-[13px]", "tracking-[7px]");
    outputDay.classList.add("sm:tracking-[3px]", "tracking-[2px]", "sm:mr-2", "mr-3");
  }
});
