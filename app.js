const inputs=document.querySelectorAll(".angle-input");
const isTriangleBtn=document.querySelector("#is-triangle-button");
const outputBox=document.querySelector("#output-box");


function calculateSumOfAngles(angle1,angle2,angle3){
 const sum=angle1+angle2+angle3;
 return sum;
}
function checkIsTriangle(){
    if(inputs[0].value&&inputs[1].value&&inputs[2].value){
        if (inputs[0].value&&inputs[1].value&&inputs[2].value>0) {
            const sumOfAngles=calculateSumOfAngles(Number(inputs[0].value),Number(inputs[1].value),Number(inputs[2].value));
            if (sumOfAngles===180) {
                outputBox.innerText="The given angles form a triangle"
            } else  {
                outputBox.innerText="The given angles don't form a triangle"
            }
        } else{
            outputBox.innerText="The values should  be greater than 0"
        }
       
    }else{
        outputBox.innerText="Please fill all the input field"
    }
}

isTriangleBtn.addEventListener("click",checkIsTriangle);