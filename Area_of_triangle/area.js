const inputs=document.querySelectorAll(".input");
const calculateAreaBtn=document.querySelector("#calculate-area-btn");
const outputBox=document.querySelector("#output-box");

function calculateBaseMulHeight(b,h){
    const mul= b*h;
    return mul;
}
function calculateArea(){
    const mulOfBaseAndHeight=calculateBaseMulHeight(Number(inputs[0].value),Number(inputs[1].value));
    const areaOfTriangle=(mulOfBaseAndHeight)/2;
    outputBox.innerText="The area of triangle is "+areaOfTriangle+" cm²"
}

calculateAreaBtn.addEventListener("click",calculateArea);