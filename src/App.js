import './App.css';

import React, { useState } from 'react'
import Child from './Child'

const App = () => {
  const [parameters, setParameters] = useState()
  const [childData, setChildData] = useState('')

  const parentMethod = (data) => {
    console.log('TEST METHOD FROM PARENT')
    // setParameters(parameters + 1)
    // console.log(parameters)
    setParameters({ parameters: data })
  }

  const nextParentMethod = (e) => {
    setChildData(e.target.value)
    console.log(childData)
  }


  return (
    <div>
      <p> Test </p>
      <Child MethodFromParent={parentMethod} NextMethodFromParent={nextParentMethod}> </Child>
      <h1> {childData} </h1>
    </div>
  )
}

export default App
