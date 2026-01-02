// Select all price elements
const prices = document.querySelectorAll(".price");
let total = 0;
prices.forEach(price => {
  total += Number(price.textContent);
});
const table = document.querySelector("table");
const totalRow = document.createElement("tr");

// Create single cell
const totalCell = document.createElement("td");
totalCell.colSpan = 2;
totalCell.textContent = "Total Price = Rs " + total;
totalRow.appendChild(totalCell);

table.appendChild(totalRow);
