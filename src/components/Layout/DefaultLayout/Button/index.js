import styles from './Button.module.scss';
import clsx from 'clsx'
import createButton from './create.png';
import post_manager from './post_manager.png';
import { useNavigate } from 'react-router-dom';
import useAuth from '../../../../hooks/useAuth';

function Buttons( {setModal} ) {
  // eslint-disable-next-line
  const {auth, setAuth} = useAuth()
  const navigate = useNavigate()

  const handleClick = (type) => {
    if (JSON.stringify(auth) === '{}') navigate('/')
    else if (type === 'create') setModal(true)
    else navigate('/edit')
  }  

  return (
    <div className={clsx(styles.buttons)}>
      <input type="image" src={createButton} alt='Button' className={clsx(styles.button1)} onClick={() => handleClick('create')}/>
      <input type="image" src={post_manager} alt='Button' className={clsx(styles.button2)} onClick={() => handleClick('')}/>
    </div>
  )
}

export default Buttons;