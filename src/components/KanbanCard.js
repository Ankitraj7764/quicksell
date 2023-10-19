import React from 'react';

function KanbanCard({ ticket }) {
    // console.log(ticket)
  return (
    <div className="kanban-card">
     <div className='kanban-card-header'>
     <p className='cam'>{ticket.id}</p>
     <img src="https://images.unsplash.com/photo-1545253088-68fe6b5468fd?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=400&ixid=MnwxfDB8MXxyYW5kb218MHx8d2FsbHBhcGVyLHNob3B8fHx8fHwxNjk3Njg2NDc2&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1400" alt="" />
     </div>
      <div className="kanban-card-header">
        <span className="kanban-card-title">{ticket.title}</span>
      </div>
      <div className="kanban-card-content">
        <div className='kanban-card-content-col'></div>
        <p className="kanban-card-status">..{ticket.tag}</p>
        
      </div>
    </div>
  );
}

export default KanbanCard;

