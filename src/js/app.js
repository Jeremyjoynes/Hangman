document.getElementById('hmhead').style.display = 'none';
document.getElementById('larm').style.display = 'none';
document.getElementById('tor').style.display = 'none';
document.getElementById('rarm').style.display = 'none';
document.getElementById('legs').style.display = 'none';
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
    .on('click', function (event) {
    $.ajax({
        accepts: 'text/json',
        method: 'Get',
        url: 'src/data/words.json'
    })
        .done(function (data) {
        var words = data;
        var $elm = $('#result');
        // console.log(words);
        var total = 0;
        var guesses = 0;
        var num = Math.floor(Math.random() * 50) + 1;
        var anstest = words[num];
        var answer = words[num].split('');
        console.log(answer);
        var holder = [];
        for (var i = 0; i < answer.length; i++) {
            holder[i] = " _ ";
        }
        holder.join('');
        var _loop_1 = function () {
            var correct = false;
            var guess = prompt("Enter a letter: \n\n                     " + holder + "\n attempts: " + total + " out of 6");
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
            }); // ends answer.fforeach
            if (correct == false) {
                console.log(total);
                total++;
                if (total == 1) {
                    //show head of hangman
                    document.getElementById('hmhead').style.display = '';
                }
                else if (total == 2) {
                    //show L arm
                    document.getElementById('larm').style.display = '';
                }
                else if (total == 3) {
                    //show body
                    document.getElementById('tor').style.display = '';
                }
                else if (total == 4) {
                    //show R arm
                    document.getElementById('rarm').style.display = '';
                }
                else if (total == 5) {
                }
                else if (total == 6) {
                    //show R leg
                    document.getElementById('legs').style.display = '';
                }
            } //end nested if's
            var holdertest = holder.join('');
            console.log(holdertest);
            console.log(answer);
            //check to see if the game is over
            if (holdertest == anstest) {
                return "break";
            }
        };
        while (total < 6) {
            var state_1 = _loop_1();
            if (state_1 === "break")
                break;
        } // ends while
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
            $elm.append("<li>" + word + "</li>");
        });
    });
});
//# sourceMappingURL=app.js.map