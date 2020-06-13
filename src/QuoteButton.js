import React from 'react';

class QuoteButton extends React.Component {

  render() {
    return (
      <button onClick={this.props.getQuote}>
        {this.props.buttonText}
      </button>
    )
  }
}

export default QuoteButton
