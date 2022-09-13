
document.getElementById("submit").addEventListener('click',registration);

function registration(e){
e.preventDefault();
 let name=document.getElementById("name").value;
 let email=document.getElementById("email").value;
 let usename=document.getElementById("username").value;
 let password=document.getElementById("password").value;
 let mobile=document.getElementById("mobile").value;
 let descripation=document.getElementById("desc").value;
 let data={name,email,password,username,mobile,descripation}
 let url=`https://masai-api-mocker.herokuapp.com/auth/register`
 fetch(`https://masai-api-mocker.herokuapp.com/auth/register`, {
    crossDomain:true,
    method: 'POST',
    headers: {'Content-Type':'application/json'},
    body: JSON.stringify(data)
  })
    .then(response => response.json())
    .then((res)=>{
        console.log(res)
    })
   
}