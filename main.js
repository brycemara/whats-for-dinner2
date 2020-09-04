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

// Add recipe
var addRecipeButton = document.querySelector('.add-a-recipe');
var addNewButton = document.querySelector('.add-new-button');
var userNameInput = document.querySelector('.add-new-name');
var userTypeInput = document.querySelector('.type');
var sideOption = document.querySelector('.item-1')
var mainOption = document.querySelector('.item-2')
var dessertOption = document.querySelector('.item-3')
var entireMealOption = document.querySelector('.item-4')
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

function displayAddRecipeInputs() {
  document.querySelector('.newrecipe').classList.toggle('hidden');
}

function addNewRecipeToArrays() {
  if (sideOption.selected) {
    sidesArray.push(userNameInput.value);
    alert('Your New Side has been added!')
  } else if (mainOption.selected) {
    mainsArray.push(userNameInput.value);
    alert('Your New Main Dish has been added!')
  } else if (dessertOption.selected) {
    dessertsArray.push(userNameInput.value)
    alert('Your New Dessert has been added!')
  } else if (blankOption.selected) {
    alert("Oops! Make sure you select a Recipe Type!")

  }
  userNameInput.value = '';
  userTypeInput = (blankOption.selected = true);
};
