import React from 'react'
import { Route, Routes } from 'react-router-dom'

import Layout from './Layout'

const Home = () => { return <div>Home</div> }
const PostsEdit = () => { return <div>PostsEdit</div> }
const NotFound = () => { return <div>NotFound</div> }

const RemoteCRUD = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="posts">
            <Route index element={<Home />} />
            <Route path="new" element={<PostsEdit />} />
            <Route path=":id" element={<PostsEdit />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </div>
  )
}

export default RemoteCRUD