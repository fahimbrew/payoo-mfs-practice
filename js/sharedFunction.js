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