
let cardPoint2 = document.getElementById("point2")
let cardPoint = document.getElementById("point")
let gameField = document.getElementById("mouse-field")
let ball = document.getElementById("circle")
let turnText = document.getElementById("turn-text")
let section = document.getElementById("sec-circle")
let background = document.getElementById("winner-card")
let textCard = document.getElementById("text-card")
let mycard = document.getElementById("card1")
let myH2 = document.getElementById("myH2")
let myH3 = document.getElementById("myH3")


let name1 = prompt("first username")
let name2 = prompt("second username")

myH2.innerHTML = name1
myH3.innerHTML = name2

turnText.innerHTML = name1 + ", it's your turn..."



function mousePosition(event){
    
    if(changeTurn  === 0){
        firstBall();
        
    }
 }



let lastCreatedDiv = null;
function mouseMoveHandler(event) {
    
    if (lastCreatedDiv) {
        x = event.clientX;
        position = x.toString() + "px";
        lastCreatedDiv.style.left = position;
        positionString = parseInt(x)
        
    }
}
gameField.addEventListener("mousemove" , mouseMoveHandler);



let elementCounter = 1 ;


function createNewElement(){
     if (elementCounter % 2 === 1) {
      
         let myDiv = document.createElement("div");
         section.appendChild(myDiv);
         myDiv.setAttribute("id", "circle2");
         turnText.innerHTML = name2 + ", it's your turn...";
         lastCreatedDiv = document.getElementById("circle2");
         lastCreatedDiv = myDiv;
        

     } else if (elementCounter % 2 === 0) {
         
         let myDiv = document.createElement("div");
         section.appendChild(myDiv);
         myDiv.setAttribute("id", "circle");
         turnText.innerHTML = name1 + ", it's your turn...";
         lastCreatedDiv = document.getElementById("circle");
         lastCreatedDiv = myDiv;
     }
 
     elementCounter++;
}



 function firstBall(){
        ball = document.getElementById("circle")
        x = event.clientX;
        fullText = x.toString() + "px";
        ball.style.left = fullText;
        parsFullText = parseInt(x)
    }



let isFill  = 0
let isFill1 = 0
let isFill2 = 0
let isFill3 = 0
let isFill4 = 0
let isFill5 = 0
let isFill6 = 0



let changeTurn = 0
let clicked = 0
let clickedBall1 = false;
let clickedBall2 = false;
let clickCount = 0
let currentPlayer = 1


