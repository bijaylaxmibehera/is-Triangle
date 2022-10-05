const inputs = document.querySelectorAll(".input");
const calculateAreaBtn = document.querySelector("#calculate-area-btn");
const outputBox = document.querySelector("#output-box");

function calculateBaseMulHeight(b, h) {
    const mul = b * h;
    return mul;
}

function calculateArea() {
    if (inputs[0].value && inputs[1].value) {
        if (inputs[0].value && inputs[1].value > 0) {
            const mulOfBaseAndHeight = calculateBaseMulHeight(Number(inputs[0].value), Number(inputs[1].value));
            const areaOfTriangle = (mulOfBaseAndHeight) / 2;
            outputBox.innerText = "The area of triangle is " + areaOfTriangle + " cm²"
        } else {
            outputBox.innerText = "The entered value must be greater than 0"
        }

    } else {
        outputBox.innerText = "Please fill all the input field"
    }
    

}

calculateAreaBtn.addEventListener("click", calculateArea);