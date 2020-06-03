import React from 'react';

class CharacterCard extends React.Component {
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
    </div>
    )
  }
}


export default CharacterCard;
