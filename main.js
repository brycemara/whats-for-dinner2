// Arrarys of foods
var sidesArray = ["Miso Glazed Carrots", "Coleslaw", "Garden Salad", "Crispy Potatoes", "Sweet Potato Tots", "Coconut Rice", "Caeser Salad", "Shrimp Summer Rolls", "Garlic Butter Mushrooms", "Hush Puppies"]
var mainsArray = ["Spaghetti and Meatballs", "Pineapple Chicken", "Shakshuka", "Thai Yellow Curry", "Bibimbap", "Chicken Parmesean", "Butternut Squash Soup", "BBQ Chicken Burgers", "Ramen", "Empanadas", "Chicken Fried Rice", "Sheet Pan Fajitas", "Margarita Pizza"]
var dessertsArray = ["Apple Pie", "Lemon Meringue Pie", "Black Forest Cake", "Banana Bread", "Peach Cobbler", "Cheesecake", "Funfetti Cake", "Baklava", "Flan", "Macarons", "Macaroons", "Chocolate Cupcakes", "Pavlova", "Pumpkin Pie", "Key Lime Pie", "Tart Tatin", "Croissants", "Eclairs"]



// Query selectors
var potImage = document.querySelector('.pot');
var makeThis = document.querySelector('.shouldmake');
var randomData = document.querySelector('.JS')

// box 1 stuff
var letsCook = document.querySelector('.lets-cook');
var sideChecked = document.querySelector('#side');
var mainChecked = document.querySelector('#main');
var dessertChecked = document.querySelector('#dessert');

// Event Listeners
letsCook.addEventListener('click', checkId);

// Some global variables
var randomSide = sidesArray[getRandomIndex(sidesArray)];
var randomMain = mainsArray[getRandomIndex(mainsArray)];
var randomDessert = dessertsArray[getRandomIndex(dessertsArray)];

// Functions
function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
};

function checkId() {
  potImage.classList.add('hidden');
  makeThis.classList.remove('hidden');

  if (sideChecked.checked) {
    randomData.innerText = randomSide;
  } else if (mainChecked.checked) {
    randomData.innerText = randomMain;
  } else if (dessertChecked.checked) {
    randomData.innerText = randomDessert;
  };
};
