// Arrarys of foods
var sidesArray = ["Miso Glazed Carrots", "Coleslaw", "Garden Salad", "Crispy Potatoes", "Sweet Potato Tots", "Coconut Rice", "Caeser Salad", "Shrimp Summer Rolls", "Garlic Butter Mushrooms", "Hush Puppies"]
var mainsArray = ["Spaghetti and Meatballs", "Pineapple Chicken", "Shakshuka", "Thai Yellow Curry", "Bibimbap", "Chicken Parmesean", "Butternut Squash Soup", "BBQ Chicken Burgers", "Ramen", "Empanadas", "Chicken Fried Rice", "Sheet Pan Fajitas", "Margarita Pizza"]
var dessertsArray = ["Apple Pie", "Lemon Meringue Pie", "Black Forest Cake", "Banana Bread", "Peach Cobbler", "Cheesecake", "Funfetti Cake", "Baklava", "Flan", "Macarons", "Macaroons", "Chocolate Cupcakes", "Pavlova", "Pumpkin Pie", "Key Lime Pie", "Tart Tatin", "Croissants", "Eclairs"]

// Query selectors
var potImage = document.querySelector('.pot');
var makeThis = document.querySelector('.shouldmake');

// Box 1
var letsCook = document.querySelector('.lets-cook-button');
var sideChecked = document.querySelector('#side');
var mainChecked = document.querySelector('#main');
var dessertChecked = document.querySelector('#dessert');
var entireMealChecked = document.querySelector('#entire-meal');
var radioList = document.querySelectorAll('.radios');

// Box 2
var clearButton = document.querySelector('.clear-button');
var randomData = document.querySelector('.place-holder');

// Add recipe controls
var addRecipeButton = document.querySelector('.add-a-recipe');
var addNewButton = document.querySelector('.add-new-button');
var userNameInput = document.querySelector('.add-new-name');
var userTypeInput = document.querySelector('.type');
var sideOption = document.querySelector('.item-1');
var mainOption = document.querySelector('.item-2');
var dessertOption = document.querySelector('.item-3');
var blankOption = document.querySelector('.blank');

// Event Listeners
letsCook.addEventListener('click', checkId);
clearButton.addEventListener('click', clearTheSelection);
addRecipeButton.addEventListener('click', displayAddRecipeInputs);
addNewButton.addEventListener('click', addNewRecipeToArrays);

// Some global variables
var randomSide = sidesArray[getRandomIndex(sidesArray)];
var randomMain = mainsArray[getRandomIndex(mainsArray)];
var randomDessert = dessertsArray[getRandomIndex(dessertsArray)];

// Functions
function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
};

function toggleHidden() {
  var arrayDisplays = [potImage, makeThis, letsCook]
  for (var i = 0; i < arrayDisplays.length; i++)
    arrayDisplays[i].classList.toggle('hidden');
};

function pleaseSelectOption() {
  alert("Oops! Please choose an option!");
  toggleHidden();
};

function checkId() {
  toggleHidden();

  (sideChecked.checked === true) ? randomData.innerText = randomSide
  : (mainChecked.checked === true) ? randomData.innerText = randomMain
  : (dessertChecked.checked === true) ? randomData.innerText = randomDessert
  : (entireMealChecked.checked === true) ? randomData.innerText = `${randomMain} with a side of ${randomSide} and ${randomDessert} for dessert!`
  : pleaseSelectOption();
};

function clearTheSelection() {
  toggleHidden();

  for (var i = 0; i < radioList.length; i++) {
    if (radioList[i].checked) {
      radioList[i].checked = false;
    }
  }
};

function displayAddRecipeInputs() {
  document.querySelector('.newrecipe').classList.toggle('hidden');
};

function addNewRecipeToArrays() {

  if (sideOption.selected) {
    sidesArray.push(userNameInput.value);
  } else if (mainOption.selected) {
    mainsArray.push(userNameInput.value);
  } else if (dessertOption.selected) {
    dessertsArray.push(userNameInput.value)
  } else if (blankOption.selected) {
    alert("Oops! Make sure you select a Recipe Type!")
  }
  if (userNameInput.value === '') {
    alert("Oops! Make sure you select a Recipe Name!")
  };

  userNameInput.value = '';
  userTypeInput = (blankOption.selected = true);
};
