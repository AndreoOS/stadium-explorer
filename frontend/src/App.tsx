import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
const queryClient = new QueryClient()
import { QueryClient, QueryClientProvider } from 'react-query'
import { Routes, Route } from 'react-router-dom'
import Home from './Pages/Home'

function App() {
  window.history.scrollRestoration = 'manual'

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='*' element={<Home />} />
        </Routes>
      </QueryClientProvider>
    </>
  )
}

export default App
