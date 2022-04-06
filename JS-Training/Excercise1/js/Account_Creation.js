let btn=document.getElementById("submit").value;

function OnSubmit(event){
event.preventDefault();
    var inputs=document.getElementsByTagName('input');
    let name=inputs[0].value;
let age=inputs[1].value;
let location=inputs[2].value;
let email=inputs[5].value;
let password=inputs[6].value;
let accountType=document.getElementById("accountType").value;
if(age<69){
    let arr1=[name,age,location,email,password,accountType];
}
else{
    alert("You are not eligible for account opening")
}


console.log(arr1);
}
