import React, { useState } from 'react';
import api from '../../services/api.js';
import FetchIndicatorForm from './AddIndicatorValue.jsx';

const FetchResults = () => {
  const [results, setResults] = useState(null);

  const fetchIndicatorData = async (formData) => {
    try {
      const response = await api.get('/allThatMatchCriteria', { params: formData });
      setResults(response.data); // Update results state with API response
    } catch (error) {
      console.error('Error fetching indicator data:', error);
    }
  };

  return (
    <div>
      <h2>Fetch Indicator Data</h2>
      <FetchIndicatorForm addIndicator={fetchIndicatorData} />
      {results && (
        <div>
          <h3>Results</h3>
          <pre>{JSON.stringify(results, null, 2)}</pre>
        </div>
      )}
    </div>
  );
};

export default FetchResults;
