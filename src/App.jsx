import { useState } from 'react'
import './App.css'
import Person from './components/Person'

function App() {
  return (
    <>
      <div>
        <Person
          firstName={"Josh"}
          lastName={"Allen"}
          age={28}
          hairColor={"Brown"}
        />
                <Person
          firstName={"Dalton"}
          lastName={"Kincaid"}
          age={25}
          hairColor={"Brown"}
        />
                <Person
          firstName={"Gabe"}
          lastName={"Davis"}
          age={25}
          hairColor={"Black"}
        />
      </div>
    </>
  )
}

export default App