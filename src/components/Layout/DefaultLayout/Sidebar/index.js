import clsx from 'clsx';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import useAuth from '../../../../hooks/useAuth';
import styles from './Sidebar.module.scss'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faHouse,
    faRightFromBracket,
    faAngleDoubleRight,
    faChartColumn,
    faCheckToSlot,
    faGear,
    faTimes
  } from "@fortawesome/free-solid-svg-icons";

function Sidebar() {
    const [isOpen, setIsOpen] = useState(false)
    // const location = useLocation()
    const [clicked, setClicked] = useState('')
    const {auth, setAuth} = useAuth()
    const navigate = useNavigate()

    const handleTrigger = () => setIsOpen(!isOpen)

    const handleClick = (route) => {
        setClicked(route)
        navigate(route)
    }

    const signOut = async (e) => {
        e.preventDefault()
        const response = await axios.get('http://localhost:3000/users/logout')
        if (response?.data === true) {  
            setAuth({}) 
        }
        else console.log('failed')
    }
    
    return (
        <aside className={clsx(styles.sidebar, isOpen ? styles.sidebar_open : "")} >
            <div className={clsx(styles.inner)}>
                <div className={clsx(styles.page)} onClick={handleTrigger}>
                    <FontAwesomeIcon icon={isOpen ? faTimes : faAngleDoubleRight} />
                </div>
                <div 
                    style={{
                        background: (clicked==='/home')? 'rgba(0, 0, 0, 0.05)' : '',
                        borderRadius: (clicked==='/home')? '10px' : ''
                    }}
                    className={clsx(styles.page)}
                    onClick={() => handleClick('/home')}
                >
                    <FontAwesomeIcon icon={faHouse} />
                    <span>HOME</span>
                </div>
                <div 
                    style={{
                        background: (clicked==='/trending')? 'rgba(0, 0, 0, 0.05)' : '',
                        borderRadius: (clicked==='/trending')? '10px' : ''
                    }}
                    className={clsx(styles.page)}
                    onClick={() => handleClick('/trending')}
                >
                    <FontAwesomeIcon icon={faChartColumn} />
                    <span>TRENDING</span>
                </div>
                {(auth?.role === 'admin')?
                <div 
                    style={{
                        background: (clicked==='/requesting')? 'rgba(0, 0, 0, 0.05)' : '',
                        borderRadius: (clicked==='/trending')? '10px' : ''
                    }}
                    className={clsx(styles.page)}
                    onClick={() => handleClick('/requesting')}
                >
                    <FontAwesomeIcon icon={faCheckToSlot} />
                    <span>ADMININSTRATION</span>
                </div>:<></>
                }
                {/* <div 
                    style={{
                        background: (clicked==='/setting')? 'rgba(0, 0, 0, 0.05)' : '',
                        borderRadius: (clicked==='/setting')? '10px' : ''
                    }}
                    className={clsx(styles.page)}
                    onClick={() => handleClick('/setting')}
                >
                    <FontAwesomeIcon icon={faGear} />
                    <span>SETTING</span>
                </div> */}
                {(JSON.stringify(auth) !== '{}')?
                    <div className={clsx(styles.page)} onClick={signOut}>
                        <FontAwesomeIcon icon={faRightFromBracket} />
                        <span>LOG OUT</span>
                    </div>:<></>
                }
            </div>
            
        </aside>
    )
}

export default Sidebar;