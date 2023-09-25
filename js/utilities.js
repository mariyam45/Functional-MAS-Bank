function getInputFieldValueById(inputFieldId) {
  const inputField = document.getElementById(inputFieldId);
  const inputFieldValueStn = inputField.value;
  const inputFieldValue = parseFloat(inputFieldValueStn);

  inputField.value = "";
  if (isNaN(inputFieldValue)) {
    alert("Please provide a valid number");
    return;
  }
  return inputFieldValue;
}
function getTextElementValueById(elementId) {
  const element = document.getElementById(elementId);
  const elementValueStn = element.innerText;
  const elementValue = parseFloat(elementValueStn);
  return elementValue;
}

function setTextElementValueById(elementId, newValue) {
  const textElement = document.getElementById(elementId);
  textElement.innerText = newValue;
}
