import React from 'react';
import KanbanColumn from './KanbanColumn';

function KanbanBoard({ tickets, groupingOption, sortingOption }) {
  
  // console.log(tickets.tickets)
  if (!Array.isArray(tickets.tickets)) {
    return <div className="kanban-board">No tickets available.</div>;
  }

 
  const groupedTickets = groupTickets(tickets.tickets, groupingOption);
groupedTickets['done']=[];
groupedTickets['canceled']=[]
console.log(groupedTickets)
  return (
    <div className='statusBox'>
      <div className="kanban-board">
      {Object.keys(groupedTickets).map((groupKey) => (
        
        <KanbanColumn
          key={groupKey}
          title={groupKey} 
          tickets={groupedTickets[groupKey]}
          sortingOption={sortingOption}
        />
      ))}
    </div>
      
    </div>
  );
}


function groupTickets(tickets, groupingOption) {
 
  const grouped = {};

  tickets.forEach((ticket) => {
    const groupKey = ticket.status;

    if (!grouped[groupKey]) {
      grouped[groupKey] = [];
    }
    grouped[groupKey].push(ticket);

  });

  return grouped;
}

export default KanbanBoard;
