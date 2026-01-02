document.getElementById("calculate").addEventListener("click", function () {
  const prices = document.querySelectorAll(".prices");
  let total = 0;

  prices.forEach(price => {
    total += Number(price.textContent);
  });

  const table = document.querySelector("table");

  // Prevent duplicate total rows
  if (document.getElementById("total-row")) return;

  const row = document.createElement("tr");
  row.id = "total-row";

  const cell = document.createElement("td");
  cell.colSpan = 2;
  cell.textContent = "Total Price = Rs " + total;

  row.appendChild(cell);
  table.appendChild(row);
});

