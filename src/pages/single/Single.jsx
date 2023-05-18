import './single.css';
import Sidebar from '../../components/sidebar/Sidebar';
import Singlepost from '../../components/singlepost/Singlepost';
import { useLocation } from 'react-router-dom';

const Single = () => {
  
  return (
    <div className='single'>
        <Singlepost />
        <Sidebar />
    </div>
  )
}

export default Single
