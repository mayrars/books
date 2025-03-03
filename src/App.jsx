import { createBrowserRouter, Route, createRoutesFromElements, RouterProvider } from 'react-router'
import './App.css'
import Home from './pages/Home'
import About from './pages/About'
import RootLayout from './layouts/RootLayout'
import BookInfo from './pages/BookInfo'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="book/:bookId" element={<BookInfo />} />
    </Route>
  )
)

function App() {
  return (
    <RouterProvider router={router} />
  )
}

export default App
