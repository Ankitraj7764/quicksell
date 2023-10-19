// KanbanColumn.js
import React from 'react';
import KanbanCard from './KanbanCard';

function KanbanColumn({ title, tickets}) {
    // console.log(tickets)
console.log(title)
  return (
    <>
    
 <div className="kanban-column">
    <h5>{title} <span>{tickets.length}</span></h5>
    <div className="kanban-card-list">
      {tickets && tickets.map((ticket) => (
        <KanbanCard key={ticket.id} ticket={ticket} />
      ))}
    </div>
  </div>

 
    </>
  );
}

export default KanbanColumn;
