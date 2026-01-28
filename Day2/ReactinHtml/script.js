import bat from './app.js'
var h1 =  React.createElement("h1",null,"hey i am harpreet singh ")
var container = document.querySelector("#container")


var root = ReactDOM.createRoot(container)

var div = React.createElement("div",{id:'parent'},[h1,bat])

root.render(div)

console.log("hlo world")