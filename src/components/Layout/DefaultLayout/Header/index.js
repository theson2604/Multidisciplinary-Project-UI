import styles from './Header.module.scss';
import clsx from 'clsx'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell, faMagnifyingGlass, faUser } from '@fortawesome/free-solid-svg-icons';
import useAuth from '../../../../hooks/useAuth';
// import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import logo from './smartview.png';


function Header() {
    // eslint-disable-next-line
    const { auth, setAuth } = useAuth()
    const navigate = useNavigate()

    const LoginUI = () => {
        navigate("/login")
    }

    const SignInUI = () => {
        navigate("/register")
    }

    return (
        <header className={clsx(styles.wrapper)}>
            <div
            // className={clsx(styles.name)}
            >
                <img src={logo}
                    alt=''
                    className={clsx(styles.logo)
                    }
                />
            </div>
            <div className={clsx(styles.search)}>
                <input placeholder='Search by ID or Name' spellCheck={false}
                />
                <button className={clsx(styles.searchButton)}>
                    <FontAwesomeIcon icon={faMagnifyingGlass} />
                </button>
            </div>
            <div className={clsx(styles.actions)}>
                {(JSON.stringify(auth) === '{}') ?
                    <>
                        <button className={clsx(styles.signInBtn, styles.hoverBigBlur)}
                            onClick={SignInUI}
                        >
                            <span className={clsx(styles.btnFont2)}>
                                Sign in
                            </span>
                        </button>
                        <button className={clsx(styles.loginBtn, styles.hoverBigBlur)}
                            onClick={LoginUI}
                        >
                            <span className={clsx(styles.btnFont)}>
                                Log in
                            </span>
                        </button>
                    </> :
                    <>
                        <button className={clsx(styles.actionButton)}>
                            <FontAwesomeIcon icon={faBell} />
                        </button>
                        <button className={clsx(styles.actionButton)}>
                            <FontAwesomeIcon icon={faUser} />
                        </button>
                        <div className={clsx(styles.username)}>{auth?.lname}</div>
                    </>
                }
            </div>
        </header >
    )
}

export default Header;