const sideInputs = document.querySelectorAll(".side-input");
const calculateButton = document.querySelector("#calculate-hypotenus-btn");
const outputBox = document.querySelector("#output-box");


function calculateSumOfSquare(a, b) {
    const sum = a * a + b * b;
    return sum;

}

function calculateHypotenuse() {
    if (sideInputs[0].value && sideInputs[1].value) {
        if (sideInputs[0].value && sideInputs[1].value > 0) {
            const sumOfSquare = calculateSumOfSquare(Number(sideInputs[0].value), Number(sideInputs[1].value));
            const lengthOfHypotenuse = Math.sqrt(sumOfSquare);
            otputBox.innerText = "The length of the hypotenuse is " + lengthOfHypotenuse;
        }else{
            outputBox.innerText="The values must be greater than 0"
        }
    }else{
        outputBox.innerText="Please fill all the input field"
    }


}

calculateButton.addEventListener("click", calculateHypotenuse);