import React from 'react'

function UserColumnPri() {
    const ticket = JSON.parse(localStorage.getItem('apiObject')).tickets;

    const zeroPri = ticket.filter((i) => i.priority == 0)
    const lowPri = ticket.filter((i) => i.priority == 1)
    const midiumPri = ticket.filter((i) => i.priority == 2)
    const highPri = ticket.filter((i) => i.priority == 3)
    const urgent = ticket.filter((i) => i.priority == 4)

    return (

        <div className="kanban-column">
            <div className="kanban-card-list1">


                <div className="nameDiv">
                    <span>No priorty</span>
                    {
                        zeroPri.map((i) => {
                            return (
                                <>


                                    <div className="kanban-cardP">
                                        <div className='kanban-card-header'>
                                            <p className='cam'>{i.id}</p>
                                            <img src="https://images.unsplash.com/photo-1545253088-68fe6b5468fd?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=400&ixid=MnwxfDB8MXxyYW5kb218MHx8d2FsbHBhcGVyLHNob3B8fHx8fHwxNjk3Njg2NDc2&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1400" alt="" />
                                        </div>
                                        
                                        <div className="kanban-card-header">
                                            <span className="kanban-card-title">{i.title}</span>
                                        </div>
                                        <div className="kanban-card-content">

                                            <p className="kanban-card-status">... {i.tag}</p>

                                        </div>
                                    </div>


                                </>
                            )
                        })
                    }
                </div>

                <div className="nameDiv">
                    <span>Urgent</span>
                    {
                        urgent.map((i) => {
                            return (
                                <>


                                    <div className="kanban-cardP">
                                    <div className='kanban-card-header'>
                                            <p className='cam'>{i.id}</p>
                                            <img src="https://images.unsplash.com/photo-1545253088-68fe6b5468fd?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=400&ixid=MnwxfDB8MXxyYW5kb218MHx8d2FsbHBhcGVyLHNob3B8fHx8fHwxNjk3Njg2NDc2&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1400" alt="" />
                                        </div>
                                        <div className="kanban-card-header">
                                            <span className="kanban-card-title">{i.title}</span>
                                        </div>
                                        <div className="kanban-card-content">

                                            <p className="kanban-card-status">... {i.tag}</p>

                                        </div>
                                    </div>


                                </>
                            )
                        })
                    }
                </div>

                <div className="nameDiv">
                    <span>High</span>
                    {
                        highPri.map((i) => {
                            return (
                                <>


                                    <div className="kanban-cardP">
                                    <div className='kanban-card-header'>
                                            <p className='cam'>{i.id}</p>
                                            <img src="https://images.unsplash.com/photo-1545253088-68fe6b5468fd?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=400&ixid=MnwxfDB8MXxyYW5kb218MHx8d2FsbHBhcGVyLHNob3B8fHx8fHwxNjk3Njg2NDc2&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1400" alt="" />
                                        </div>
                                        <div className="kanban-card-header">
                                            <span className="kanban-card-title">{i.title}</span>
                                        </div>
                                        <div className="kanban-card-content">

                                            <p className="kanban-card-status">... {i.tag}</p>

                                        </div>
                                    </div>


                                </>
                            )
                        })
                    }
                </div>

                <div className="nameDiv">
                    <span>Medium</span>
                    {
                        midiumPri.map((i) => {
                            return (
                                <>


                                    <div className="kanban-cardP">
                                    <div className='kanban-card-header'>
                                            <p className='cam'>{i.id}</p>
                                            <img src="https://images.unsplash.com/photo-1545253088-68fe6b5468fd?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=400&ixid=MnwxfDB8MXxyYW5kb218MHx8d2FsbHBhcGVyLHNob3B8fHx8fHwxNjk3Njg2NDc2&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1400" alt="" />
                                        </div>
                                        <div className="kanban-card-header">
                                            <span className="kanban-card-title">{i.title}</span>
                                        </div>
                                        <div className="kanban-card-content">

                                            <p className="kanban-card-status">... {i.tag}</p>

                                        </div>
                                    </div>


                                </>
                            )
                        })
                    }
                </div>

                <div className="nameDiv">
                    <span>Low</span>
                    {
                        lowPri.map((i) => {
                            return (
                                <>


                                    <div className="kanban-cardP">
                                    <div className='kanban-card-header'>
                                            <p className='cam'>{i.id}</p>
                                            <img src="https://images.unsplash.com/photo-1545253088-68fe6b5468fd?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=400&ixid=MnwxfDB8MXxyYW5kb218MHx8d2FsbHBhcGVyLHNob3B8fHx8fHwxNjk3Njg2NDc2&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1400" alt="" />
                                        </div>
                                        <div className="kanban-card-header">
                                            <span className="kanban-card-title">{i.title}</span>
                                        </div>
                                        <div className="kanban-card-content">

                                            <p className="kanban-card-status">... {i.tag}</p>

                                        </div>
                                    </div>


                                </>
                            )
                        })
                    }
                </div>
            </div>

        </div>
    )
}

export default UserColumnPri