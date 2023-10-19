import React from 'react';

function Header({ groupingOption, setGroupingOption, sortingOption, setSortingOption }) {
  const handleGroupingChange = (event) => {
    setGroupingOption(event.target.value);
  };

  const handleSortingChange = (event) => {
    setSortingOption(event.target.value);
  };

  return (
    <header className="header">
      <div className="display-options">
        <label>
          Group By:
          <select value={groupingOption} onChange={handleGroupingChange}>
            <option value="status">Status</option>
            <option value="user">User</option>
            <option value="priority">Priority</option>
          </select>
        </label>
      </div>
      <div className="sorting-options">
        <label>
          Sort By:
          <select value={sortingOption} onChange={handleSortingChange}>
            <option value="priority">Priority</option>
            <option value="title">Title</option>
          </select>
        </label>
      </div>
    </header>
  );
}

export default Header;
