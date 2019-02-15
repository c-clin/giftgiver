import React, { Component } from 'react';
import { Button } from 'react-bootstrap';

class App extends Component {
  state = {
    gifts: []
  };

  addGift = () => {
    // his way of finding the max id
    // const ids = this.state.gifts.map(gift => gift.id);
    // const max_id = ids.length > 0 ? Math.max(...ids) : 0;

    const { gifts } = this.state;
    gifts.push({ id: gifts.length + 1 });
    this.setState({
      gifts
    });
  };

  renderGifts = () => {
    return this.state.gifts.map(gift => {
      return <div key={gift.id}>{gift.id}</div>;
    });
  };

  render() {
    return (
      <div>
        <h2>Gift Giver</h2>

        <div className="gift-list">{this.renderGifts()}</div>

        <Button className="btn-add" onClick={this.addGift}>
          Add Gift
        </Button>
      </div>
    );
  }
}

export default App;
