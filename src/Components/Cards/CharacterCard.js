import React from 'react';
import quotes from '../../data/quotes.json';
import QuoteButton from '../Buttons/QuoteButton';


class CharacterCard extends React.Component {
  constructor(){
    super();

    this.state = { display: "" }
  }
  
  getQuote(name){
    const getQuotes = quotes[name];
    const numberOfQuotes = getQuotes.length
      if(!!getQuotes){
        const num = Math.floor(Math.random() * numberOfQuotes);
        const quote = getQuotes[num];
        this.setState({display: quote});
      } else {
        alert("Hmmm... I can't find any quotes.")
    }
  }

    
  render() {  

    const {
      character: { name }
    } = this.props;

    return (
      <div className="card">
        <img className="character"
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
        <QuoteButton 
          getQuote={() => this.getQuote(name)}
          buttonText="Beer Me That Quote"
        />
    </div>
    )
  }
}


export default CharacterCard;
