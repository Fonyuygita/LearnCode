import Provider from "@/components/ClerckProvider"
import Footer from "@/components/Footer"
import Navbar from "@/components/Navbar"
import Whatsapp from "@/components/Whatsapp"
import React from "react"
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'




const Layout=({children}:{children:React.ReactNode})=>{
return(
    <>
    <Provider>
    <Navbar/>
    {children}
    <Whatsapp/>
    <Footer/>
    <ToastContainer position='top-right' theme='dark' autoClose={4000}/>
    </Provider>
    </>
)
}

export default Layout