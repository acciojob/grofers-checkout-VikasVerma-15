const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const getSum = () => {
//Add your code here
	 const prices = document.querySelectorAll(".price");

let total = 0;

prices.forEach(cell => {
    total += Number(cell.innerText);
});

const table = document.querySelector("table");

const row = document.createElement("tr");

const cell = document.createElement("td");
cell.colSpan = 2; // single cell as required
cell.innerText = `Total Price: ${total}`;

row.appendChild(cell);
table.appendChild(row);
};

getSumBtn.addEventListener("click", getSum);

