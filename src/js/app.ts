// class Hangman {
//     word: string;
//     // answer: string;
//     // guess: string;

//     constructor(word: string) {
//         this.word = word;
//         // this.answer = answer;
//         // this.guess = guess;
//     }
//     //gameplay get a random word from the list of 50.
//     game = (): void => {
//         let total: number = 6;
//         let guesses: number = 0;
//         let num = Math.floor(Math.random() * 50) + 1;
//     }


// //prompts
// prompts = (): void => {

//     let ans = window.prompt(`Guess a letter`);
//     if (total === 0) {
//         alert('You lose try again next time!');
//     }
// }

//}//end class

$('#data')
    .on('click', function (event: JQueryEventObject) {
        $.ajax({
            accepts: 'text/json',
            method: 'Get',
            url: 'src/data/words.json'
        })
            .done(function (data) {
                let words = <string[]>data;
                let $elm = $('#result');
                // console.log(words);


                let total: number = 0;

                let guesses: number = 0;
                let num = Math.floor(Math.random() * 50) + 1;
                let anstest = words[num];
                let answer = words[num].split('');

                console.log(answer);
                let holder: string[] = [];
                for (let i = 0; i < answer.length; i++) {
                    holder[i] = " _ ";
                }

                while (total < 6) {
                    let correct = false;
                     let guess = window.prompt(`Enter a letter: \n
                     ${holder}\n attempts: ${total} out of 6`);
                    // let guess = (<HTMLInputElement>document.getElementById('ansGiven')).value;

                    // document.getElementById('atempt').addEventListener('click', function(event) {
                    //     event.preventDefault();

                    //     document.getElementById('output').innerHTML = holder.toString();
                    //     document.getElementById('output2').innerHTML = "chances: " + total + " out of 6";

                    // });



                    // if (guess == "exit") {
                    //     break;
                    // }

                    answer.forEach(function attempt(answer, index) {

                        answer = answer.toLowerCase();
                        if (guess == answer) {
                           // console.log(guess, index);
                            holder[index] = guess;
                            correct = true;
                        }

                    });// ends answer.fforeach
               
                    if (correct == false) {
                        console.log(total);
                        total++;
                    }
                    let holdertest = holder.join('');
                    console.log(holdertest);
                    console.log(answer);
                    //check to see if the game is over
                    if (holdertest == anstest) {
                       // console.log('you win!');
                        break;
                    }


                }// ends while

                console.log(total);
                if (total < 6) {
                    console.log('you win!');
                    alert('you win!');
                }
                else {
                    console.log('you Lose!');
                    alert('you lose!');
                }
                //reset score
                total = 0;
                guesses = 0;
                // Clear html content
                $elm.html('');

            //prints out all the words in words.json
                words.forEach(function (word) {
                    $elm.append(`<li>${word}</li>`);
                });
            });
    });

