const scorecard= JSON.parse(localStorage.getItem('Score')) || {Win:0, Losses:0, Tie:0};  //here we use default operator so that after resetting browser by default it will get values 0, instead of null.

        updateScoreElement();

        function playGame(playerMove){
        const computerChoice = pickComputerMove();
        let result='';
            if(playerMove==='rock'){
            if(computerChoice==='rock'){
                result='Tie!';
            } else if(computerChoice==='paper'){
                result='You Loose';
            } else if(computerChoice==='scissors'){
               result='You Win'; 
            }

            } else if(playerMove==='paper'){
                if(computerChoice==='rock'){
                    result='You Win';
                } else if(computerChoice==='paper'){
                    result='Tie!';
                } else if(computerChoice==='scissors'){
                    result='You Loose';
                }

            } else if(playerMove==='scissors'){
                if(computerChoice==='rock'){
                    result='You Loose';
                } else if(computerChoice==='paper'){
                    result='You Win';
                } else if(computerChoice==='scissors'){
                    result='Tie!';
                }
            }

            if(result==='You Win'){
                scorecard.Win+=1;
            } else if(result==='You Loose'){
                scorecard.Losses+=1;
            } else if(result==='Tie!'){
                scorecard.Tie+=1;
            }

            document.querySelector('.js-result').innerHTML= result;

            document.querySelector('.js-moves').innerHTML=`you <img src='10-image/${playerMove}-emoji.png' class='move-pic'>  computer <img src='10-image/${computerChoice}-emoji.png' class='move-pic'>`;

            localStorage.setItem('Score', JSON.stringify(scorecard));

            updateScoreElement();
            
        }

        function updateScoreElement(){
            document.querySelector('.js-score').innerHTML=`Win: ${scorecard.Win}, Losses: ${scorecard.Losses}, Tie: ${scorecard.Tie}`;
        }

        function pickComputerMove() {
            const randomnumb = Math.random();
            let computerChoice = '';
            if (randomnumb < 1 / 3) {
                computerChoice = 'rock';
            } else if (randomnumb < 2 / 3) {
                computerChoice = 'paper';
            } else if (randomnumb <1) {
                computerChoice = 'scissors';
            }
            return computerChoice;
        }
