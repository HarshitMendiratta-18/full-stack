let score= 
            JSON.parse(localStorage.getItem('score'));

            if(score=== null){
              score={
                wins:0,
                losses:0,
                ties:0
              };
            }

            updateScoreElement();
            let isAutoPlaying=false;
            let intervalId;

            
            function autoPlay(){
              if(!isAutoPlaying){
                //using arrow function
                intervalId=setInterval( () =>{
                const playerMove= pickComputerMove();
                playGame(playerMove);
              },1000);
              isAutoPlaying=true;
              document.querySelector('.js-autoplay')
              .innerHTML = 'Stop Play';
              }
              else{
                clearInterval(intervalId);
                isAutoPlaying=false;
                document.querySelector('.js-autoplay')
              .innerHTML = 'Auto Play';
              }
            }

       /*function autoPlay() {
          if (!isAutoPlaying) {
            intervalId = setInterval(() => {
              const playerMove = pickComputerMove();
              playGame(playerMove);
            }, 1000);
            isAutoPlaying = true;
            document.querySelector('.js-autoplay')
              .innerHTML = 'Stop Play';
  } else {
    clearInterval(intervalId);
    isAutoPlaying = false;
    document.querySelector('.js-autoplay')
      .innerHTML = 'Auto Play';
  }
}*/

  function resetScore() {
  score.wins = 0;
  score.losses = 0;
  score.ties = 0;
  localStorage.removeItem('score');
  updateScoreElement();
}

// Add an event listener for the reset score
// button using .addEventListener
document.querySelector('.js-reset-score-button')
  .addEventListener('click', () => {
    resetScore();
  });

            document.querySelector('.js-rock-button').addEventListener('click',() =>{
              playGame('rock');
            });

            document.querySelector('.js-paper-button').addEventListener('click',() =>{
              playGame('paper');
            });

            document.querySelector('.js-scissor-button').addEventListener('click',() =>{
              playGame('scissor');
            });

            document.body.addEventListener('keydown',(event) =>{
              if(event.key==='r'){
                playGame('rock');
              }
              else if(event.key==='p'){
                playGame('paper');
              }
              else if(event.key==='s'){
                playGame('scissor');
              }
              else if(event.key==='a'){
                autoPlay();
              }
              else if(event.key==='Backspace'){
                resetScore();
              }
            });


          function playGame(playerMove){
            const computerMove=pickComputerMove();

        let result='';

        if(playerMove=== 'scissor'){
          if(computerMove=== 'rock'){
          result='Lose';
        }
        else if(computerMove==='paper'){
          result='Win';
        }
        else if(computerMove==='scissor'){
          result='Tie';
        }
          }
          else if(playerMove==='paper'){
            if(computerMove=== 'rock'){
          result='Win';
        }
        else if(computerMove==='paper'){
          result='Tie';
        }
        else if(computerMove==='scissor'){
          result='Lose';
        }
      }
      else if(playerMove==='rock'){
        if(computerMove=== 'rock'){
        result='Tie';
      }
      else if(computerMove==='paper'){
        result='Lose';
      }
      else if(computerMove==='scissor'){
        result='Win';
      }
      }
      if(result==='Win'){
        score.wins+=1;
      }
      else if(result==='Lose'){
        score.losses+=1;
      }
      else if(result==='Tie'){
        score.ties+=1;
      }

      localStorage.setItem('score',JSON.stringify(score));

            updateScoreElement();

            document.querySelector('.js-result').innerHTML=`You ${result}`;
            document.querySelector('.js-moves').innerHTML=`You <img src="${playerMove.toLowerCase()}-emoji.png" alt="" class="move-icon"> <img src="${computerMove.toLowerCase()}-emoji.png" alt="" class="move-icon"> Computer`;
         
        }
        function updateScoreElement(){
          document.querySelector('.js-score')
         .innerHTML=`Wins:${score.wins},Losses:${score.losses},Ties:${score.ties}`;
        }
        
          function pickComputerMove(){
            const randomNumber=Math.random();
            let computerMove='';
        if(randomNumber>=0 && randomNumber<1/3){
          computerMove='rock';
        } else if(randomNumber>=1/3 && randomNumber<2/3){
          computerMove='paper';
        }
        else if(randomNumber>=2/3 && randomNumber<1){
          computerMove='scissor';
        }
        return computerMove;
          }