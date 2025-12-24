const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const getSum = () => {
//Add your code here
	 const prices = document.querySelectorAll(".price");
    let total = 0;

    prices.forEach(price => {
        total += Number(price.innerText);
    });

    const table = document.querySelector("table");

    // Prevent adding multiple total rows
    const existingTotal = document.getElementById("total-row");
    if (existingTotal) {
        existingTotal.remove();
    }

    const totalRow = document.createElement("tr");
    totalRow.id = "total-row";

    const totalCell = document.createElement("td");
    totalCell.colSpan = 2;
    totalCell.innerText = `Total Price = Rs ${total}`;
    totalCell.style.fontWeight = "bold";
    totalCell.style.textAlign = "center";

    totalRow.appendChild(totalCell);
    table.appendChild(totalRow);
  
};

getSumBtn.addEventListener("click", getSum);

