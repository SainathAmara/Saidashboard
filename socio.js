function getRandomColor(){
  var letters="0123456789ABCDEF"
  var color='#'
  for(var i=0;i<6;i++){
    var r=Math.floor(Math.random()*16)
    color=color+letters[r]
  }
return color
}
var dash=document.querySelector('#dash')
var total=document.querySelector('#total')
var ul=document.querySelector('.ul')
var btn1=document.querySelector('#row1')
var btn2=document.querySelector('#row2')
var btn3=document.querySelector('#row3')
var t=document.querySelector("#t")
function changeColor(){
  dash.style.color=getRandomColor()
  ul.style.color=getRandomColor()
  total.style.color=getRandomColor()
  btn1.style.background=getRandomColor()
  btn1.style.color=getRandomColor()
  btn2.style.background=getRandomColor()
  btn2.style.color=getRandomColor()
  btn3.style.background=getRandomColor()
  btn3.style.color=getRandomColor()
  t.style.color=getRandomColor()
}
setInterval(changeColor,2000)
