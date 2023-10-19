import React from 'react'


function UserColumn({ userval }) {
    // console.log(userval)
    // console.log(userval[0]['Anoop sharma'].title)
    console.log(JSON.parse(localStorage.getItem('apiObject')))
    const ticket = JSON.parse(localStorage.getItem('apiObject')).tickets;
    const user = JSON.parse(localStorage.getItem('apiObject')).users;
    // console.log(ticket);
    // console.log(user)
    const arr = []
    user.forEach((i) => {
        ticket.forEach((j) => {
            if (i.id == j.userId) {
                arr.push({
                    name: i.name, title: j.title, id: j.id, tag: j.tag
                })
            }
        })
    })
    const name = [];
    arr.forEach((i) => {
        name.push(i.name);
    })
    // console.log(name)
    const name1 = arr.filter((i) => i.name === 'Anoop sharma');
    const name2 = arr.filter((i) => i.name === 'Yogesh');
    const name3 = arr.filter((i) => i.name === 'Shankar Kumar');
    const name4 = arr.filter((i) => i.name === 'Suresh');



    return (
        <div className="kanban-column">
            <div className="kanban-card-list1">


                <div className="nameDiv">
                    <span>{name[0]} <span className="count">{name1.length}</span></span>
                {
                    name1.map((i) => {
                        return (
                            <>
                                

                                <div className="kanban-card">
                                    <p className='cam'>{i.id}</p>
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
                <span>{name[1]} <span className="count">{name2.length}</span></span>
                {
                    name2.map((i) => {
                        return (
                            <>
                               

                                <div className="kanban-card">
                                    <p className='cam'>{i.id}</p>
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
                <span>{name[2]} <span className="count">{name3.length}</span></span>
                {
                    name3.map((i) => {
                        return (
                            <>
                              

                                <div className="kanban-card">
                                    <p className='cam'>{i.id}</p>
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
                <span>{name[3]} <span className="count">{name4.length}</span></span>
                {
                    name4.map((i) => {
                        return (
                            <>
                             

                                <div className="kanban-card">
                                    <p className='cam'>{i.id}</p>
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
                <p></p>
            </div>
        </div>
    )
}

export default UserColumn