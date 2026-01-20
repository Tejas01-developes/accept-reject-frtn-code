import React from 'react'
import {Route, Routes} from 'react-router-dom';
import First from './pages/First';
import Req from './pages/Req';
const App = () => {
  return (
    <div>
<Routes>      
    {/* 1.code for first page */}
<Route path='/' element={<First/>}/>

{/* 2.code for req page */}
<Route path='/req' element={<Req/>}/>


    </Routes>
    </div>
  )
}

export default App
