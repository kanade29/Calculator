let calculation = '';

function appendToResult(value) {
  calculation += value;
  document.getElementById('result').value = calculation;
}

function calculateResult() {
  try {
    const result = eval(calculation);
    document.getElementById('result').value = result;
    calculation = result.toString();
  } catch (error) {
    document.getElementById('result').value = 'Error';
    calculation = '';
  }
}

function clearResult() {
  calculation = '';
  document.getElementById('result').value = '';

}