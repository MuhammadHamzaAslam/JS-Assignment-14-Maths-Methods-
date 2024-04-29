// Maths Assignment 


let num = 4.5
document.write('<h1>','Number:', num,'<h1>')
document.write('<h1>','Round:', Math.round(num),'<h1>')
document.write('<h1>','ceil:', Math.round(num),'<h1>')
document.write('<h1>','floor:', Math.round(num),'<h1>')

document.write('<br>')
// Q2


let num1 = -4.5
document.write('<h1>','Number:', num1,'<h1>')
document.write('<h1>','Round:', Math.round(num1),'<h1>')
document.write('<h1>','ceil:', Math.round(num1),'<h1>')
document.write('<h1>','floor:', Math.round(num1),'<h1>')


document.write('<br>')
// Q3


document.write('<br>')
//Q4


let random = Math.round(Math.random()*10)
document.write('<h1>','Random Dice value:', random,'<h1>')

document.write('<br>')

// Q5

let coin = Math.ceil(Math.random()*2)
if(coin == '1'){
  document.write('<h1>',coin,'<br>','Random coin value = Tail','</h1>')
}
else if (coin == '2') {
  document.write('<h1>',coin,'<br>','Random coin value = head','</h1>')
}


// Q6

let rand = Math.round(Math.random()*101)
document.write('<h1>','The random number between 1 and 100 is:',rand,'</h1>')


// Q7
let weight = prompt('Enter your weight in kilograms')
document.write('<h1>','The weight of user is:',weight,'</h1>')


// Q8
let computer = Math.round(Math.random()*11)
let userGuess = parseInt(prompt('Enter a number between 1-10'))
if(computer == userGuess){
  document.write('Congrats You Win')
}
else{
  alert('You lose')
}