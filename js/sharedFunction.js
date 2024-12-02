// get value by ID from input Field

function getValueByIdFromInput(id) {
    const value = document.getElementById(id).value;
    const valueNumber = Number(value);
    return valueNumber;
}

// get value by id from contanier tag
function getValueByIdFromContainer(id) {
    const value = document.getElementById(id).innerText;
    const valueNumber = Number(value);
    return valueNumber;
}

// toggle function
function showSectionById(id) {
    // Hide all divs
    document.getElementById('add-money-container').classList.add('hidden');
    document.getElementById('cash-out-container').classList.add('hidden')
    document.getElementById('transaction-div').classList.add('hidden');
    // show container
    document.getElementById(id).classList.remove('hidden');

}