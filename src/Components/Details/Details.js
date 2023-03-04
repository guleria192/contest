import React from 'react'
import './Details.css'
// import { useSelector } from 'react-redux'

const Details = ({loc,condition,tempc,tempf,humi}) => {

    // const store  = useSelector((state)=>state)

  return (
    <div>
      <h1>WEATHER DATA</h1>
      <div className='box3'>

        {/* Location : {store.location} */}

       <div className='box5'>
        Location : {loc}

       </div>
       <div className='box5'>
        Condition : {condition}
        
       </div>
       <div className='box5'>
        
        Temp_C : {tempc}
       </div>
       <div className='box5'>
        Temp_F : {tempf}
        
       </div>
       <div className='box5'>
        
        Humidity : {humi}
       </div>

      

      </div>
    </div>
  )
}

export default Details
