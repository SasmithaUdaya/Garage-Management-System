import Repairdashboard from '../components/Repairdashboard'
import User from '../components/User'

import b1 from '../Image/b3.jpg';


const styles = {
    backgroundImage: `url(${b1})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    width: '100%',
    height: '100%',
  };

export default function Progresssupervisor() {
  return (
    <div style={{ ...styles,display: 'flex',  padding: '0px' }}>
    
    <div style={{ width:'250px', background :'black', padding: '0px'  }}>
        <Repairdashboard />
    </div>
    <div style={{position:'relative', right:'-280px', top:'-40px', padding: '5px' }}>
        <User />
    </div>
</div>
  )
}
