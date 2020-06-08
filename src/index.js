import React from 'react';
import ReactDOM from 'react-dom';

import CharacterCard from './CharacterCard';

import Michael from './images/MichaelScott.png';
import Dwight from './images/DwightSchrute.png';
import Pam from './images/PamBeesly.png';
import Jim from './images/JimHalpert.png';
import Oscar from './images/OscarMartinez.jpg';
import Angela from './images/AngelaMartin.jpg';
import Kevin from './images/KevinMalone.png';
import Meredith from './images/MeredithPalmer.jpg';
import Creed from './images/CreedBratton.jpg';
import Stanley from './images/StanleyHudson.jpg';
import Kelly from './images/KellyKapoor.jpg';
import Phyllis from './images/PhyllisVance.jpg';


class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = { characters: [
        { name: "Michael Scott", title: "Regional Manager", image: Michael },
        { name: "Dwight Schrute", title: "Assistant to the Regional Manager", image: Dwight },
        { name: "Pam Beesly", title: "Receptionist", image: Pam },
        { name: "Jim Halpert", title: "Sales Representative", image: Jim },
        { name: "Oscar Martinez", title: "Accountant", image: Oscar },
        { name: "Angela Martin", title: "Accountant", image: Angela },
        { name: "Kevin Malone", title: "Accountant", image: Kevin },
        { name: "Meredith Palmer", title: "Supplier Relations", image: Meredith },
        { name: "Creed Bratton", title: "Quality Assurance Director", image: Creed },
        { name: "Stanley Hudson", title: "Sales Representative", image: Stanley },
        { name: "Kelly Kapoor", title: "Customer Service Representative", image: Kelly },
        { name: "Phyllis Lapin-Vance", title: "Sales Representative", image: Phyllis }
      ] 
    };
  }
  
  render () {
    return (
      <div className="ui three cards">
        {this.state.characters.map((character) => {
          return <CharacterCard 
            character={character}
            key={character.name}
          />
        })}
      </div>
    )
  }
}

ReactDOM.render(
  <App />,
  document.querySelector('#root')
);


