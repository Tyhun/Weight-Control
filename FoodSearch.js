document.getElementById("searchFood").addEventListener("submit", searchFood);

function searchFood(e) {
  e.preventDefault();
  var food = document.getElementById("foodName").value;
  var qty = document.getElementById("qty").value;
  qty = qty / 100;
  fetch(
    `https://api.edamam.com/api/food-database/parser?ingr=${food}&app_id=7ca436ab&app_key=d0cbfbe6b877e93c2f299443e5a1fbfa`
  )
    .then(res => res.json())
    .then(posts => {
      let output = `<h2>${posts.parsed["0"].food.label}</h2>
        <h3>Calorie: ${qty * posts.parsed["0"].food.nutrients.ENERC_KCAL}<h3>
        <img src= ${
          posts.parsed["0"].food.image
        }  height="100" width="100">      
        `;
      document.getElementById("food").innerHTML = output;
    });
}
