import { Outlet } from "react-router"
import Header from "../components/Header"
import Footer from "../components/Footer"

const RootLayout = () => {
  return (
    <div>
        <Header />
        <main style={{ height: 'calc(100vh - 327px)'}}>
            <Outlet />
        </main>
        <Footer />
    </div>
  )
}

export default RootLayout