document.getElementById("consumedFood").addEventListener("submit", addFood);
var list = [];
class Food {
  constructor(description, calorie) {
    this.description = description;
    this.calorie = calorie;
  }
}
function addFood(e) {
  e.preventDefault();
  var description = document.getElementById("description").value;
  var calorie = document.getElementById("cal").value;
  var food = new Food(description, calorie);
  list.push(food);
  showOutput();
  sumCalorie(list);
}
function removeFood(index) {
  delete list[index];
  showOutput();
  sumCalorie(list);
}

function showOutput() {
  var output = "<ul>";
  list.forEach(function(element) {
    output += `<li>
      Description: ${element.description}
      Calorie: ${element.calorie}
      <button onclick="removeFood(${list.indexOf(element)})">remove</button>
      </li>`;
  });
  output += "</ul>";
  document.getElementById("list").innerHTML = output;
}

function sumCalorie(list) {
  var sum = null;
  list.forEach(function(element) {
    sum = sum + parseInt(element.calorie);
  });
  progressBar.update(sum);
  document.getElementById("totalCal").innerHTML = sum;
}
