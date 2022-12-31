import styles from './Header.module.scss';
import clsx from 'clsx'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell, faMagnifyingGlass, faUser } from '@fortawesome/free-solid-svg-icons';
import useAuth from '../../../../hooks/useAuth';
import { useEffect, useState } from 'react';

function Header() {
    const {auth, setAuth} = useAuth()
    const [name, setName] = useState('Username')
    //const currentUser = true

    useEffect(() =>{
        (name !== 'Username')? setName('Username') : setName(auth.fname)
    }, [auth])

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
                <div className={clsx(styles.username)}>{name}</div>
            </div>
        </header>
    )
}

export default Header;