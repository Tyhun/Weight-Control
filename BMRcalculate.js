document.getElementById("userData").addEventListener("submit", calculateBmr);
var calorie = null;
var progressBar;

function calculateBmr(event) {
  event.preventDefault();
  var age = document.getElementById("age").value;
  var height = document.getElementById("height").value;
  var weight = document.getElementById("weight").value;
  var bmr;

  if (document.getElementById("male").checked === true) {
    bmr = 66 + 13.7 * weight + 5 * height - 6.8 * age;
  } else if (document.getElementById("female").checked === true) {
    bmr = 655 + 9.6 * weight + 1.8 * height - 4.7 * age;
  }
  calculateCal(bmr);
}

function calculateCal(bmr) {
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
  }
  document.querySelector("#progressBar").style.visibility = "visible";
  document.getElementById("calorie").innerHTML = calorie;

  progressBar = new ProgressBar(
    document.querySelector("#progressBar"),
    0,
    calorie
  );
  progressBar.update(0);
}
