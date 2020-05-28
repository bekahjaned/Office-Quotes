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
// import quotes from './quotes.js';


class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = { char: [
      { name: "Michael Scott", title: "Regional Manager", image: Michael },
      { name: "Dwight Schrute", title: "Assistant Regional Manager", image: Dwight },
      { name: "Pam Beesly", title: "Secretary", image: Pam },
      { name: "Jim Halpert", title: "Salesman", image: Jim },
      { name: "Oscar Martinez", title: "Accountant", image: Oscar },
      { name: "Angela Martin", title: "Accountant", image: Angela }
    ] };

  }
  
  render () {
    console.log(this.state)

    return (
      
      <div>
        {/* const makeCharacter = characters.map(character => { */}
          <RateButtons>
            <CharacterCard
              name={ this.state.char[0].name }
              title={ this.state.char[0].title }
              image={ this.state.char[0].image }
            />
          </RateButtons>
        {/* // }); */}
      </div>
    )
  }
}

ReactDOM.render(
  <App />,
  document.querySelector('#root')
);