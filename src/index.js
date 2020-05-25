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

const createCharacters = () => {
  const characters = [
    { name: "Michael Scott", title: "Regional Manager", image: Michael },
    { name: "Dwight Schrute", title: "Assistant Regional Manager", image: Dwight },
    { name: "Pam Beesly", title: "Secretary", image: Pam },
    { name: "Jim Halpert", title: "Salesman", image: Jim },
    { name: "Oscar Martinez", title: "Accountant", image: Oscar },
    { name: "Angela Martin", title: "Accountant", image: Angela }
  ];

  for(let character of characters) {
    const { name, title, image } = character;
    return character;
  };
}

const App = () => {
  return (
    <div>
        <CharacterCard
          name={createCharacters().name}
          title={createCharacters().title}
          image={createCharacters().image}
        />
        <RateButtons />
    </div>
  );
};


ReactDOM.render(
  <App />,
  document.querySelector('#root')
);
