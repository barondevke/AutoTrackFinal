import React from 'react';

class SellPage extends React.Component {
  render() {
    const {
      make,
      model,
      year,
      price,
      location,
      kmsDriven,
      transmission,
      power,
      fuel,
      driveType,
      addToCarFinder
    } = this.props;

    return (
      <div>
        <h1>Sell Your Car</h1>
        <div>
          <h2>Car Information:</h2>
          <p>
            Make: {make}<br />
            Model: {model}<br />
            Year: {year}<br />
            Price: ${price}<br />
            Location: {location}<br />
            Kilometers Driven: {kmsDriven}<br />
            Transmission: {transmission}<br />
            Power: {power} hp<br />
            Fuel: {fuel}<br />
            Drive Type: {driveType}
          </p>
        </div>
        <div>
          <button onClick={addToCarFinder}>Add to Car Finder</button>
        </div>
        {/* Other sell page components */}
      </div>
    );
  }
}

export default SellPage;
