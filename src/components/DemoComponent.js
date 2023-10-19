import React, { useState } from 'react';

const DemoComponent = () => {
 
  const demoData = [
    { id: 1, text: 'Option 1' },
    { id: 2, text: 'Option 2' },
    // { id: 3, text: 'Option 3' },
    // { id: 4, text: 'Option 4' },
  ];

  
  const [selectedOption, setSelectedOption] = useState('All');
  const [filteredData, setFilteredData] = useState(demoData);

 
  const handleOptionChange = (event) => {
    const selectedValue = event.target.value;
    setSelectedOption(selectedValue);

    if (selectedValue === 'All') {
      setFilteredData(demoData);
    } else {
      const filtered = demoData.filter((item) => item.text === selectedValue);
      setFilteredData(filtered);
    }
  };

  return (
    <div>
      <h2>Array Filter Demo</h2>
      <label htmlFor="filterSelect">Select an option:</label>
      <select id="filterSelect" onChange={handleOptionChange} value={selectedOption}>
        <option value="All">All</option>
        {demoData.map((item) => (
          <option key={item.id} value={item.text}>
            {item.text}
          </option>
        ))}
      </select>
      <ul>
        {filteredData.map((item) => (
          <li key={item.id}>{item.text}</li>
        ))}
      </ul>
    </div>
  );
};

export default DemoComponent;
