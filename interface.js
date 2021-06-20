//Explicação sobre o DOMContentLoaded no link https://developer.mozilla.org/pt-BR/docs/Web/API/Window/DOMContentLoaded_event

document.addEventListener("DOMContentLoaded",()=>{

    let squares = document.querySelectorAll(".square");

    squares.forEach((square)=>{
        square.addEventListener("click", handleClick);
    })
    //O método forEach() executa uma dada função em cada elemento de um array.
}) 

function handleClick(event){

   let square = event.target;
   let position = square.id;

   if(handleMove(position)){

    setTimeout(() =>{ 

        alert("O Jogo Acabou");

   },10);       

   }

   updateSquares(position);

}

function updateSquares(position){
        
        let square = document.getElementById(position.toString());

        let symbol = board[position];
        square.innerHTML = `<div class ="${symbol}"></div> `
     
}