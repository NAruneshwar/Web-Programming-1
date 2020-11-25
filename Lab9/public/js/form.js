let myForm = document.getElementById('form-submit');

if(myForm){
  myForm.addEventListener('submit',(event)=>{
    event.preventDefault();

    // console.log("when you're young");

    let number = (document.getElementById('searchTerm').value);
    if(number.length == 0){
      document.getElementById("Error").style.visibility = "visible";

      document.getElementById("Error").innerHTML = "No Input was given"
    }
    else{
      document.getElementById("Error").style.visibility = "hidden";
      let li = document.createElement("li");
      let fib_res = fib(number);
      let prime = prime_or_not(fib_res);
      let result = `The Fibonacci of ${number} is ${fib_res}.`;

      let element = document.createTextNode(result)
      li.appendChild(element)
      document.getElementById("results").appendChild(li);

      if(prime){
        li.className = 'is-prime'
      }
      else{
        li.className = 'not-prime'
      }
      myForm.reset();
  }

    // console.log(prime)
  });
}

let arr = []
function fib(number){

  if(number<1){
    return 0
  }
  else if(number==1){
    return 1
  }
  else{
    if(!arr.includes(number)){
      arr[number] = fib(number-1)+fib(number-2)
      return arr[number]
    }
    else{
      return arr[number]
    }
  }
}

function prime_or_not(number){
  for(let i=2;i<number;i++){
    if(number%i==0){
      return false
    }
  }
  return true
}