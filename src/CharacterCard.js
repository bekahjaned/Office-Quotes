import React from 'react';


const CharacterCard = (props) => {
  return (
    <div className="ui medium card">
      <img className="ui medium rounded image"
        src={props.image} alt="character"
      />
      <div className="content">
        <a href="/" className="header">
          {props.character}
        </a>
        <div className="description">
          {props.title}
        </div>
      </div>
    </div>
  );
};

export default CharacterCard;
