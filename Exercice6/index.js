// Get the display input field
const display = document.getElementById('display');

// Function to append a value to the display
function appendToDisplay(value) {
  display.value += value;
}

// Function to clear the display
function clearDisplay() {
  display.value = '';
}

// Function to calculate the result
function calculateResult() {
  try {
    const result = eval(display.value);
    if (result === Infinity) {
      display.value = 'Division by zero is not allowed';
    } else {
      display.value = result;
    }
  } catch (error) {
    display.value = 'Error';
  }
}