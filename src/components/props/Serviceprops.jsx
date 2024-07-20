import React from 'react'

const Serviceprops = (props) => {
  return (
<>
<div className="container flex justify-center items-center flex-col w-[300px] h-auto p-10 text-center gap-y-10 rounded-lg " style={{backgroundColor:props.color}}>
  <div className="icon w-20 h-20 rounded-full flex justify-center items-center text-3xl bg-white ">    {props.icon}</div>
  <h2 className='font-bold text-2xl '>{props.h2}</h2>
  <p>{props.p}</p>
  <a href="/" className='font-bold'>{props.a}</a>
      </div>
</>
  )
}

export default Serviceprops