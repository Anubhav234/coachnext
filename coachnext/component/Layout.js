import React from 'react'
import Nav from "./Nav"
import Search from './Search'

const Layout = ({children}) => {
    return (
        <>
        <Search/>
        <Nav/>
        <div>
            <main>
                {children}
            </main>
        </div>
        </>
    )
}
export default Layout;
