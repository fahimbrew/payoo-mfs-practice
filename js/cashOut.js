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
        const div = document.createElement('div');
        div.classList.add('bg-lime-300');
        div.classList.add('p-3')
        div.innerHTML = `
          <p>Cash Out : ${cashOutAmountNumber} TK. Total current balance ${newBalance} Tk. </p>
        
        `
        document.getElementById('transaction-div').appendChild(div);
    }
    else {
        alert('Failed to Cash Out! Please try again later');
    }
})