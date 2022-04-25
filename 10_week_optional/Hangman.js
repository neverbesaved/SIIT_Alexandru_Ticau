import randomWords from "./randomWords.js"
export class Hangman { 
    constructor() {
        let randomNumber = Math.floor(Math.random()*randomWords.length);
        let randomWord = randomWords[randomNumber];
        this.word = randomWord;
        this.hiddenWord = this.hideWord();
    }
    hideWord() {
        let hiddenWord = [];
        let myWord = Array.from(this.word);
        myWord.forEach(character => {
            hiddenWord.push("_ ");
        });
        return hiddenWord
    }
    guessChar(input){
        let wrongAnswer = true;
        let myWord = Array.from(this.word);
        for(let i=0;i<myWord.length;i++){
            if(myWord[i]===input){
                this.hiddenWord[i]=input;
                wrongAnswer = false;
            }
        }
        return wrongAnswer;
    }
}
