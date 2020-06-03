import React from 'react';

const ButtonCard = (props) => {
  return (
    <div className="ui card">
      <div className="content">{props.children}</div>
      <div className="extra content">
        <div className="ui two buttons">
          <div className="ui basic green button">Cool</div>
          <div className="ui basic red button">Gruel</div>
        </div>
      </div>
    </div>
  );
};

export default ButtonCard;
