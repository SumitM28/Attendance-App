import './home.css'
import { useNavigate } from 'react-router'
const Home = () => {
    const navigate=useNavigate();
  return (
    <>
        <div className="home section">
            <h1 className='sectionTitle'>Attendance App</h1>
            <div className="homeContainer">
                <h2 className='homeTitle'>Login as a</h2>
                <button className='homeBtn' onClick={()=>navigate('/student')}>Student</button>
                <button className='homeBtn' onClick={()=>navigate('/teacher')}>Teacher</button>

            </div>
        </div>
    </>
  )
}

export default Home