import { createBrowserRouter, Route, createRoutesFromElements, RouterProvider } from 'react-router'
import './App.css'
import Home from './pages/Home'
import About from './pages/About'
import RootLayout from './layouts/RootLayout'
import BookInfo from './pages/BookInfo'
import Authors from './pages/Authors'
import Author from './pages/Author'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="book/:bookId" element={<BookInfo />} />
      <Route path="authors" element={<Authors />} />
      <Route path="author/:authorId" element={<Author />} />
    </Route>
  )
)

function App() {
  return (
    <RouterProvider router={router} />
  )
}

export default App