function lineThrowBall(){
    
    winner(board)
    currentPlayer++

    if(currentPlayer > 2){
        currentPlayer = 1
    }
    console.log(currentPlayer)
    console.log(board)
    
    clickCount++
    changeTurn++


    let startNum1 = 438; 
    let endNum1 = 500; 
    let numbers1 = Array.from({ length: endNum1 - startNum1 + 1 }, (_, index) => startNum1 + index);

    let startNum2 = 503; 
    let endNum2 = 565; 
    let numbers2 = Array.from({ length: endNum2 - startNum2 + 1 }, (_, index) => startNum2 + index);

    let startNum3 = 567; 
    let endNum3 = 631; 
    let numbers3 = Array.from({ length: endNum3 - startNum3 + 1 }, (_, index) => startNum3 + index);

    let startNum4 = 633; 
    let endNum4 = 696; 
    let numbers4 = Array.from({ length: endNum4 - startNum4 + 1 }, (_, index) => startNum4 + index);

    let startNum5 = 698; 
    let endNum5 = 764; 
    let numbers5 = Array.from({ length: endNum5 - startNum5 + 1 }, (_, index) => startNum5 + index);

    let startNum6 = 766; 
    let endNum6 = 834; 
    let numbers6 = Array.from({ length: endNum6 - startNum6 + 1 }, (_, index) => startNum6 + index);

    let startNum7 = 836; 
    let endNum7 = 903; 
    let numbers7 = Array.from({ length: endNum7 - startNum7 + 1 }, (_, index) => startNum7 + index);
             
    

    
    if(clickCount > 1){
    
    if(numbers1.includes(positionString) == true){

        if(isFill === 0){
            lastCreatedDiv.style.top = "645px";
            lastCreatedDiv.style.left = "432px";
            createNewElement()
            clicked = 1;
            isFill ++
            

           if(currentPlayer === 2){
                console.log(currentPlayer)
                board[5][0] = 1
            }else if(currentPlayer === 1){
                console.log(currentPlayer)
                board[5][0] = 2
            }
            
            
        }else if (isFill === 1){
            lastCreatedDiv.style.top = "578px";
            lastCreatedDiv.style.left = "432px";
            createNewElement()
            clicked = 1;
            isFill ++
            if(currentPlayer === 2){
                console.log(currentPlayer)
                board[4][0] = 1
            }else if(currentPlayer === 1){
                console.log(currentPlayer)
                board[4][0] = 2
            }
       
        }else if (isFill === 2){
            lastCreatedDiv.style.top = "515px";
            lastCreatedDiv.style.left = "432px";
            createNewElement()
            clicked = 1;
            isFill ++
            if(currentPlayer === 2){
                console.log(currentPlayer)
                board[3][0] = 1
            }else if(currentPlayer === 1){
                console.log(currentPlayer)
                board[3][0] = 2
            }
        }else if (isFill === 3){
            lastCreatedDiv.style.top = "449px";
            lastCreatedDiv.style.left = "432px";
            createNewElement()
            clicked = 1;
            isFill ++
            if(currentPlayer === 2){
                console.log(currentPlayer)
                board[2][0] = 1
            }else if(currentPlayer === 1){
                console.log(currentPlayer)
                board[2][0] = 2
            }
        }else if (isFill === 4){
            lastCreatedDiv.style.top = "385px";
            lastCreatedDiv.style.left = "432px";
            createNewElement()
            clicked = 1;
            isFill ++
            if(currentPlayer === 2){
                console.log(currentPlayer)
                board[1][0] = 1
            }else if(currentPlayer === 1){
                console.log(currentPlayer)
                board[1][0] = 2
            }
        }else if (isFill === 5){
            lastCreatedDiv.style.top = "320px";
            lastCreatedDiv.style.left = "432px";
            createNewElement()
            clicked = 1;
            isFill ++
            if(currentPlayer === 2){
                console.log(currentPlayer)
                board[0][0] = 1
            }else if(currentPlayer === 1){
                console.log(currentPlayer)
                board[0][0] = 2
            }
        }

}else if(numbers2.includes(positionString) == true ){
    if(isFill1 === 0){
        lastCreatedDiv.style.top = "645px";
        lastCreatedDiv.style.left = "497px"
        createNewElement()
        clicked = 1;
        isFill1 ++
        if(currentPlayer === 2){
            console.log(currentPlayer)
            board[5][1] = 1
        }else if(currentPlayer === 1){
            console.log(currentPlayer)
            board[5][1] = 2
        }
    } else if(isFill1 === 1){
        lastCreatedDiv.style.top = "578px";
        lastCreatedDiv.style.left = "497px"
        createNewElement()
        clicked = 1;
        isFill1 ++
        if(currentPlayer === 2){
            console.log(currentPlayer)
            board[4][1] = 1
        }else if(currentPlayer === 1){
            console.log(currentPlayer)
            board[4][1] = 2
        }
    }
    else if(isFill1 === 2){
        lastCreatedDiv.style.top = "515px";
        lastCreatedDiv.style.left = "497px"
        createNewElement()
        clicked = 1;
        isFill1 ++
        if(currentPlayer === 2){
            console.log(currentPlayer)
            board[3][1] = 1
        }else if(currentPlayer === 1){
            console.log(currentPlayer)
            board[3][1] = 2
        }
    } else if(isFill1 === 3){
        lastCreatedDiv.style.top = "449px";
        lastCreatedDiv.style.left = "497px"
        createNewElement()
        clicked = 1;
        isFill1 ++
        if(currentPlayer === 2){
            console.log(currentPlayer)
            board[2][1] = 1
        }else if(currentPlayer === 1){
            console.log(currentPlayer)
            board[2][1] = 2
        }
    }
    else if(isFill1 === 4){
        lastCreatedDiv.style.top = "385px";
        lastCreatedDiv.style.left = "497px"
        createNewElement()
        clicked = 1;
        isFill1 ++
        if(currentPlayer === 2){
            console.log(currentPlayer)
            board[1][1] = 1
        }else if(currentPlayer === 1){
            console.log(currentPlayer)
            board[1][1] = 2
        }
    } else if(isFill1 === 5){
        lastCreatedDiv.style.top = "320px";
        lastCreatedDiv.style.left = "497px"
        createNewElement()
        clicked = 1;
        isFill1 ++
        if(currentPlayer === 2){
            console.log(currentPlayer)
            board[0][1] = 1
        }else if(currentPlayer === 1){
            console.log(currentPlayer)
            board[0][1] = 2
        }
    }
    

}else if(numbers3.includes(positionString) == true){
    
         if(isFill2 === 0){
            lastCreatedDiv.style.top = "645px";
            lastCreatedDiv.style.left = "562px"
            createNewElement()
            clicked = 1;
            isFill2 ++
            if(currentPlayer === 2){
                console.log(currentPlayer)
                board[5][2] = 1
            }else if(currentPlayer === 1){
                console.log(currentPlayer)
                board[5][2] = 2
            }
        }else if (isFill2 === 1){
            lastCreatedDiv.style.top = "578px";
            lastCreatedDiv.style.left = "562px"
            createNewElement()
            clicked = 1;
            isFill2 ++
            if(currentPlayer === 2){
                console.log(currentPlayer)
                board[4][2] = 1
            }else if(currentPlayer === 1){
                console.log(currentPlayer)
                board[4][2] = 2
            }
        }else if (isFill2 === 2){
            lastCreatedDiv.style.top = "515px";
            lastCreatedDiv.style.left = "562px"
            createNewElement()
            clicked = 1;
            isFill2 ++
            if(currentPlayer === 2){
                console.log(currentPlayer)
                board[3][2] = 1
            }else if(currentPlayer === 1){
                console.log(currentPlayer)
                board[3][2] = 2
            }
        }else if (isFill2 === 3){
            lastCreatedDiv.style.top = "449px";
            lastCreatedDiv.style.left = "562px"
            createNewElement()
            clicked = 1;
            isFill2 ++
            if(currentPlayer === 2){
                console.log(currentPlayer)
                board[2][2] = 1
            }else if(currentPlayer === 1){
                console.log(currentPlayer)
                board[2][2] = 2
            }
        }else if (isFill2 === 4){
            lastCreatedDiv.style.top = "385px";
            lastCreatedDiv.style.left = "562px"
            createNewElement()
            clicked = 1;
            isFill2 ++
            if(currentPlayer === 2){
                console.log(currentPlayer)
                board[1][2] = 1
            }else if(currentPlayer === 1){
                console.log(currentPlayer)
                board[1][2] = 2
            }
        }else if (isFill2 === 5){
            lastCreatedDiv.style.top = "320px";
            lastCreatedDiv.style.left = "562px"
            createNewElement()
            clicked = 1;
            isFill2 ++
            if(currentPlayer === 2){
                console.log(currentPlayer)
                board[0][2] = 1
            }else if(currentPlayer === 1){
                console.log(currentPlayer)
                board[0][2] = 2
            }
        }


}else if(numbers4.includes(positionString) == true){
    
        if(isFill3 === 0){
            lastCreatedDiv.style.top = "645px";
            lastCreatedDiv.style.left = "627px"
            createNewElement()
            clicked = 1;
            isFill3 ++
            if(currentPlayer === 2){
                console.log(currentPlayer)
                board[5][3] = 1
            }else if(currentPlayer === 1){
                console.log(currentPlayer)
                board[5][3] = 2
            }
        }else if (isFill3 === 1){
            lastCreatedDiv.style.top = "578px";
            lastCreatedDiv.style.left = "627px"
            createNewElement()
            clicked = 1;
            isFill3 ++
            if(currentPlayer === 2){
                console.log(currentPlayer)
                board[4][3] = 1
            }else if(currentPlayer === 1){
                console.log(currentPlayer)
                board[4][3] = 2
            }
        }else if (isFill3 === 2){
            lastCreatedDiv.style.top = "515px";
            lastCreatedDiv.style.left = "627px"
            createNewElement()
            clicked = 1;
            isFill3 ++
            if(currentPlayer === 2){
                console.log(currentPlayer)
                board[3][3] = 1
            }else if(currentPlayer === 1){
                console.log(currentPlayer)
                board[3][3] = 2
            }
        }else if (isFill3 === 3){
            lastCreatedDiv.style.top = "449px";
            lastCreatedDiv.style.left = "627px"
            createNewElement()
            clicked = 1;
            isFill3 ++
            if(currentPlayer === 2){
                console.log(currentPlayer)
                board[2][3] = 1
            }else if(currentPlayer === 1){
                console.log(currentPlayer)
                board[2][3] = 2
            }
        }else if (isFill3 === 4){
            lastCreatedDiv.style.top = "385px";
            lastCreatedDiv.style.left = "627px"
            createNewElement()
            clicked = 1;
            isFill3 ++
            if(currentPlayer === 2){
                console.log(currentPlayer)
                board[1][3] = 1
            }else if(currentPlayer === 1){
                console.log(currentPlayer)
                board[1][3] = 2
            }
        }else if (isFill3 === 5){
            lastCreatedDiv.style.top = "320px";
            lastCreatedDiv.style.left = "627px"
            createNewElement()
            clicked = 1;
            isFill3 ++
            if(currentPlayer === 2){
                console.log(currentPlayer)
                board[0][3] = 1
            }else if(currentPlayer === 1){
                console.log(currentPlayer)
                board[0][3] = 2
            }
        }

}else if(numbers5.includes(positionString) == true){
  
        if(isFill4 === 0){
            lastCreatedDiv.style.top = "645px";
            lastCreatedDiv.style.left = "692px"
            createNewElement()
            clicked = 1;
            isFill4 ++
            if(currentPlayer === 2){
                console.log(currentPlayer)
                board[5][4] = 1
            }else if(currentPlayer === 1){
                console.log(currentPlayer)
                board[5][4] = 2
            }
        }else if (isFill4 === 1){
            lastCreatedDiv.style.top = "578px";
            lastCreatedDiv.style.left = "692px"
            createNewElement()
            clicked = 1;
            isFill4 ++
            if(currentPlayer === 2){
                console.log(currentPlayer)
                board[4][4] = 1
            }else if(currentPlayer === 1){
                console.log(currentPlayer)
                board[4][4] = 2
            }
        }else if (isFill4 === 2){
            lastCreatedDiv.style.top = "515px";
            lastCreatedDiv.style.left = "692px"
            createNewElement()
            clicked = 1;
            isFill4 ++
            if(currentPlayer === 2){
                console.log(currentPlayer)
                board[3][4] = 1
            }else if(currentPlayer === 1){
                console.log(currentPlayer)
                board[3][4] = 2
            }
        }else if (isFill4 === 3){
            lastCreatedDiv.style.top = "449px";
            lastCreatedDiv.style.left = "692px"
            createNewElement()
            clicked = 1;
            isFill4 ++
            if(currentPlayer === 2){
                console.log(currentPlayer)
                board[2][4] = 1
            }else if(currentPlayer === 1){
                console.log(currentPlayer)
                board[2][4] = 2
            }
        }else if (isFill4 === 4){
            lastCreatedDiv.style.top = "385px";
            lastCreatedDiv.style.left = "692px"
            createNewElement()
            clicked = 1;
            isFill4 ++
            if(currentPlayer === 2){
                console.log(currentPlayer)
                board[1][4] = 1
            }else if(currentPlayer === 1){
                console.log(currentPlayer)
                board[1][4] = 2
            }
        }else if (isFill4 === 5){
            lastCreatedDiv.style.top = "320px";
            lastCreatedDiv.style.left = "692px"
            createNewElement()
            clicked = 1;
            isFill4 ++
            if(currentPlayer === 2){
                console.log(currentPlayer)
                board[0][4] = 1
            }else if(currentPlayer === 1){
                console.log(currentPlayer)
                board[0][4] = 2
            }
        }

}else if(numbers6.includes(positionString) == true){
  
        if(isFill5 === 0){
            lastCreatedDiv.style.top = "645px";
            lastCreatedDiv.style.left = "758px"
            createNewElement()
            clicked = 1;
            isFill5 ++
            if(currentPlayer === 2){
                console.log(currentPlayer)
                board[5][5] = 1
            }else if(currentPlayer === 1){
                console.log(currentPlayer)
                board[5][5] = 2
            }
        }else if (isFill5 === 1){
            lastCreatedDiv.style.top = "578px";
            lastCreatedDiv.style.left = "758px"
            createNewElement()
            clicked = 1;
            isFill5 ++
            if(currentPlayer === 2){
                console.log(currentPlayer)
                board[4][5] = 1
            }else if(currentPlayer === 1){
                console.log(currentPlayer)
                board[4][5] = 2
            }
        }else if (isFill5 === 2){
            lastCreatedDiv.style.top = "515px";
            lastCreatedDiv.style.left = "758px"
            createNewElement()
            clicked = 1;
            isFill5 ++
            if(currentPlayer === 2){
                console.log(currentPlayer)
                board[3][5] = 1
            }else if(currentPlayer === 1){
                console.log(currentPlayer)
                board[3][5] = 2
            }
        }else if (isFill5 === 3){
            lastCreatedDiv.style.top = "449px";
            lastCreatedDiv.style.left = "758px"
            createNewElement()
            clicked = 1;
            isFill5 ++
            if(currentPlayer === 2){
                console.log(currentPlayer)
                board[2][5] = 1
            }else if(currentPlayer === 1){
                console.log(currentPlayer)
                board[2][5] = 2
            }
        }else if (isFill5 === 4){
            lastCreatedDiv.style.top = "385px";
            lastCreatedDiv.style.left = "758px"
            createNewElement()
            clicked = 1;
            isFill5 ++
            if(currentPlayer === 2){
                console.log(currentPlayer)
                board[1][5] = 1
            }else if(currentPlayer === 1){
                console.log(currentPlayer)
                board[1][5] = 2
            }
        }else if (isFill5 === 5){
            lastCreatedDiv.style.top = "320px";
            lastCreatedDiv.style.left = "758px"
            createNewElement()
            clicked = 1;
            isFill5 ++
            if(currentPlayer === 2){
                console.log(currentPlayer)
                board[0][5] = 1
            }else if(currentPlayer === 1){
                console.log(currentPlayer)
                board[0][5] = 2
            }
        }

}else if(numbers7.includes(positionString) == true){
   
        if(isFill6 === 0){
            lastCreatedDiv.style.top = "645px";
            lastCreatedDiv.style.left = "823px"
            createNewElement()
            clicked = 1;
            isFill6 ++
            if(currentPlayer === 2){
                console.log(currentPlayer)
                board[5][6] = 1
            }else if(currentPlayer === 1){
                console.log(currentPlayer)
                board[5][6] = 2
            }
        }else if (isFill6 === 1){
            lastCreatedDiv.style.top = "578px";
            lastCreatedDiv.style.left = "823px"
            createNewElement()
            clicked = 1;
            isFill6 ++
            if(currentPlayer === 2){
                console.log(currentPlayer)
                board[4][6] = 1
            }else if(currentPlayer === 1){
                console.log(currentPlayer)
                board[4][6] = 2
            }
        }else if (isFill6 === 2){
            lastCreatedDiv.style.top = "515px";
            lastCreatedDiv.style.left = "823px"
            createNewElement()
            clicked = 1;
            isFill6 ++
            if(currentPlayer === 2){
                console.log(currentPlayer)
                board[3][6] = 1
            }else if(currentPlayer === 1){
                console.log(currentPlayer)
                board[3][6] = 2
            }
        }else if (isFill6 === 3){
            lastCreatedDiv.style.top = "449px";
            lastCreatedDiv.style.left = "823px"
            createNewElement()
            clicked = 1;
            isFill6 ++
            if(currentPlayer === 2){
                console.log(currentPlayer)
                board[2][6] = 1
            }else if(currentPlayer === 1){
                console.log(currentPlayer)
                board[2][6] = 2
            }
        }else if (isFill6 === 4){
            lastCreatedDiv.style.top = "385px";
            lastCreatedDiv.style.left = "823px"
            createNewElement()
            clicked = 1;
            isFill6 ++
            if(currentPlayer === 2){
                console.log(currentPlayer)
                board[1][6] = 1
            }else if(currentPlayer === 1){
                console.log(currentPlayer)
                board[1][6] = 2
            }
        }else if (isFill6 === 5){
            lastCreatedDiv.style.top = "320px";
            lastCreatedDiv.style.left = "823px"
            createNewElement()
            clicked = 1;
            isFill6 ++
            if(currentPlayer === 2){
                console.log(currentPlayer)
                board[0][6] = 1
            }else if(currentPlayer === 1){
                console.log(currentPlayer)
                board[0][6] = 2
            }
        }

}

    }
                         
                                       
    if(clicked === 0){
        if(numbers1.includes(parsFullText) == true){
                ball.style.top = "645px";
                ball.style.left = "432px";
                createNewElement()
                clicked = 1;
                isFill ++
                board[5][0] = 1
        }else if(numbers2.includes(parsFullText) == true ){
                ball.style.top = "645px"
                ball.style.left = "497px"
                createNewElement()
                clicked = 1;
                isFill1 ++
                board[5][1] = 1
        }else if(numbers3.includes(parsFullText) == true){
                ball.style.top = "645px"
                ball.style.left = "562px"
                createNewElement()
                clicked = 1;
                isFill2 ++
                board[5][2] = 1
        }else if(numbers4.includes(parsFullText) == true){
                ball.style.top = "645px"
                ball.style.left = "627px"
                createNewElement()
                clicked = 1;
                isFill3 ++
                board[5][3] = 1
        }else if(numbers5.includes(parsFullText) == true){
                ball.style.top = "645px"
                ball.style.left = "692px"
                createNewElement()
                clicked = 1;
                isFill4 ++
                board[5][4] = 1
        }else if(numbers6.includes(parsFullText) == true){
                ball.style.top = "645px"
                ball.style.left = "758px"
                createNewElement()
                clicked = 1;
                isFill5 ++
                board[5][5] = 1
        }else if(numbers7.includes(parsFullText) == true){
                ball.style.top = "645px"
                ball.style.left = "823px"
                createNewElement()
                clicked = 1;
                isFill6 ++
                board[5][6] = 1
       }
    }
 }if(clicked > 1){
        clicked = 0
        }
       




