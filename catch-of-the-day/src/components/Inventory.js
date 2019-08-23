import React from 'react';
import AddFish from './AddFishForm';

class Inventory extends React.Component {
  render() {
    return (
      <div className="inventory">
        <h2>Inventory</h2>
        <AddFish />
      </div>
    );
  }
}

export default Inventory;
