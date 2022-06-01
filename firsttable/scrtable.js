do{
    var num = prompt("enter the no. of person");
}while(!isFinite(num));
var count = 1;
for(var i = 0 ;i<num ;i++){
    
    do{
        var namee= prompt("enter user"+ count +" name");
    
    }while(!isNaN(namee) || (namee.length < 3 || namee.length >10) );
    
    do {
        var age = prompt("enter user" + count +" age ");
    
    }while(!isFinite(age) || age <10 || age >60);
    count++;
    creatMytable(namee,age);

}


function creatMytable(nname,nage){
    var row = document.createElement("tr");
    var column1 =document.createElement("td");
    var column2 =document.createElement("td");
    column1.textContent=namee;
    column2.textContent=nage;
    row.append(column1);
    row.append(column2);
    document.getElementById("mytable").append(row);
}









