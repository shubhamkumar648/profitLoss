const InitialPrice = document.querySelector("#Initial-Price");
const Quantity = document.querySelector("#quantity");
const currentPrice = document.querySelector("#current-price");
const showOutputEl = document.querySelector("#show-Output");
const buttonEL = document.querySelector("#button-El");

function calculateProfitAndLoss(initial, quantity, current) {
  if (initial > current) {
    var loss = (initial - current) * quantity;
    var lossPercentage = (loss / initial) * 100;
    showOutput(`➡️ loss is ${loss} and percentage ${lossPercentage}%`);
  } else if (current > initial) {
    var profit = (current - initial) * quantity;
    var profitPercentage = (profit / initial) * 100;
    showOutput(`➡️ profit is ${profit} and percentage ${profitPercentage}%`);
  } else {
    showOutput("➡️ no Pain no Gain");
  }
}

function submitHandler() {
  var ip = Number(InitialPrice.value);
  var qty = Number(Quantity.value);
  var curr = Number(currentPrice.value);

  calculateProfitAndLoss(ip, qty, curr);
}

function showOutput(message) {
  showOutputEl.innerHTML = message;
}

buttonEL.addEventListener("click", submitHandler);
