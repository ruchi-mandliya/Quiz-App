import React from 'react'
import './Home.css';

const Home = () => {
  return (
    <div className='content'>
      <div className='settings'>
        <span style={{fontSize: 30}}>Quiz Settings</span>
 
      </div>
      <img src='/think.svg' className='banner' alt = "quiz img"/>
    </div>
  )
}

export default Home