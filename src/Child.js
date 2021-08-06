import React, { useState } from 'react'

const Child = (props) => {
    const [data, setData] = useState('')

    // const handleChange = (e) => {
    //     setData(e.target.value)
    // }

    return (
        <div>
            <button onClick={props.MethodFromParent}> Parental Method </button>
            <input type="text" onChange={props.NextMethodFromParent} />
            <h1> {data} </h1>
        </div>
    )
}

export default Child
