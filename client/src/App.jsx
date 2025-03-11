import React, { useContext } from 'react'
import Router from './routes/Router'
import { useDataContext } from './context/userContext'

const App = () => {

  // let user = useContext(useDataContext);
  // console.log(user);

  return (
    <div>
      <Router/>
    </div>
  )
}

export default App
