import React from 'react'

const TaskCard = ({atask, tasks, setTasks}) => {
    const {title, date, description, priority} = atask;
    return (
        <div className="stats shadow">
             
            <div className="stat">
                <div className="stat-title">{date}</div>
                <div className="stat-value">{title}</div>
                <div className="stat-desc">{description}</div>
                <div className="stat-desc">{priority}</div>
            </div> 

        </div>
    )
}

export default TaskCard;
