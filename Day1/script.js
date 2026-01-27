/*
import { duration } from 'moment'
 import user from './app'
 import  fun from './app'
 import test from './test'
 console.log(user)
 function hero(){
     console.log("hi i am harpreet singh ")
     return 10
 }
 hero()
 function add(a,b){
     return a+b
 }
 console.log(add(10,20))
 console.log(test())
 console.log(fun())

/* ------------------- The upper code is for practice of export and import --------------------- */

/*
 gsap.to("#box",{
     x:500,
     duration:2,
     delay:1
 })   */
var h1  = React.createElement('h1',null,'I am Harpreet Singh')
var root = document.querySelector("#root")



var container = ReactDOM.createRoot(root)

console.log(container)
container.render(h1)

console.log(h1)

function h1(){
    return  React.createElement("h1",null,'Hello from h1')
}

var container = ReactDOM.createRoot(document.querySelector('#root'))

container.render(h1())