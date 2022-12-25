import styles from './Button.module.scss';
import clsx from 'clsx'
import createButton from './create.png';
import post_manager from './post_manager.png';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';


function Buttons() {
    const [isOpen, setIsOpen] = useState(false)
    // const location = useLocation()
    const [clicked, setClicked] = useState('')
    const navigate = useNavigate()
  return (
    <div className={clsx(styles.buttons)}>
        <input type="image" src={createButton} className={clsx(styles.button1)} />
        <input type="image" src={post_manager} className={clsx(styles.button2)} />
    </div>
  )
}

export default Buttons;