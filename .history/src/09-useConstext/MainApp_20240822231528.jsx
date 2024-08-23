import { Link, Navigate, Route, Routes } from "react-router-dom"
import { HomePage } from "./HomePage"
import { AboutPage } from "./AboutPage"
import { LoginPage } from "./LoginPage"


export const MainApp = () => {
    return (
        <>
            <h1>MainApp</h1>
            <hr/>
            <Link href="/">Home</Link>
            <Link href="/about">About</Link>
            <Link href="/login">Login</Link>


            <Routes>
                <Route path="/" element={ <HomePage/> }/>
                <Route path="/login" element={ <LoginPage/> }/>
                <Route path="/about" element={ <AboutPage/> }/>

                {/* <Route path="/*" element={<LoginPage/> }/> */}
                <Route path="/*" element={ <Navigate to="/about"/>} />

            </Routes>
        </>
    )
}