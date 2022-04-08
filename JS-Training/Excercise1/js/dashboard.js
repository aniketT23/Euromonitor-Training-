let main=document.getElementsByTagName("main");
let container=document.getElementById("info");
const displayDetails=()=>{
    let data=JSON.parse(localStorage.getItem("showDetails"));
console.log(data);
let name=document.createElement("h5");
let email=document.createElement("h5");
let account=document.createElement("h5");
let accountType=document.createElement("h5");
let balance=document.createElement("h5");
name.innerHTML="Name: "+data.name;
email.innerHTML="Email: "+data.email;
account.innerHTML="Account Number: "+data.accountNo;
accountType.innerHTML="Account Type: "+data.accountType;
balance.innerHTML= "Balance: ₹"+data.deposit;
container.append(name,email,account,accountType,balance)

}

displayDetails();