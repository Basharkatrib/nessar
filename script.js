let display = document.getElementById('display');
let previousValue = '';

function appendToDisplay(value) {
  display.value += value;
}

function clearDisplay() {
  display.value = '';
}

function calculate() {
  try {
    display.value = eval(display.value);
  } catch (error) {
    display.value = 'Error';
  }
}

function goBack() {
  display.value = previousValue;
}

// يمكنك إضافة المزيد من الوظائف هنا حسب احتياجاتك
