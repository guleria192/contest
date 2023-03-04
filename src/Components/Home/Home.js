import React, { useState } from 'react'
import { useDispatch} from 'react-redux'
import axios from 'axios'
import { SEARCH_VAL } from '../../redux/Action'
import { useNavigate } from 'react-router-dom'
import './Home.css'





const Home = () => {


    const navigate = useNavigate()

    const [name , setName] = useState("")
        
    
    
    
    


    //  console.log(name);
    const key = "e6231e8c8aa849bca5a52717230403"
    // const store = useSelector((state) => state)
    // console.log(store);
    const dispatch = useDispatch()


    const handlechg = () => {
        
        axios.get(`https://api.weatherapi.com/v1/current.json?key=${key}&q=${name}`)
        .then(resp => {
          console.log(resp);
          // console.log(resp.data.location.name);
          // console.log(resp.data.current.condition.text);
          // console.log(resp.data.current.temp_c);
          // console.log(resp.data.current.temp_f);
          // console.log(resp.data.current.humidity);
         
          dispatch({type:SEARCH_VAL, payload :{
             location : resp.data.location.name,
            //  Weather_Condition : resp.data.current.condition.text,
            //  Temp_C : resp.data.current.temp_c,
            //  Temp_F : resp.data.current.temp_f,
            //  Humidity : resp.data.current.humidity
          }
            })

        })

           navigate("weather/:city")
        // <Navigate to={`weather/${city}`}/>

        

    }

  return (
    <div className='box'>

      <div  className='box1'>
      <h1>WEATHER API</h1>
      </div>

    <div>
        <input type="text" value={name} onChange={(e)=> {setName(e.target.value)}} />
    </div>

    <div className='box2'>
        <button onClick={handlechg}>search</button>
    </div>

    

    </div>
  )
}

export default Home
