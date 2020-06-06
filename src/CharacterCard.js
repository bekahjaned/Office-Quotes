import React from 'react';
// import QuoteButton from './QuoteButton'
import quotes from './quotes.json';

class CharacterCard extends React.Component {
  constructor(){
    super();

    this.state = { display: "" }
  }
  
  getQuote(name){
    const getQuotes = quotes[name];
    const numberOfQuotes = getQuotes.length
    if(getQuotes !== undefined){
      const num = Math.floor(Math.random() * numberOfQuotes);
      const quote = getQuotes[num];
      this.setState({ display: quote });
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
        <div className="meta">
          {this.props.character.title}
        </div>
        <div className="description">
          { this.state.display }
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
