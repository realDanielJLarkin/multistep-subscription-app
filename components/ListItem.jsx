import React from 'react'



function ListItem({ number, title, active }) {
    return (
        <div className='list-item'>
            <div className={number === active + 1 ? `item-number item-number-active` : `item-number`}>
                <h3>{number}</h3>
            </div>
            <div className='item-content'>
                <div className="item-step">
                    <h2 className='heading-100 uppercase'>Step {number}</h2>
                </div>
                <div className="item-title">
                    <h2 className='heading-300 uppercase'>{title}</h2>
                </div>
            </div>
        </div>
    )
}

export default ListItem