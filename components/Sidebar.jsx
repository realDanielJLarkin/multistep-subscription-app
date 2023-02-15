
import ListItem from './ListItem'

import list from '../data/listItems'

import styles from '../styles/Sidebar.module.css'

function Sidebar({ active }) {
    return (
        <div className={styles.container}>
            <img src="/desktop-sb.svg" alt="" />
            <div className={styles.list}>
                {list.map((item) => (
                    <ListItem active={active} key={item.number} number={item.number} title={item.title} />
                ))}
            </div>
        </div>

    )
}

export default Sidebar