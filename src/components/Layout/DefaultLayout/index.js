import clsx from 'clsx'
import Header from './Header'
import Sidebar from './Sidebar'
import Buttons from './Button'
import Add from '../../Modal/Add/index'
import styles from './DefaultLayout.module.scss'
import { useState } from 'react'

function DefaultLayout({ children }) {
    const [modal, setModal] = useState(false)
    return (
        <div className={clsx(styles.wrapper)}>
            <Header />
            <div className={clsx(styles.container)}>
                <Sidebar />
                <Buttons setModal={setModal} />
                <Add modal={modal} setModal={setModal} />
                <div className={clsx(styles.content)}>
                    {children}
                </div>
            </div>
        </div>
    )
}

export default DefaultLayout