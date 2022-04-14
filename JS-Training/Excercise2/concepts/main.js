var users;
let main = document.getElementById("main");
const asyncFunc = async () => {
  let data = await fetch("https://reqres.in/api/users?page=1");
  let res = await data.json();
  users = res.data;
  console.log(users);
  users.map((e) => {
    let img = document.createElement("img");
    let heading = document.createElement("h4");
    let email = document.createElement("p");
    let section = document.createElement("div");
    let link = document.createElement("a");
    img.src = e.avatar;
    heading.innerHTML = e.first_name;
    email.innerHTML = e.email;
    section.setAttribute("class", "container");
    link.href = "./particularUser.html";
    link.addEventListener("click", () => {
      localStorage.setItem("ID", JSON.stringify(e.id));
    });
    link.append(img);
    section.append(heading, email, link);
    main.append(section);
  });
};
asyncFunc();


