function getDepositInputById(inputId) {
    const element = document.getElementById(inputId);
let elementString = element.value
let elementInt = parseFloat(elementString);
element.value = '';
// console.log(elementInt);
return elementInt
}

function getDepositShowById(showId) {
    const element = document.getElementById(showId);
    const elementString = element.innerText;
    const elementInt = parseFloat(elementString);
    // console.log(elementInt);
    return elementInt
    
}
function setDepositAmountById(amountId,newValue) {
    const  element = document.getElementById(amountId);
    element.innerText = newValue;
}

// Deposit Section And Calculation
document.getElementById('btn-deposit').addEventListener('click',function(){
    const depositInput = getDepositInputById('deposit-input')
    const depositValue = getDepositShowById('deposit-value')
    const totalBalanceShow = getDepositShowById('total-show')
    
    const newDepositAmount = depositInput + depositValue
    setDepositAmountById('deposit-value',newDepositAmount)
    const totalAmountBalance = totalBalanceShow + depositInput
    setDepositAmountById('total-show',totalAmountBalance)
})

// WithDraw Section And Calculation
document.getElementById('btn-withdraw').addEventListener('click',function(){
    const withdrawInput = getDepositInputById ('withdraw-input')
    const withdrawShow = getDepositShowById ('withdraw-value')
    const totalBalanceShow = getDepositShowById('total-show')
    const newWithdrawAmount = withdrawInput + withdrawShow;
    setDepositAmountById('withdraw-value',newWithdrawAmount);

    const totalAmountBalance = totalBalanceShow - withdrawInput;
    setDepositAmountById('total-show',totalAmountBalance)

    if(totalAmountBalance<withdrawInput){
        let wrong = document.getElementById('wrong')
        wrong.innerText = "Your Total Balance is low from your Withdraw Amount"
    }
})