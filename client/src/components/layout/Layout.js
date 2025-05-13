import React from 'react'
import Header from './Header'
import Footer from './Footer'
import { ToastContainer } from 'react-toastify';

const Layout = ({ children }) => {
    return (
        <>
            <Header />
            <main style={{minHeight: "70vh"}}>
                <ToastContainer />
                {children}
            </main>
            <Footer />
        </>
    )
}

export default Layout