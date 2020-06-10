import React from 'react';
import quotes from './quotes.json';

const QuoteButton = (props) => {
  // button  function
  // will return a quote that is said by the character who's card was clicked
  function getQuote() {
     quotes.sort(() => Math.random() - 0.5)
     quotes.map((quote) => {
       if(quote.author === this.props.character.name){
         alert(quote.quote) 
       }
     })
  }


  return (
    <button className="ui teal button" onClick={getQuote}>
      Beer Me That Quote
    </button>
  );
};

export default QuoteButton;
