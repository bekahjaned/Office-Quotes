import React from 'react';
import quotes from './quotes.json';

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
      this.setState({ display: quote });
    }
    else {
      alert("There are no quotes")
    }
  }

  render() {  

    const {
      character: { name }
    } = this.props;

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
      <button className="ui teal button" onClick={() => this.getQuote(name)}>
        Beer Me That Quote
      </button>
    </div>
    )
  }
}


export default CharacterCard;
