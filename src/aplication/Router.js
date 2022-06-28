import React from 'react'
import {BrowserRouter, Route, Routes } from 'react-router-dom'
import App from '../App'
import BooksPage from '../pages/BooksPage'

function Router() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<App/>}/>
            <Route path='/books' element={<BooksPage/>}/>
        </Routes>
    </BrowserRouter>
  )
}

export default Router