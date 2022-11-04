document.getElementById("totalSum").disabled=true;

document.getElementById('input1').addEventListener("keyup", getValue);
document.getElementById('input2').addEventListener("keyup", getValue);

function getValue() {
    
    const amount1 = Number(document.getElementById('input1').value);
    const amount2 = Number(document.getElementById('input2').value);
    //used the number keyword to convert the string into an integer
    
    const sumAmount = amount1 + amount2;
    document.getElementById("totalSum").value= sumAmount;
}





