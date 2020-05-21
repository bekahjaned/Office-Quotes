import React from 'react';

const RateButtons = (props) => {
  console.log(props);
  return (
    <div className="card">
      <div className="extra content">
        <div className="ui two buttons">
          <div className="ui basic green button">Cool</div>
          <div className="ui basic red button">Gruel</div>
        </div>
      </div>
    </div>
  );
};

export default RateButtons;
