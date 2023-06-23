let player = 0 , computer = 0
        function getComputerChoice(){
            let choiceArray = ["rock","paper","scissor"];
            let random = Math.floor(Math.random() * choiceArray.length);
            return choiceArray[random];
        }
        /*function getPlayerChoice(word){
            let selection = word.toLowerCase()
              return selection;
            }*/
        function checkWhoWon(selection1, computerSelection){
            if(selection1===null){
                return "canceled"
            }
            if(selection1===computerSelection){
                return "tie , you both picked the same thing"
            }
            if(selection1==="scissor" && computerSelection==="rock" || selection1 === "rock" && computerSelection ==="paper" || selection1 === "paper" && computerSelection==="scissor"){
                computer++
                return "you lose "+computerSelection+" beats "+selection1
            }else{
                player++
                return "you won "+selection1+" beats "+ computerSelection
            }
        }
        
        const div = document.querySelector('#score-text');
        div.setAttribute('style', "display:flex; flex-direction: column;")
        const button = document.querySelectorAll('.button');
        button.forEach((button)=>{
            button.addEventListener('click', () =>{
                game(button.id);
            })
        });
        function game(selection){     
            
            if(player <= 4 && computer <=4){
                div.textContent=(checkWhoWon(selection,getComputerChoice()));
            }else{
                printResults();
                //console.log("Player wins: "+player+"\n"+"Computer wins: "+computer);
                player = computer = 0;
            }
        }
        function printResults(){
            const p = document.createElement('p');
            p.textContent= "Player wins: "+player+"\n"+"Computer wins: "+computer;
            div.appendChild(p);
            
            

    }
        
        