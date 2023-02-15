import React from 'react'
import ListItem from './ListItem'
import list from '@/data/listItems'

function MobileSideBar({ active }) {
    return (
        <div className='mobile-img'>
            <div className="mobile-numbers">
                {list.map((item) => (
                    <ListItem active={active} key={item.number} number={item.number} title={item.title} />
                ))}
            </div>
        </div>
    )
}

export default MobileSideBar