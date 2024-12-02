// console.log('connected');
document.getElementById('btn-cash-out').addEventListener('click', function (event) {
    event.preventDefault();
    // console.log('works')
    const cashOutAmountNumber = getValueByIdFromInput('input-cash-out');
    const pinNumber = getValueByIdFromInput('input-cashout-pin');
    const balanceNumber = getValueByIdFromContainer('account-balance');
    if (isNaN(cashOutAmountNumber)) {
        alert('enter valid input')
        return;
    }

    // console.log(cashOutAmountNumber, pinNumber, balanceNumber);
    if (pinNumber === 1234) {
        // console.log('will reduce the balance')
        const newBalance = balanceNumber - cashOutAmountNumber;
        if (newBalance < 0) {
            alert('Insuffiecient Balance');
            return;
        }
        document.getElementById('account-balance').innerText = newBalance;
    }
    else {
        alert('Failed to Cash Out! Please try again later');
    }
})