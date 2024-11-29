const input = document.getElementById("input")
const button = document.getElementById("btn")
const note= document.getElementById("note")


const number = 55

button.addEventListener("click" , () => {
    const guess = Number(input.value)
    if(isNaN(guess)||guess>100||guess<1){
        note.textContent="Please enter number between 1-100"
        return;
    }
    
    if(guess === number){
        alert("You win");
    } else if (guess < number){
        note.innerText = "Enter bigger number"
     }else{note.textContent = "Enter lower number"}
     input.value=""
})