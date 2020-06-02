import React from 'react';
// import QuoteButton from './QuoteButton'
import quotes from './quotes.json';

class CharacterCard extends React.Component {
  render() {

    function getQuote() {
      quotes.sort(() => Math.random() - 0.5)
      quotes.map((quote) => {
        if(quote.author === "Michael Scott"){
          alert(quote.quote) 
        }
      })
    }

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
      <button className="ui teal button" onClick={getQuote}>
        Beer Me That Quote
      </button>
    </div>
    )
  }
}


export default CharacterCard;
