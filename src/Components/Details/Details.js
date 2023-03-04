import React from 'react'
import './Details.css'
import { useSelector } from 'react-redux'

const Details = ({loc,condition,tempc,tempf,humi}) => {

    const store  = useSelector((state)=>state)

  return (
    <div>
      <h1>WEATHER DATA</h1>
      <div className='box3'>

        Location : {store.location}

      

      

      </div>
    </div>
  )
}

export default Details
