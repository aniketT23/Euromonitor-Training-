let main=document.getElementsByTagName("main");
const displayDetails=()=>{
    let data=JSON.parse(localStorage.getItem("showDetails"));
console.log(data);

}

displayDetails();