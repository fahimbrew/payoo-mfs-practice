// console.log('added');
document.getElementById('btn-add-money').addEventListener('click', function (event) {
    event.preventDefault();
    // console.log('clockekd')
    const amountNumber = getValueByIdFromInput('input-amount');
    // console.log(amountNumber);
    if (isNaN(amountNumber)) {
        alert('Invalid Input');
        return;
    }
    const pinNumber = getValueByIdFromInput('input-pin');
    // console.log(amountNumber, pinNumber);
    const balanceNumber = getValueByIdFromContainer('account-balance');
    // console.log(balanceNumber);
    if (pinNumber === 1234) {
        const newBalance = amountNumber + balanceNumber;
        // console.log(newBalance);
        document.getElementById('account-balance').innerText = newBalance;


    }
    else {
        alert('Failed to add money! Please try again');
    }

})