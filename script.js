const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const getSum = () => {
//Add your code here
	 let prices = document.querySelectorAll(".prices");

    if (prices.length === 0) {
        prices = document.querySelectorAll(".price");
    }

    let total = 0;

    prices.forEach(cell => {
        total += Number(cell.innerText);
    });

    const table = document.querySelector("table");

    // Remove existing total row if present
    const oldTotal = document.getElementById("total-row");
    if (oldTotal) oldTotal.remove();

    const row = document.createElement("tr");
    row.id = "total-row";

    const cell = document.createElement("td");
    cell.colSpan = 2; // SINGLE CELL as required
    cell.innerText = `Total Price: ${total}`;
    cell.style.fontWeight = "bold";
    cell.style.textAlign = "center";

    row.appendChild(cell);
    table.appendChild(row);
};

getSumBtn.addEventListener("click", getSum);

