import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import { Header } from './components/Header'
import { Home } from './components/Home'

const router = createBrowserRouter([
  { path: "/", element: <Home></Home> }
])

function App() {

  return (
    <>
      <div className="main-container bg-[#F2E8DF]">
        <Header></Header>
        <RouterProvider router={router}></RouterProvider>
      </div>
    </>
  )
}

export default App
