import React , {useState} from 'react'

const Task1 = () => {

    const [value , setValue] = useState('')
    const [list,setList] = useState([])
  const [Errormsg,setErrormsg] = useState('')
  
  const handleClick =()=> {
    
    const NumberFromText =  +value.replace(/[^0-9]/g, '')
  
    setValue('')
    setErrormsg('')
  
   let TextValidation = CheckValidation()
  
  if(!TextValidation)
  {
    return
  }
  else if(value.toLowerCase().includes('add'))
  {
  
    
  let CheckExist = list.filter((item) => item.id === NumberFromText).length > 0
  
    if(CheckExist)
    {
      setErrormsg('Exist')
      return
    }
  
    setList([
  ...list , 
  {id:NumberFromText,name:value}
    ])
  }
  else if (value.toLowerCase().includes('update'))
  {
    debugger
    const updateList = list.map((item) => {
      if(item.id === NumberFromText)
      {
        return {
          ...item , 
          name:`update ${NumberFromText}`
        }
      }
      else {
        return item
      }
    })
    setList(updateList)
    console.log("yes")
  }
   
    
  } 
  
  
  const CheckValidation =()=> {
    
    if(!value)
    {
      setErrormsg('Enter Value')
      return false
    }
   return true
  }
  
  
  const handleDelete = (id) => {
    let Copylist = [...list]
  
    Copylist =  Copylist.filter((item) => item.id !== id)
  
    setList(Copylist)
  
  }




  return (
    <div className='FormSection'>
     
    <input type="text" value={value} onChange={(e) => setValue(e.target.value)}/>
    <button onClick={handleClick}>save</button>
 <p>{Errormsg}</p>

 <ul>
   {list.map((item,i) => ( <li  onClick={() => handleDelete(item.id)} key={item.id}><a href='#'>{item.name}</a></li>))}
 </ul>
   </div>
  )
}

export default Task1