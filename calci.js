
function add(){
    var firstOp, secondOp, result;
    firstOp = document.getElementById('first').value;
    secondOp = document.getElementById('second').value;
    result = parseInt(firstOp) + parseInt(secondOp);
    window.alert("Addition of " + firstOp + " and " + secondOp + " is : " +result);
}
function sub(){
    var firstOp, secondOp, result;
    firstOp = document.getElementById('first').value;
    secondOp = document.getElementById('second').value;
    result = parseInt(firstOp) - parseInt(secondOp);
    window.alert("Substraction of " + firstOp + " and " + secondOp + " is : " +result);
}
function mul(){
    var firstOp, secondOp, result;
    firstOp = document.getElementById('first').value;
    secondOp = document.getElementById('second').value;
    result = parseInt(firstOp) * parseInt(secondOp);
    window.alert("Multiplication of " + firstOp + " and " + secondOp + " is : " +result);
}
function div(){
    var firstOp, secondOp, result;
    firstOp = document.getElementById('first').value;
    secondOp = document.getElementById('second').value;
    result = parseInt(firstOp) / parseInt(secondOp);
    window.alert("division of " + firstOp + " and " + secondOp + " is : " +result);
}
function modulus(){
    var firstOp, secondOp, result;
    firstOp = document.getElementById('first').value;
    secondOp = document.getElementById('second').value;
    result = parseInt(firstOp) % parseInt(secondOp);
    window.alert("modulus of " + firstOp + " and " + secondOp + " is : " +result);
}
