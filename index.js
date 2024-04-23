const InputCardNumber = document.getElementById("Inputcard-number");
const InputHolder = document.getElementById("Input-holder");
const CardNumber = document.getElementById("card_number");
const CardHolder = document.getElementById("card-holder");
const InputMonth = document.getElementById("inputMM");
const InputYear = document.getElementById("inputYY");
const Month = document.getElementById("MM");
const Year = document.getElementById("YY");
const InpuCVC = document.getElementById("inputCVC");
const CVC = document.getElementById("CVC");
const Ending = document.querySelector(".ending");
const button = document.querySelector(".btn");
const form = document.querySelector(".form");
const hide = document.querySelector(".hide");
const alert = document.querySelector(".alert");
const alert1 = document.querySelector(".alert1");
const alert2 = document.querySelector(".alert2");
const alert3 = document.querySelector(".alert3");


function checkInputs() {
    const cardNumberValue = InputCardNumber.value.trim();
    const holderValue = InputHolder.value.trim();
    const monthValue = InputMonth.value.trim();
    const yearValue = InputYear.value.trim();
    const cvcValue = InpuCVC.value.trim();

    return cardNumberValue !== "" && holderValue !== "" && monthValue !== "" && yearValue !== "" && cvcValue !== "";
}

InputHolder.addEventListener('keyup', () => {
    CardHolder.textContent = InputHolder.value;
});

InputCardNumber.addEventListener('keyup', () => {
    // let input2=InputCardNumber.value
    // console.log(input2)
    // // console.log(typeof(input2)) 
    // CardNumber.textContent=input2;
    let input = InputCardNumber.value.replace(/\s/g, '');
    let formatted = input.replace(/(\d{4})/g, '$1 ').trim();
    CardNumber.textContent = formatted;

    if(input2==!Number){
        console.log("not a number")
        alert.style.display="block"
    }
    else{
        alert.style.display="none"
    }
});

InputMonth.addEventListener('keyup', () => {
    Month.textContent = InputMonth.value;
    if (InputMonth.value === "") {
        alert1.style.display = "block";
    } else {
        alert1.style.display = "none";
    }
});

InputYear.addEventListener('keyup', () => {
    Year.textContent = InputYear.value;
    if (InputYear.value === "") {
        alert2.style.display = "block";
    } else {
        alert2.style.display = "none";
    }
});

InpuCVC.addEventListener('keyup', () => {
    CVC.textContent = InpuCVC.value;
    if (InpuCVC.value === "") {
        alert3.style.display = "block";
    } else {
        alert3.style.display = "none";
    }
});


// Button click event
button.addEventListener("click", () => {
    if (checkInputs()) {
        Ending.style.display = "block";
        // hide.style.display = "none";
        form.classList.add("hide")
    } else {
        alert.style.display = "block";
        alert1.style.display = "block";
        alert2.style.display = "block";
        alert3.style.display = "block";
    }
});

