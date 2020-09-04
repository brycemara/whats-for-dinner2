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
var entireMealChecked = document.querySelector('#entire-meal');
var radioList = document.querySelectorAll('.radios')

// box 2
var clearButton = document.querySelector('.clear');

// Event Listeners
letsCook.addEventListener('click', checkId);
clearButton.addEventListener('click', clearTheSelection);

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
  letsCook.classList.add('hidden');

  if (sideChecked.checked) {
    randomData.innerText = randomSide;
  } else if (mainChecked.checked) {
    randomData.innerText = randomMain;
  } else if (dessertChecked.checked) {
    randomData.innerText = randomDessert;
  } else if (entireMealChecked.checked) {
    randomData.innerText = `${randomMain} with a side of ${randomSide} and ${randomDessert} for dessert!`
  } else {
    alert("Please select an option")
    potImage.classList.remove('hidden');
    makeThis.classList.add("hidden");
    letsCook.classList.remove('hidden');
  }

};


function clearTheSelection() {
  potImage.classList.remove('hidden');
  makeThis.classList.add('hidden');
  letsCook.classList.remove('hidden');

  for (var i = 0; i < radioList.length; i++) {
    if (radioList[i].checked) {
      radioList[i].checked = false;
    }
  }
};
