import React, { useState  , useEffect } from 'react'
import {data} from './data'
const Task2 = () => {
 
const [listData,setlistData] = useState(null)

const fetchdata = () => {
return data
}
useEffect(() => {
    let ignore = false;
  
    async function fetching() {
      const json = await fetchdata();
      if (!ignore) {
        setlistData(json);
      }
    }
  
    fetching();
  
    return () => {
      ignore = true;
    };
  }, []);
    return (


<div className='FormSection'>
     
  {listData && listData.map((item) => (<p key={item.id }>name: {item.name} ,  title:{item.title}</p>))}
    </div>
  )
}

export default Task2