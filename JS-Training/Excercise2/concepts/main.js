const asyncFunc = async () => {
  let data = await fetch("https://reqres.in/api/users/2");
  let res = await data.json();
  console.log(res);
};
asyncFunc();

const promiseFunc = () => {
  return new Promise((resolve, reject) => {
    if(res()){
        resolve();
    }else{
        reject()
    }
  });
};

promiseFunc().then(()=>{
    console.log("Yo good");
    // console.log(res());
}).catch(()=>{
    console.log("bad");
})


function res(){
    fetch('https://reqres.in/api/users/2').then(res=>res.json()).then(data=>{console.log(data);}) ;
    
    // console.log("data:-",data)
}
