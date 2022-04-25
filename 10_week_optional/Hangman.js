import randomWords from "./randomWords.js"
export class Hangman { 
    constructor() {
        let randomNumber = Math.floor(Math.random()*randomWords.length);
        let randomWord = randomWords[randomNumber];
        this.word = randomWord;
        this.hidedWord = this.hideWord();
    }
    hideWord() {
        let hidedWord = [];
        let myWord = Array.from(this.word);
        myWord.forEach(character => {
            hidedWord.push("_ ");
        });
        return hidedWord
    }
    guessChar(input){
        let myWord = Array.from(this.word);
        for(let i=0;i<myWord.length;i++){
            if(myWord[i]===input){
                this.hidedWord[i]=input;
            }
        }
    }
}
