import React, { useState } from 'react';

const AddIndicatorForm = ({ addIndicator }) => {
  const [indicator, setIndicator] = useState('');
  const [tickers, setTickers] = useState('');
  const [criteria, setCriteria] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    if (indicator && criteria && tickers) {
      addIndicator({ 
        indicator, 
        tickers,
        criteria: parseFloat(criteria)
      });
    }
    if (indicator && criteria) { // Only require indicator and criteria
      addIndicator({ 
        indicator, 
        criteria: parseFloat(criteria)
      });
    }
    setIndicator(''); // Clear the form fields
    setTickers('');
    setCriteria('');
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* Input for indicator */}
      <input
        type="text"
        value={indicator}
        onChange={(e) => setIndicator(e.target.value)}
        placeholder="Enter indicator name (only beta available)"
        required
      />

      {/* Input for criteria */}
      <input
        type="text"
        value={criteria}
        onChange={(e) => setCriteria(e.target.value)}
        placeholder="Enter criteria"
        required
      />

      <button type="submit">Add Indicator</button>
    </form>
  );
};

export default AddIndicatorForm;
