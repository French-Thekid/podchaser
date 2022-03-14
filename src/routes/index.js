import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { Home, Podcast, NotFound } from 'pages'

export default function AppRoutes() {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route path="/podcast/:id" element={<Podcast />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}
