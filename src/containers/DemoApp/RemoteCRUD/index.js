import React from 'react'
import { Route, Routes } from 'react-router-dom'

import Layout from './Layout'

import List from "./List"
import Edit from "./Edit"
import About from "./About"

import "./index.css"

const NotFound = () => { return <div>Not Found</div> }

const RemoteCRUD = () => {
  return (
    <div className='remotecrud'>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<List />} />
          <Route path="about" element={<About />} />
          <Route path="create" element={<Edit />} />
          <Route path="edit" element={<Edit />} />
          <Route path="edit/:id" element={<Edit />} />
          <Route path="*" element={<NotFound />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  )
}

export default RemoteCRUD