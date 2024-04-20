const InputCardNumber=document.getElementById("Inputcard-number")
const InputHolder=document.getElementById("Input-holder");
const CardNumber=document.getElementById("card_number")
const CardHolder=document.getElementById("card-holder")
const InputMonth=document.getElementById("inputMM")
const InputYear=document.getElementById("inputYY")
const Month=document.getElementById("MM")
const Year=document.getElementById("YY")
const InpuCVC=document.getElementById("inputCVC")
const CVC=document.getElementById("CVC")

InputHolder.addEventListener('keyup',()=>{
    let input1=InputHolder.value 
    CardHolder.textContent=input1;
    
})

InputCardNumber.addEventListener('keyup',()=>{
    let input2=InputCardNumber.value
    console.log(input2)
    console.log(typeof(input2)) 
    CardNumber.textContent=input2;
})

InputMonth.addEventListener('keyup',()=>{
    let input3=InputMonth.value
    console.log(input3)
    Month.textContent=input3;
})
InputYear.addEventListener('keyup',()=>{
    let input4=InputYear.value
    console.log(input4)
    Year.textContent=input4;
})

InpuCVC.addEventListener('keyup',()=>{
    let input5=InpuCVC.value
    console.log(input5)
    CVC.textContent=input5;
})