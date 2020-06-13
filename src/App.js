import React, { Component } from 'react'
import './App.css'
import Letter from './Letter'
import MaskedWord from './MaskedWord'


const ALPHABET = 'A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z'
const PHRASE = "IMPLEMENTATION"

class App extends Component {

  state = {
    reload: "",
    usedLetters: [],
    currentLetter: [],
    phrase: this.arrayPhrases(),
    alphabet: this.generateAlphabet(),
    computeDisplay: this.computeDisplay(),

  }

  computeDisplayWillMount() {
    this.computeDisplay = this.computeDisplay.bind(this);
  }

  computeDisplay(test) {
    const phrase = PHRASE
    const usedLetters  = []
    Array.prototype.push.apply(usedLetters,test)
    var result = phrase.replace(/\w/g,    (letter) => (usedLetters.includes(letter) ? letter : '_')  )
    if(test){
      this.setState({ reload: result })
    }
    return result
  }

  generateAlphabet() {
    const result = []
    const alphabet_array = ALPHABET.split(",")
    const size = alphabet_array.length
    while (result.length < size) {
      const letter = alphabet_array.shift()
      result.push(letter)
    }
    return result
  }

  arrayPhrases() {
    const resultLetters = []
    const Letters_array = PHRASE.split("")
    while (resultLetters.length < PHRASE.length) {
      const letter = Letters_array.shift()
      resultLetters.push(letter)
    }
    return resultLetters
  }

  handleLetterClick = letter => {
    const {  usedLetters } = this.state
    const test = usedLetters
    test.push(letter)
    this.setState({ currentLetter: [letter] })
    this.setState({ usedLetters: test })
    this.computeDisplay(test)

    return    
  }

  getFeedbackForLetter(letter){
    const { usedLetters } = this.state
    const letterMatched = usedLetters.includes(letter)
    if ( letterMatched ) {
      return 'tested'      
    }
    return 'untested'
  }

 

    
  render() {
    const { alphabet, computeDisplay, reload } = this.state
    const won = reload === '' || reload.includes('_') 
    return (
      <div className="pendu">
          {
            won
            ?
            alphabet.map((letter, index) => (
              <Letter
              letter={letter}  
              feedback={this.getFeedbackForLetter(letter)} 
              index={index}
              key={index}    
              onClick={this.handleLetterClick}
              />
              ))
              : 
              <button onClick={() => window.location.reload(false)}>Click to reload!</button>
          }
          <MaskedWord 
            computeDisplay = { computeDisplay } 
            reload = {reload}
          />
      </div>     
    )
  }
}
export default App;
