import { Route, Routes } from "react-router-dom"
import { HomePage } from "./HomePage"
import { AboutPage } from "./AboutPage"
import { LoginPage } from "./LoginPage"


export const MainApp = () => {
    return (
        <>
            <h1>MainApp</h1>
            <hr/>
            <Routes>
                <Route path="/" element={ <LoginPage/> }/>
            </Routes>
        </>
    )
}