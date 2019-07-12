document.getElementById("userData").addEventListener("submit", calculateBmr);

function calculateBmr(e) {
  e.preventDefault();
  var age = document.getElementById("age").value;
  var height = document.getElementById("height").value;
  var weight = document.getElementById("weight").value;
  var bmr;

  if (document.getElementById("male").checked === true) {
    bmr = 66 + 13.7 * weight + 5 * height - 6.8 * age;
  } else if (document.getElementById("female").checked === true) {
    bmr = 655 + 9.6 * weight + 1.8 * height - 4.7 * age;
  } else {
    alert("Select gender");
  }
  calculateCal(bmr);
}

function calculateCal(bmr) {
  var calorie = null;
  if (document.getElementById("1").checked === true) {
    calorie = Math.round(bmr * 1.2);
  } else if (document.getElementById("2").checked === true) {
    calorie = Math.round(bmr * 1.375);
  } else if (document.getElementById("3").checked === true) {
    calorie = Math.round(bmr * 1.55);
  } else if (document.getElementById("4").checked === true) {
    calorie = Math.round(bmr * 1.725);
  } else if (document.getElementById("5").checked === true) {
    calorie = Math.round(bmr * 1.9);
  } else {
    alert("Select activity level");
  }

  document.getElementById("calorie").innerHTML = calorie;
}
