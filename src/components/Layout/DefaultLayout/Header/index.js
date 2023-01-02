import styles from './Header.module.scss';
import clsx from 'clsx'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell, faMagnifyingGlass, faUser } from '@fortawesome/free-solid-svg-icons';
import useAuth from '../../../../hooks/useAuth';
import { Fragment, useEffect, useState } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';


function Header() {
    const [isLogin, setIslogin] = useState(false)
    const { auth, setAuth } = useAuth()
    const [name, setName] = useState('Username')
    const navigate = useNavigate()

    //const currentUser = true

    useEffect(() => {
        (name !== 'Username') ? setName('Username') : setName(auth.fname)
    }, [auth])

    const LoginUI = () => {
        navigate("/")
        // setIslogin(true)
    }

    const SignInUI = () => {
        navigate("/register")
    }


    const usernameHeader = <>
        <button className={clsx(styles.actionButton)}>
            <FontAwesomeIcon icon={faBell} />
        </button>
        <button className={clsx(styles.actionButton)}>
            <FontAwesomeIcon icon={faUser} />
        </button>
        <div className={clsx(styles.username)}>{name}</div>
    </>

    const loginHeader = <>
        <button className={clsx(styles.signInBtn)}
            onClick={SignInUI}
        >
            <span className={clsx(styles.btnFont2)}>
                Sign in
            </span>
        </button>
        <button className={clsx(styles.loginBtn)}
            onClick={LoginUI}
        >
            <span className={clsx(styles.btnFont)}>
                Log in
            </span>
        </button> </>


    return (
        <header className={clsx(styles.wrapper)}>
            <div className={clsx(styles.name)}>SmartView</div>
            <div className={clsx(styles.search)}>
                <input placeholder='Search by ID or Name' spellCheck={false}
                />
                <button className={clsx(styles.searchButton)}>
                    <FontAwesomeIcon icon={faMagnifyingGlass} />
                </button>
            </div>
            <div className={clsx(styles.actions)}>
                {isLogin === true ?
                    usernameHeader
                    : loginHeader
                }
            </div>
        </header >
    )
}

export default Header;