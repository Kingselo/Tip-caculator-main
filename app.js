// 

const billInput = document.querySelector('#bill-input');
const peopleInput = document.querySelector('#people-input');
const peopleInputCont = document.querySelector('#people-in-cont')
const billNumber = document.querySelector('#bill-number');
const tip = document.querySelectorAll('.tip');
const tipOne = document.querySelector('#tip-one')
const tipTwo = document.querySelector('#tip-two')
const tipThree = document.querySelector('#tip-three')
const tipFour = document.querySelector('#tip-four')
const tipFive = document.querySelector('#tip-five')
const customTip = document.querySelector('#tip-custom');
// const countOfPeople = document.querySelector('#people-input');
let tipAmt = document.querySelector('#tip-amt');
let tipTotAmt = document.querySelector('#tip-tot-amt');
const halfInput = document.querySelectorAll ('.main-half-input')
const validPeople = document.querySelector('.valid-people')
const resetBtn = document.getElementById('reset-btn')

billInput.addEventListener('click', ()=>{billNumber.focus()})
peopleInputCont.addEventListener('click', () => {peopleInput.focus()})
// Select Tips on click

function toggleButtons(ActiveButtons) {


   customTip.value = ""
    // Remove Color From All The Buttons
    tip.forEach(btn => {btn.classList.remove('active')})

    // Add Color To Selected tip

    ActiveButtons.classList.add('active')
}

customTip.addEventListener("keyup", () => {
    tip.forEach(btn => {btn.classList.remove('active')})
})

// Loop Through Tip Button
tip.forEach(button =>{
 button.addEventListener('click', function () {
    toggleButtons(this)
 });
})

// Add Color To The input fleids on focus

halfInput.forEach(input =>{

    // Add Outline Class
    input.addEventListener('focus', function name() {
        if (input.classList.contains('bill-number')) {
            billInput.classList.add('outline')
        } else {
            peopleInput.classList.add('outline')
        }

        // Remove Outline 
        input.addEventListener('blur', function () {
            if (input.classList.contains('bill-number')) {
                billInput.classList.remove('outline')
            } else {
                peopleInput.classList.remove('outline')
            }
            
        })
    })
})

// Input Validation 
customTip.addEventListener('blur' , () => {Validation(billNumber, customTip, peopleInput, tip, validPeople) ; tip.forEach(item =>{if (item.classList.contains('active') && billNumber.value != '' && peopleInput.value !="" || billNumber.value != "" && peopleInput.value != "" && customTip.value != '') {
    result(billNumber,customTip, peopleInput, item)
    result(billNumber,customTip, peopleInput, item) 
}})})
billNumber.addEventListener('blur', () => {Validation(billNumber, customTip, peopleInput, tip,  validPeople); tip.forEach(item =>{if (item.classList.contains('active') && billNumber.value != '' && peopleInput.value !="" || billNumber.value != "" && peopleInput.value != "" && customTip.value != '') {
    result(billNumber,customTip, peopleInput, item)
    result(billNumber,customTip, peopleInput, item) 
}})})
    // People Input Validation
peopleInput.addEventListener('input', () => {Validation(billNumber, customTip, peopleInput, tip, validPeople); tip.forEach(item =>{if (item.classList.contains('active') && billNumber.value != '' && peopleInput.value !="" || billNumber.value != "" && peopleInput.value != "" && customTip.value != '') {
    result(billNumber,customTip, peopleInput, item)
    result(billNumber,customTip, peopleInput, item) 
}})})
tip.forEach(item =>{
    item.addEventListener('click', () => {Validation(billNumber, customTip, peopleInput, tip, validPeople); tip.forEach(item =>{if (item.classList.contains('active') && billNumber.value != '' && peopleInput.value !="" || billNumber.value != "" && peopleInput.value != "" && customTip.value != '') {
        result(billNumber,customTip, peopleInput, item)
        result(billNumber,customTip, peopleInput, item) 
    }})})
})
function Validation(input1, input2, input3, input4, input5) {
    if (input1.value != ""  && input2.value != "" ) {
        if (input3.value == "") {
            input5.classList.add('validation')
        } else {
            input5.classList.remove('validation')
        }
    }



   
   input4.forEach(item =>{

    if (item.classList.contains('active') && input1.value != "") {
        if (input3.value == "") {
            input5.classList.add('validation')
        } else {
            input5.classList.remove('validation')
        } 
    } 
   })

   
}

// Caculating The Pencentage Share


function result(bill, customTip, people, item) {
    let result;
    let resultA;
    
        if (bill.value != "" && customTip.value && people.value) {
            result = Number(customTip.value) / 100 * Number(bill.value) / Number(people.value)
            resultA = result * Number(people.value) 
            console.log(result)
            console.log(resultA)
            tipAmt.innerHTML =  "$" + parseFloat(result.toFixed(2))
            tipTotAmt.innerHTML = '$' + parseFloat(resultA.toFixed(2))
            resetBtn.classList.add('active-button')
        } else {
            result = Number(item.value) / 100 * Number(bill.value) / Number(people.value)
            resultA = result * Number(people.value) 
            console.log(resultA)
            console.log(result)
            tipAmt.innerHTML = "$" + parseFloat(result.toFixed(2));
            tipTotAmt.innerHTML = "$" + parseFloat(resultA.toFixed(3))
            resetBtn.classList.add('active-button')

        }
   console.log(result)
}

console.log(resetBtn)

// Reset Button 
    resetBtn.addEventListener('click',() => {
        location.reload()
        console.log('working')
})




