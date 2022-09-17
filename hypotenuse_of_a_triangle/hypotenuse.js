const sideInputs = document.querySelectorAll(".side-input");
const calculateButton = document.querySelector("#calculate-hypotenus-btn");
const otputBox = document.querySelector("#output-box");


function calculateSumOfSquare(a, b) {
    const sum = a * a + b * b;
    return sum;
    
}

function calculateHypotenuse() {
    const sumOfSquare = calculateSumOfSquare(Number(sideInputs[0].value),Number(sideInputs[1].value));
    const lengthOfHypotenuse=Math.sqrt(sumOfSquare);
    otputBox.innerText="The length of the hypotenuse is "+lengthOfHypotenuse;

}

calculateButton.addEventListener("click", calculateHypotenuse);