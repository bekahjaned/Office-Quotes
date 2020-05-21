import React from 'react';
import ReactDOM from 'react-dom';

import CharacterCard from './CharacterCard';
import RateButtons from './RateButtons'


import Michael from './images/MichaelScott.png';
import Dwight from './images/DwightSchrute.png';
import Pam from './images/PamBeesly.png';
import Jim from './images/JimHalpert.png';
import Oscar from './images/OscarMartinez.jpg';
import Angela from './images/AngelaMartin.jpg';


const App = () => {
  return (
    <div className="ui three cards">
    <RateButtons>
      <CharacterCard
        character="Michael Scott"
        title="Regional Manager"
        image={Michael}
      />
    </RateButtons>
      <CharacterCard
        character="Dwight Schrute"
        title="Salesman"
        image={Dwight}
      />
      <CharacterCard
        character="Pam Beesly"
        title="Secretary"
        image={Pam}
      />
      <CharacterCard
        character="Jim Halpert"
        title="Salesman"
        image={Jim}
      />
      <CharacterCard
        character="Oscar Martinez"
        title="Accountant"
        image={Oscar}
      />
      <CharacterCard
        character="Angela Martin"
        title="Accountant"
        image={Angela}
      />
    </div>
  );
};


ReactDOM.render(
  <App />,
  document.querySelector('#root')
);
