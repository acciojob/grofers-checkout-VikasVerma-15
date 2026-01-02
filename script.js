document.getElementById("calculate").addEventListener("click", function () {
  const prices = document.querySelectorAll(".prices");
  let total = 0;

  prices.forEach(price => {
    total += Number(price.textContent);
  });

  // Show answer in #ans (MANDATORY)
  document.getElementById("ans").textContent = "Total Price = Rs " + total;

  // Also add a row to table (as problem statement says)
  const table = document.querySelector("table");

  if (!document.getElementById("total-row")) {
    const row = document.createElement("tr");
    row.id = "total-row";

    const cell = document.createElement("td");
    cell.colSpan = 2;
    cell.textContent = "Total Price = Rs " + total;

    row.appendChild(cell);
    table.appendChild(row);
  }
});


