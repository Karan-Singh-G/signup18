
document.getElementById("submit").addEventListener('click',registration);

function registration(e){
e.preventDefault();
 
 let usename=document.getElementById("username").value;
 let password=document.getElementById("password").value;
 
 let data={username,password}
 
 fetch("https://masai-api-mocker.herokuapp.com/auth/login", {
    method: "POST",
    headers: {'Content-Type': 'application/json'}, 
    body: JSON.stringify(data)
  }).then(res => {
    console.log(res.json());
  }).then((data)=>console.log(data))
 
}