import React from 'react'
import { Router,Route,Routes } from 'react-router-dom';
import SignIn from '../../signin/SignIn'
import SignUp from '../../signup/SignUp'

function RoutesComp() {
  return (
    <div>
        
        <Routes>
            {/* <Route path='/homecomp' element={<Home/>}/> */}
            <Route path='/signin' element={<SignIn/>}/>
            <Route path='/signup' element={<SignUp/>}/>
        </Routes>
    </div>
  )
}

export default RoutesComp