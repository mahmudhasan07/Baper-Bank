function getDepositInputById (depositId){
    const depositInput = document.getElementById(depositId);
    const depositInputString = depositInput.value;

const depositInputInt = parseFloat(depositInputString)
depositInput.value = " ";
// console.log(depositInputInt);
return depositInputInt;
}

function getDepositTextById(textId) {
    const depositShow = document.getElementById(textId);
    const depositShowString = depositShow.innerText;
    const depositShowInt = parseFloat(depositShowString);
    console.log(depositShowInt);
    return depositShowInt;
}

function getTotalAmountById(elementId){
    const totalBalance = document.getElementById(elementId);
    const totalBalanceString = totalBalance.innerText;
    const totalBalanceInt = parseFloat(totalBalanceString) 
    return totalBalanceInt
} 
 
function setTextValueById (textId,newValueInt){
    const textValue = document.getElementById(textId);

    //  newValueInt = parseFloat(newValue)
    textValue.innerText = newValueInt;

}


document.getElementById("btn-deposit").addEventListener('click',function(){

    const depositInputAmount = getDepositInputById("deposit-input")
    const depositShowAmount = getDepositTextById("deposit-value")
    const totalBalance = getTotalAmountById('total-show')
    // console.log(typeof (depositInputAmount,depositShowAmount));


    const newDepositAmount = depositInputAmount + depositShowAmount;
    setTextValueById("deposit-value",newDepositAmount)
    console.log(totalBalance);

    
    const newTotalBalance = totalBalance + depositInputAmount;
    // console.log(parseFloat (newTotalBalance));
    setTextValueById('total-show',newTotalBalance);

})