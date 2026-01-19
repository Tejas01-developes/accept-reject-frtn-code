import React from 'react'
import {Route, Routes} from 'react-router-dom';
import First from './pages/First';
const App = () => {
  return (
    <div>
<Routes>      
    {/* 1.code for first page */}
<Route path='/' element={<First/>}/>



    </Routes>
    </div>
  )
}

export default App
