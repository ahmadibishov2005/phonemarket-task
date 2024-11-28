import baseurl from "./baseurl.js"
import {PostData,GetAllSuppliers} from "./requests.js"

let registerForm=document.querySelector(".resgister-form")
let name=document.querySelector("#name")
let surname=document.querySelector("#surname")
let email=document.querySelector("#email")
let password=document.querySelector("#password")


registerForm.addEventListener("submit",(e)=>{
    e.preventDefault()
    let newUser={
        name:name.value,
        surname:surname.value,
        email:email.value,
        password:password.value,
        isAdmin:false,
        favorites:[]
    }




GetAllSuppliers(`${baseurl}/users`)
.then(res=>{
    let users=res.response
    let findedUser=users.find(user=>user.email==email.value)
    if(findedUser){
        alert("Bu email artiq qeydiyyatdan kecirilib")
    }else{
        
    PostData(`${baseurl}/users`,newUser)
    .then(()=>{
        // window.location.href="login.html"
    })
    }
})


})