import styles from './Button.module.scss';
import clsx from 'clsx'
import createButton from './create.png';
import post_manager from './post_manager.png';
import { useNavigate } from 'react-router-dom';


function Buttons( {setModal} ) {
    // const [isOpen, setIsOpen] = useState(false)
    // const location = useLocation()
    // const [clicked, setClicked] = useState('')
    const navigate = useNavigate()
  return (
    <div className={clsx(styles.buttons)}>
      <input type="image" src={createButton} alt='Button' className={clsx(styles.button1)} onClick={() => setModal(true)}/>
      <input type="image" src={post_manager} alt='Button' className={clsx(styles.button2)} onClick={() => navigate('/edit')}/>
    </div>
  )
}

export default Buttons;