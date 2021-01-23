// INSTRUCTIONS:
// Replace unknown type with the correct type
var numberOfDishes = 50;
var favoriteSnack = "cake";
var ingredients = [
    "butter",
    "flour",
    "baking powder",
    "sugar",
    "eggs",
    "vanilla",
    "salt",
];
// The object is missing a value. Fill in the missing value with drinks of your choice.
var menu = {
    courses: 5,
    veganOption: true,
    drinkChoices: ['Bourbon', 'Gin']
};
var strawberry = {
    name: "Strawberry",
    color: "red",
    sweetness: 80
};
// Correctly annotate this function parameter
function eatFruit(fruit) {
    if (fruit.name === "Strawberry") {
        console.log("I love Strawberry!");
    }
    console.log("Fruit is very tasty.");
}
eatFruit(strawberry);
// Correctly annotate the fruitList and transformFunction parameters
function mapFruit(fruitList, transformFunction) {
    return fruitList.map(transformFunction);
}
var fruitList = ["Apple", "Banana", "Orange"];
// Annotate the fruitName function parameter
function bakeFruit(fruitName) {
    return "Baked " + fruitName;
}
var bakedFruit = mapFruit(fruitList, bakeFruit);
console.log(bakedFruit);
function greetMe(name, callback) {
    callback("Hello there" + name);
}
greetMe("John", function (msg) { console.log(msg); });
