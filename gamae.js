// Iniciar as variáveis 

let board = ["","","","","","","","","",];//nove objetos vazios por ser 9 quadrados
let playerTime = 0; // o valor 0 vai definir o primeiro jogador e o segundo será o 1
let symbols = ["x","y"];// o igual a escudo e x igual a espada as imagens já foram inseridas pelo CSS.
let gameOver = false;
let winStates = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],
]


function handleMove(position){

    if(gameOver){
        return;
    }

    if(board[position] == ""){

    board[position] = symbols[playerTime]; /*Board são os 9 objetos e position foi como chamamos as posições de cada square, sendo assim quando
adicionamos o symbols = [playerTime"nome da expressão dentro da condilção"] ele inseri o simbolo do primeiro jogador que seria o x e vice-versa*/

    gameOver = isWin(); 

    if(gameOver == false){

    playerTime = (playerTime == 0) ? 1 : 0;
}   

  }  
  
     return gameOver;
}

function isWin(){

   

    for(let i = 0; i< winStates.length; i++){
        let seq = winStates[i];

        let pos1 = seq[0];
        let pos2 = seq[1];
        let pos3 = seq[2];
        
        if(board[pos1] == board[pos2] && 
            board[pos1] == board[pos3] && board[pos1] != ""){
                return true
            }
    }

    return false
}