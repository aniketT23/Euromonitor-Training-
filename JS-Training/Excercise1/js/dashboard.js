let main=document.getElementById("cont1");
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


const withDraw=()=>{

    let amountField=document.createElement("input");
    let btn=document.createElement("button");
    btn.innerHTML="Withdraw"
   amountField.setAttribute("type", "number");
    main.append(amountField,btn)

    
}

const deposit=()=>{
    let amountField=document.createElement("input");
    let btn=document.createElement("button");
    btn.innerHTML="Deposit"
   amountField.setAttribute("type", "number");
    main.append(amountField,btn)
}