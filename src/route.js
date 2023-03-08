import React from 'react'
import { Route, Routes } from 'react-router-dom'
import ValidationForm from './App'
import Add1 from './add'
import Update1 from './update'
import Delete1 from './delete'
import Rail2 from './rail'
import Get from './get'


function Routing() {
  return (
    <>
    <Routes>
    <Route path="/" element={<Rail2/>}/>
    <Route path="/add" element={<Add1/>}/>
    <Route path="/update" element={<Update1/>}/>
    <Route path="/delete" element={<Delete1/>}/>
    <Route path="/App" element={<ValidationForm/>}/>
    <Route path="/show" element={<Get/>}/>
    </Routes>
    </>
  )
}

export default Routing