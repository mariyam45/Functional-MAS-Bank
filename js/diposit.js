document.getElementById("btn-deposit").addEventListener("click", function () {
  const newDipositAmount = getInputFieldValueById("deposit-field");
  const previousDepositTotal = getTextElementValueById("deposit-total");
  const newDepositTotal = previousDepositTotal + newDipositAmount;
  setTextElementValueById("deposit-total", newDepositTotal);
  const previoustBalanceTotal = getTextElementValueById("balance-total");
  const newBalanaceTotal = previoustBalanceTotal + newDipositAmount;
  setTextElementValueById("balance-total", newBalanaceTotal);
});