function checkForWinner(board, player ,player2) {
    //check for Horizntal win
    for (let row = 0; row < 6; row++) {
        for (let col = 0; col < 4; col++) {
            if (board[row][col] === player &&
                board[row][col + 1] === player &&
                board[row][col + 2] === player &&
                board[row][col + 3] === player) {
                return true;
            }
            if (board[row][col] === player2 &&
                board[row][col + 1] === player2 &&
                board[row][col + 2] === player2 &&
                board[row][col + 3] === player2) {
                return true;
            }
        }
    }

    // Check for vertical win
    for (let row = 0; row < 3; row++) {
        for (let col = 0; col < 7; col++) {
            if (board[row][col] === player &&
                board[row + 1][col] === player &&
                board[row + 2][col] === player &&
                board[row + 3][col] === player) {
                return true;
            }
            if (board[row][col] === player2 &&
                board[row + 1][col] === player2 &&
                board[row + 2][col] === player2 &&
                board[row + 3][col] === player2) {
                return true;
            }
        }
    }

    // Check for diagonal win
    for (let row = 0; row < 3; row++) {
        for (let col = 0; col < 4; col++) {
            if (board[row][col] === player &&
                board[row + 1][col + 1] === player &&
                board[row + 2][col + 2] === player &&
                board[row + 3][col + 3] === player) {
                return true;
            }
            if (board[row][col + 3] === player &&
                board[row + 1][col + 2] === player &&
                board[row + 2][col + 1] === player &&
                board[row + 3][col] === player) {
                return true;
            }
            if (board[row][col] === player2 &&
                board[row + 1][col + 1] === player2 &&
                board[row + 2][col + 2] === player2 &&
                board[row + 3][col + 3] === player2) {
                return true;
            }
            if (board[row][col + 3] === player2 &&
                board[row + 1][col + 2] === player2 &&
                board[row + 2][col + 1] === player2 &&
                board[row + 3][col] === player2) {
                return true;
            }
        }
    }

    return false;
}



let board = [
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0]
];

winner_counter = 1

function winner(board){
    
    winner_counter ++

    if (checkForWinner(board, 1)) {
        console.log("Player 1 wins!");
        cardPoint.innerHTML ++
        console.log(cardPoint.innerHTML) 
        mycard.style.display = "block"
        background.style.display = "block"
        textCard.innerHTML = 'Congrats <span>' + name1 + '</span>, you won!';
        for (let i = 0; i < board.length; i++) {
            for (let j = 0; j < board[i].length; j++) {
                board[i][j] = 0;
                
            }
        }
       
    }


   
    else if(checkForWinner(board, 2)){
        console.log("Player 2 wins!");
        cardPoint2.innerHTML ++
        console.log(cardPoint.innerHTML) 
        mycard.style.display = "block"
        background.style.display = "block"
        textCard.innerHTML = "Congrats <span>" + name2 + "</span>, you won!";
        for (let i = 0; i < board.length; i++) {
            for (let j = 0; j < board[i].length; j++) {
                board[i][j] = 0;
            }
        }
        
    } else {
        console.log("No winner yet.");
    }
}
function animationSlide(){
    mycard.style.display = "none"
    background.style.display = "none"
   
}






