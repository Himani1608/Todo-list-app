import React, { useState } from 'react'

function Task(props) {
  const[isStriked , setStrike]= useState('false');

  const handleCheck = () => {
    if(isStriked === false){
        setStrike(true)
    }else{
      setStrike(false)
    }
  }

  return (
    <div className='list-items'>
        <input type="checkbox" checked = {isStriked} onClick={handleCheck} />
        <li style={{textDecoration: isStriked && 'line-through'}}>{props.value}</li>
        <i className='fa fa-times-circle' onClick={() => {props.sendData(props.id)}}></i>
    </div>
  )
}

export default Task
