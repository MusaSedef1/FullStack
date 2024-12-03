const text = document.querySelector("#text");
const btn = document.querySelector("#btn");
const note = document.querySelector("#note");

const unluler = ["a","e","u","i","o"];

btn.addEventListener("click", () => {
   const liste = [...text.value]
    let count = 0;



    liste.reduce((acc, item, index) => {
      if(unluler.includes(item.toLowerCase())){
        count++
      }

    },0)
    note.textContent = `${count} adet unlu vardir`
})