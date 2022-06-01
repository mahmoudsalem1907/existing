 var ans = document.getElementById("Answer");


function EnterNumber(numb){
   ans.value  += numb; 
    //ans.textContent = numb;
}

function EnterOperator(oper){
    document.getElementById("Answer").value  += oper; 
}

function EnterClear(){
    document.getElementById("Answer").value ="";
}

function EnterEqual(){
    var x = eval(document.getElementById("Answer").value);
    document.getElementById("Answer").value = x;
}