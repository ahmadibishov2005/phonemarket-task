import baseurl from "./baseurl.js"
import {GetAllSuppliers} from "../js/requests.js"

let loginForm=document.querySelector(".login-form")
let email=document.querySelector("#email")
let password=document.querySelector("#password")




loginForm.addEventListener("submit",(e)=>{
    e.preventDefault()
    GetAllSuppliers(`${baseurl}/users`)
    .then((res)=>{
        let users=res.response
        let findedUser= users.find(user=> user.email==email.value && user.password==password.value)
       if(findedUser){
          localStorage.setItem("userInfo",JSON.stringify(findedUser.id))
          window.location.href="index.html"
       }else{
          alert("Invalid username or password")
       }
    })
})