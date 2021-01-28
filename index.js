var readlineSync=require('readline-sync')
const chalk=require('chalk')
const log=console.log

log(chalk.bgCyan.black.bold.italic('__Is your birthday a prime number?__ '))
var userName=readlineSync.question('\nWhat is your name? ')

var date=readlineSync.question(chalk.yellow('\nEnter your birth date and month(eg: DD/MM ) '));


date=date.split("/")
var day=parseInt(date[0]);
var month=parseInt(date[1]);
var isPrime=true




function checkPrimeNo(){
  if(day===2){
    log(chalk.green("\nYay!! your birthday is a prime number"))
  } 
  else if(day>1){
    for(let i=2; i<day; i++){
      if(day%i===0){
        isPrime=false
      }
    }
    if(isPrime){
      log(chalk.green("\nYay!!! your birthday is a prime number"))
    }else{
      log(chalk.green("\nOpps!!! your birthday is a not prime number"))
    }
  }
}

console.log(checkPrimeNo())



