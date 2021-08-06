import './App.css';

import React, { useState } from 'react'
import Child from './Child'

const App = () => {
  const [parameters, setParameters] = useState(0)
  const [childData, setChildData] = useState()
  const [userInput, setUserInput] = useState('')

  const parentMethod = (data) => {
    setParameters(parameters + 1)
    console.log(parameters)
  }

  const nextParentMethod = (e) => {
    setChildData(e.target.value)
    console.log(childData)
  }

  const handleSubmitForm = (e) => {
    setUserInput(e.target.value)
    console.log(userInput)

  }

  return (
    <div>
      <Child
        MethodFromParent={parentMethod}
        NextMethodFromParent={nextParentMethod}
        HandleSubmit={handleSubmitForm}>
      </Child>
      <h1> {childData} </h1>
      <h2> {userInput} </h2>
    </div>
  )
}

export default App
