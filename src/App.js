// App.js
import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import KanbanBoard from './components/KanbanBoard';
import { fetchData } from './data/api';
import './App.css';
import UserCard from './components/UserCard';
import UserColumn from './components/UserColumn';
import UserColumnPri from './components/UserColumnPri';

function App() {
  const [tickets, setTickets] = useState([]);
  const [groupingOption, setGroupingOption] = useState('status');
  const [sortingOption, setSortingOption] = useState('priority');

  useEffect(() => {
    fetchData().then((data) => setTickets(data));
  }, []);

  // Apply grouping and sorting logic based on groupingOption and sortingOption
  let groupedAndSortedTickets = JSON.parse(JSON.stringify(tickets));
  const handleGroupingChange=(e)=>{
    setGroupingOption(e.target.value)
  }
  const handleSortingChange=(e)=>{
    setSortingOption(e.target.value)
  }
//  console.log(tickets);
//   console.log(groupedAndSortedTickets);
  // Grouping Logic
  if (groupingOption === 'user') {
    groupedAndSortedTickets = groupByUser(groupedAndSortedTickets);
  } 
  

  // Sorting Logic
  if (sortingOption === 'priority') {
    // Check if tickets is not empty before sorting
    if (groupedAndSortedTickets.length > 0) {
      groupedAndSortedTickets = sortByPriority(groupedAndSortedTickets);
    }
  } else if (sortingOption === 'title') {
    groupedAndSortedTickets = sortByTitle(groupedAndSortedTickets);
  }

  // console.log(tickets);
  // console.log(groupedAndSortedTickets);
localStorage.setItem('apiObject',JSON.stringify(tickets))
  return (
    <div className="app">
          <header className="header">
      <div className="display-options">
             <p>Display</p>

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
           
          </select>
        </label>
      </div>
    </header>
      {/* <KanbanBoard
        tickets={groupedAndSortedTickets}
        groupingOption={groupingOption}
        sortingOption={sortingOption}
        userval={groupByUser(tickets)}
      /> */}
     {
  groupingOption == 'status' ? (
    <KanbanBoard
      tickets={groupedAndSortedTickets}
      groupingOption={groupingOption}
      sortingOption={sortingOption}
      userval={groupByUser(tickets)}
    />
  ) : (
    groupingOption === 'priority' ? (
      <UserColumnPri/>
    ) : (
      
      <UserColumn userval={groupByUser(tickets)} />
    )
  )
}

    </div>
  );
}

function groupByUser(tickets) {
  const userdata=[];
  if(tickets.users){
    tickets.users.filter((i)=>{
       tickets.tickets.forEach(element => {
        if(element.userId==i.id){
          const userData = {};
          userData[i.name] = element;
          userdata.push(userData);
        }
       });
    })
  }
//  console.log(userdata)
  return userdata;
}


function groupByPriority(tickets) {
  // Implement grouping by priority logic here
  // Example: Group tickets into priority categories
  // console.log(tickets)
  return tickets;
}

function sortByPriority(tickets) {
  // Implement sorting by priority logic here
  return [...tickets].sort((a, b) => b.priority - a.priority);
}

function sortByTitle(tickets) {
  // Implement sorting by title logic here
  return [...tickets].sort((a, b) => a.title.localeCompare(b.title));
}

export default App;
