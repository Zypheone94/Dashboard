import React from 'react'

import './Schedule.scss'

const Schedule = ({month, date, todo, type, percentage}) => {
    return (
        <div className="element">

            <div className="informations">
                <div className="date">
                    <p className="month s12 w600">{month}</p>
                    <p className="numberDate s18 w600">{date}</p>
                </div>
                <div className="todo">
                    <h3 className="s16 w600">{todo}</h3>
                    <p className="s12 w400">{type}</p>
                </div>
            </div>

            <div className="percentage">
                <div className="total">
                    <div className="completion" style={{
                        width: percentage + "%"
                    }}></div>
                </div>
                <p className="s12 w400">{percentage} % Complete</p>
            </div>

            
        </div>
    )
}

export default Schedule
