import React from 'react'
const data=["hello","hello2","hello3","hello4","hello5"]
const Four = () => {

  return (
    <div>
        {data.map((item)=>{
           return <ul key={item} >
                <li>{item}</li>
            </ul>
        })}
    </div>
  )
}

export default Four