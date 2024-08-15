let userScore=0;
let compScore=0;


const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");

const userScorePara=document.querySelector("#user-score");
const compScorePara=document.querySelector("#comp-score");


const getCompChoice=()=>{
    const options=["rock","peper","scissor"];
    const rasdInx=Math.floor(Math.random() *3);
    return options[rasdInx];
}

const  drawGame=()=>{
    msg.innerText="Game was Draw. Play again";
    msg.style.backgroundColor=" rgb(43, 16, 221)";

}

const showWinner=(userWin,userChoice,compChice)=>{
   if(userWin){
    userScore ++;
    userScorePara.innerText=userScore;
    msg.innerText=`You win ! Your ${userChoice} beats ${compChice}`;
    msg.style.backgroundColor="green"
   }else{
    compScore ++;
    compScorePara.innerText=compScore;
    msg.innerText=`You lost. ${compChice} beats your ${userChoice} `;
    msg.style.backgroundColor="red"
   }
}

const playGame=(userChoice)=>{
    const compChice=getCompChoice();
     

    if(userChoice===compChice){
        //Dra game
        drawGame();
    }else{
        let userWin=true;
        if(userChoice==="rock"){
            //scissor ,peper
            userWin=compChice==="paper"?false:true;
        }else if(userChoice==="paper"){
            //rock  ,scissor
            userWin=compChice=="scissor"? false:true;   
        }else{
            //rock peper
            userWin=compChice=="rock"? false:true;   
        }
        showWinner(userWin ,userChoice,compChice);
    }
}



choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
    const userChoice=choice.getAttribute("id");
   
    playGame(userChoice);
    })
})
