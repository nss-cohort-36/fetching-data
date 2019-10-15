
console.log("1. Before fetch call console log")

function displayFood(food) {
    console.log("2. displayFood", food)
}

//making a call to database.json
fetch("http://localhost:8088/food")
    .then(foods => {
        console.log("3. foods", foods)
        //parse body of response as json
        return foods.json()
    })
    .then(function (parsedFoods) {
        //display json data in the console
        console.log("4.")
        console.table(parsedFoods)
        parsedFoods.forEach(food => {
            //call function that is defined on line 5
            displayFood(food)
        })
    });


console.log("5. After fetch call console log")