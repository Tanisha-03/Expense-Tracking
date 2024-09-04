document.getElementById('expense-form').addEventListener('submit', addExpense);

let totalAmount = 0;

function addExpense(event) {
    event.preventDefault();
    
    // Get the input values
    const date = document.getElementById('date').value;
    const description = document.getElementById('description').value;
    const amount = parseFloat(document.getElementById('amount').value);
    const category = document.getElementById('category').value;

    // Add expense to the list
    const expenseList = document.getElementById('expense-list');
    const listItem = document.createElement('li');
    listItem.textContent = `${date} - ${description} - ${category} - $${amount.toFixed(2)}`;
    expenseList.appendChild(listItem);

    // Update the total amount
    totalAmount += amount;
    document.getElementById('total-amount').textContent = totalAmount.toFixed(2);

    // Clear the form
    document.getElementById('expense-form').reset();
}
