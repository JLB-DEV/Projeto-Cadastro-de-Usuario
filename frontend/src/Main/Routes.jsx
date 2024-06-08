import React from 'react'
import {Routes, Route  } from "react-router-dom";

import Home from '../Components/Home/home'
import userCrud from '../Components/User/userCrud'

const Rotas = (props) => 
    <Routes>
        <Route exact path='/inicio' element={<Home />} />
        <Route path='/users' Component={userCrud} element={<userCrud />} />
        <Route path='*' element={<Home />} />
    </Routes>

    export default Rotas;
