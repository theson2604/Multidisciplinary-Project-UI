import styles from './Header.module.scss';
import clsx from 'clsx'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell, faMagnifyingGlass, faUser } from '@fortawesome/free-solid-svg-icons';

function Header() {

    //const currentUser = true

    return (
        <header className={clsx(styles.wrapper)}>
            <div className={clsx(styles.name)}>SmartView</div>
            <div className={clsx(styles.search)}>
                <input placeholder='Search by ID or Name' spellCheck={false}
                />
                <button className={clsx(styles.searchButton)}>
                    <FontAwesomeIcon icon={faMagnifyingGlass}/>
                </button>
            </div>
            <div className={clsx(styles.actions)}>
                <button className={clsx(styles.actionButton)}>
                    <FontAwesomeIcon icon={faBell}/>
                </button>   
                <button className={clsx(styles.actionButton)}>
                    <FontAwesomeIcon icon={faUser}/>
                </button>
                <div className={clsx(styles.username)}>User Name</div>
            </div>
        </header>
    )
}

export default Header;