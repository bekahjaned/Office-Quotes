import React from 'react';
// import QuoteButton from './QuoteButton'
import quotes from './quotes.json';

class CharacterCard extends React.Component {

  getQuote(name){
    const getQuotes = quotes[name];
    const numberOfQuotes = getQuotes.length
    if(getQuotes !== undefined){
      const num = Math.floor(Math.random() * numberOfQuotes + 1);
      const quote = getQuotes[num];
      alert(quote);
      
    }
  }

  render() {  

    return (
      <div className="ui card">
      <img className="ui medium rounded image"
        src={this.props.character.image} alt="character"
      />
      <div className="content">
        <a href="/" className="header">
          {this.props.character.name}
        </a>
        <div className="description">
          {this.props.character.title}
        </div>
      </div>
      <button className="ui teal button" onClick={() => this.getQuote(this.props.character.name)}>
        Beer Me That Quote
      </button>
    </div>
    )
  }
}


export default CharacterCard;
