import React from 'react'

const Box = (props) => {
  return (
    <div className="box">
        <h1>{props.title}</h1>
        <img className="item-img" 
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSITqzwFnlFJoJFs6tcXoen7rVs04XLnfAZXQ&s" alt="" />
        <h2>WIN</h2>
    </div>
  )
}

export default Box