const inputs=document.querySelectorAll(".angle-input");
const isTriangleBtn=document.querySelector("#is-triangle-button");
const outputBox=document.querySelector("#output-box");


function calculateSumOfAngles(angle1,angle2,angle3){
 const sum=angle1+angle2+angle3;
 return sum;
}
function checkIsTriangle(){
    const sumOfAngles=calculateSumOfAngles(Number(inputs[0].value),Number(inputs[1].value),Number(inputs[2].value));
    if (sumOfAngles===180) {
        outputBox.innerText="The given angles form a triangle"
    } else {
        outputBox.innerText="The given angles don't form a triangle"
    }
}

isTriangleBtn.addEventListener("click",checkIsTriangle);