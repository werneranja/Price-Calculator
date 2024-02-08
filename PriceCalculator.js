import React, { useState } from 'react';
import './PriceCalculator.css';

function PriceCalculator() {
  const [quantity, setQuantity] = useState(1);
  const [pricePerItem, setPricePerItem] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);

  const handleCalculate = () => {
    setTotalPrice(quantity * pricePerItem);
  };

  return (
    <div>
      <h2>Price Calculator</h2>
      <div>
        <label>Quantity:</label>
        <input
          type="number"
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
        />
      </div>
      <div>
        <label>Price per item:</label>
        <input
          type="number"
          value={pricePerItem}
          onChange={(e) => setPricePerItem(e.target.value)}
        />
      </div>
      <button onClick={handleCalculate}>Calculate</button>
      <div>
        <label>Total Price: </label>
        <span>${totalPrice}</span>
      </div>
    </div>
  );
}

export default PriceCalculator;
